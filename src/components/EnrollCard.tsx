import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import useCourseList from "../hooks/useCourseList";
import Loading from "./Loading";
import { AiOutlineClockCircle } from "react-icons/ai";
import useProfile from "../hooks/useProfile";
import { toast } from "react-hot-toast";
import { host } from "../constant";

const EnrollCard = () => {
  const { courseList, error, isLoading } = useCourseList();
  const { user } = useProfile();
  const navigate = useNavigate();

  const enroll = async (
    userId: string | undefined,
    courseId: number,
    courseName: string
  ) => {
    const enrollBody = { userId, courseId, courseName };
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://${host}/user/enroll`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(enrollBody),
      });
      const data = await res.json();

      if (data.statusCode && data.statusCode !== 201) {
        throw new Error(data.message);
      }
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const handleNavigate = (id: number) => {
    navigate(`/learn/${id}`);
  };

  const handleEnroll = async (
    userId: string | undefined,
    courseId: number,
    courseName: string
  ) => {
    try {
      await enroll(userId, courseId, courseName);
      toast.success("Enrollment Success!");
      console.log(userId, courseId, courseName);
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    }
  };

  console.log(user?.enrollment.length);
  const userEnrollmentArr: string[] = [];
  const enrollmentLen = user?.enrollment.length;
  for (let i = 0; i < enrollmentLen!; i++) {
    userEnrollmentArr.push(user!.enrollment[i].courseName);
  }

  if (!courseList || isLoading) return <Loading />;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="px-4 md:px-12 lg:px-64 flex flex-row gap-4 flex-wrap justify-center lg:flex-nowrap">
      {courseList.map((item) => (
        <>
          <Card className="mt-6 w-96 pt-12">
            <CardHeader color="blue-gray" className="relative h-48">
              <img src={item.imageUrl} alt="card-image" />
            </CardHeader>
            <CardBody className="h-64">
              <div className="flex flex-row items-center gap-1">
                <AiOutlineClockCircle />
                <Typography className="font-bold">{item.duration}</Typography>
              </div>

              <Typography variant="h4" color="blue-gray" className="mb-2">
                {item.courseName}
              </Typography>
              <Typography>{item.description}</Typography>
            </CardBody>
            {userEnrollmentArr.some((ele) => ele === item.courseName) ? (
              <CardFooter className="pt-0">
                <Button
                  color="teal"
                  variant="outlined"
                  onClick={() => handleNavigate(item.id)}
                >
                  Resume Learning
                </Button>
              </CardFooter>
            ) : (
              <CardFooter
                className="pt-0"
                onClick={() => handleEnroll(user?.id, item.id, item.courseName)}
              >
                <Button color="teal" onClick={() => handleNavigate(item.id)}>
                  Enroll this course
                </Button>
              </CardFooter>
            )}
          </Card>
        </>
      ))}
    </div>
  );
};

export default EnrollCard;
