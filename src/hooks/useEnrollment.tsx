import { useEffect, useState } from "react";
import { host } from "../constant";

const useEnrollment = (username: string) => {
  const [enrollment, useEnrollment] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`http://${host}/enrollment/${username}`);
        const data = await res.json();

        useEnrollment(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { enrollment, isLoading, error };
};

export default useEnrollment;
