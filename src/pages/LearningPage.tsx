import React from "react";
import ReactPlayer from "react-player";
import Reviews from "../components/Reviews";
import PostReviews from "../components/PostReviews";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Outcome from "../components/Outcome";
import useCourse from "../hooks/useCourse";
import { useParams } from "react-router-dom";

const LearningPage = () => {
  const { id } = useParams();
  const { course } = useCourse(Number(id));

  const [activeTab, setActiveTab] = React.useState("overview");

  const [url, setURL] = React.useState(
    "https://www.youtube.com/watch?v=lVg8y-rERlk"
  );
  const [activeLesson, setActiveLesson] = React.useState("");

  if (!course || !id) return <p>Failed to comment</p>;

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-12 lg:px-64 justify-between">
      <div className="flex flex-col gap-8 w-2/3">
        <ReactPlayer url={url} width={640} height={360} controls={true} />

        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-teal-400 shadow-none rounded-none",
            }}
          >
            <Tab
              key="overview"
              value="overview"
              onClick={() => setActiveTab("overview")}
              className={activeTab === "overview" ? "text-teal-400" : ""}
            >
              Overview
            </Tab>
            <Tab
              key="outcome"
              value="outcome"
              onClick={() => setActiveTab("outcome")}
              className={activeTab === "outcome" ? "text-teal-400" : ""}
            >
              Outcome
            </Tab>
            <Tab
              key="reviews"
              value="reviews"
              onClick={() => setActiveTab("reviews")}
              className={activeTab === "reviews" ? "text-teal-400" : ""}
            >
              Reviews
            </Tab>
          </TabsHeader>
          <TabsBody>
            <TabPanel key="overview" value="overview">
              {course?.description}
            </TabPanel>
            <TabPanel key="reviews" value="reviews">
              <Reviews />
              <PostReviews courseId={course.id} />
            </TabPanel>
            <TabPanel key="outcome" value="outcome">
              <Outcome />
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
      <div className="w-1/3">
        <p className="px-8 py-4 font-bold text-2xl text-teal-400">
          {course && course.courseName}
        </p>
        <div className="border p-8 rounded-xl overflow-auto max-h-screen">
          {course &&
            course.lesson.map((item) => (
              <>
                <div
                  onClick={() => {
                    setURL(item.videoUrl);
                    setActiveLesson(item.lessonName);
                  }}
                  key={item.id}
                  className="flex flex-col border-b cursor-pointer py-2"
                >
                  <div className="flex flex-row justify-between ">
                    <p
                      className={
                        activeLesson === item.lessonName
                          ? `text-teal-400 w-48`
                          : `w-48`
                      }
                    >
                      {item.lessonName}
                    </p>
                    <p className="text-gray-500">{item.duration}</p>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
