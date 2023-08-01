import React from "react";
import CurrentCourseList from "./CurrentCourseList";
import { IUserWithEnrollment } from "../../types/enrollment";
import NonEnroll from "./NonEnroll";

export interface ICurrentCourseProps {
  user: IUserWithEnrollment;
}

const CurrentCourse = ({ user }: ICurrentCourseProps) => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-bold">
          Enroll Courses<span className="text-teal-400">.</span>
        </p>
      </div>
      <div>
        {user.enrollment.length === 0 ? (
          <NonEnroll />
        ) : (
          user.enrollment.map((enrollment) => (
            <CurrentCourseList
              key={enrollment.courseName}
              enrollment={enrollment}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CurrentCourse;
