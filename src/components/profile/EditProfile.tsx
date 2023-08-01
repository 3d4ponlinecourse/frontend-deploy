import { Button, Input } from "@material-tailwind/react";
import { FormEvent, useEffect, useState } from "react";
import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useProfile from "../../hooks/useProfile";
import { host } from "../../constant";

const Editprofile = () => {
  const { user } = useProfile();
  const navigate = useNavigate();
  const [newFirstname, setFirstname] = useState<string>("");
  const [newLastname, setLastname] = useState<string>("");
  const [newEmail, setEmail] = useState<string>("");

  useEffect(() => {
    if (user) {
      setFirstname(user["firstname"]);
      setLastname(user["lastname"]);
      setEmail(user.email);
    }
  }, [user]);

  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    try {
      const res = await fetch(`http://${host}/enroll//update/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstname: newFirstname,
          lastname: newLastname,
          email: newEmail,
        }),
      });
      const data = await res.json();

      if (data.statusCode >= 400) {
        throw new Error(data.message);
      }

      toast.success("Succesfully edited!");
      navigate(`/`);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold">
        Edit Profile<span className="text-teal-400">.</span>
      </h2>
      <div className="grid gap-3 py-4 w-1/2 text-base ">
        <Input color="teal" type="text" label="Firstname" />
        <Input color="teal" type="text" label="Lastname" />
        <Input color="teal" type="email" label="Email" />
      </div>
      <Button color="teal">Save Change</Button>
    </div>
  );
};

export default Editprofile;
