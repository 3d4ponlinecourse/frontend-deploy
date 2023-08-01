import { useEffect, useState } from "react";
import { ShowCourse } from "../types/course";
import { host } from "../constant";

const useCourseList = () => {
  const [courseList, setCourseList] = useState<ShowCourse[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`http://${host}/course`);
        const data = await res.json();

        setCourseList(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { courseList, isLoading, error };
};

export default useCourseList;
