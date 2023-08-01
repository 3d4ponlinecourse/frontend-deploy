import { useEffect, useState } from "react";
import { host } from "../constant";

const useLesson = (id: string) => {
  const [lesson, useLesson] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`http://${host}/lesson/${id}`);
        const data = await res.json();

        useLesson(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { lesson, isLoading, error };
};

export default useLesson;
