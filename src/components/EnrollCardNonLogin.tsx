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

const EnrollCardNonLogin = () => {
  const { courseList, error, isLoading } = useCourseList();

  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/learn/${id}`);
  };

  if (!courseList || isLoading) return <Loading />;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="px-4 md:px-12 lg:px-64 flex flex-row gap-4 flex-wrap justify-center lg:flex-nowrap">
      {courseList &&
        courseList!.map((item) => (
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
              <CardFooter className="pt-0">
                <Button color="teal" onClick={() => handleNavigate(item.id)}>
                  Enroll this course
                </Button>
              </CardFooter>
            </Card>
          </>
        ))}
    </div>
  );
};

export default EnrollCardNonLogin;
