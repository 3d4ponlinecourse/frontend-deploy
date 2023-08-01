import React, { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { host } from "../constant";

const EnrollCourse = () => {
  const navigate = useNavigate();
  const [userid, setUserId] = useState<string>();
  const [courseid, setCourseId] = useState<number>();
  const [courseName, setCourseName] = useState<string>();

  const handleEnroll = async (e: FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await fetch(`http://${host}/user/enroll`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userid,
          courseid,
          courseName,
        }),
      });
      toast.success("Successfully Enroll!!");
      navigate("/learn");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <form
      onSubmit={handleEnroll}
      className="flex flex-col gap-6 max-w-lg bg-gray-100 rounded-xl mx-auto my-14 py-5 px-7"
    >
      <div className="flex flex-col gap-2"></div>
      <div className="flex flex-col gap-2">
        <label>UserID:</label>
        <input
          className="p-3 rounded"
          type="text"
          value={userid}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>CourseID:</label>
        <input
          className="p-3 rounded"
          type="number"
          value={courseid}
          onChange={(number) => setCourseId(courseid)}
          required
        />
      </div>
      <div className="flex items-center gap-2">
        <label>CourseName:</label>
        <input
          className="p-3 rounded"
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />
      </div>
      <button
        className="bg-teal-500 p-3 rounded-lg text-white hover:bg-teal-600"
        type="submit"
        value="submit"
      >
        Submit
      </button>
    </form>
  );
};
export default EnrollCourse;
