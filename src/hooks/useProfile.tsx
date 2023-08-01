import { useEffect, useState } from "react";
import { IUserWithEnrollment } from "../types/enrollment";
import { host } from "../constant";

const useProfile = () => {
  const [user, useUser] = useState<IUserWithEnrollment>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      setIsLoading(true);
      try {
        const res = await fetch(`http://${host}/user/enroll/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        useUser(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { user, isLoading, error };
};

export default useProfile;
