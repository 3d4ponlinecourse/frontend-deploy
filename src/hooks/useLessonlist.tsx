import { useEffect, useState } from "react";
import { host } from "../constant";

const useLessonlist = () => {
  const [lessonlist, useLessonlist] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`http://${host}/lesson`);
        const data = await res.json();

        useLessonlist(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { lessonlist, isLoading, error };
};

export default useLessonlist;
