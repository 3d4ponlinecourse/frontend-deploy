import { Rating, Button, Dialog, Textarea } from "@material-tailwind/react";
import { FormEvent, useState } from "react";
import { host } from "../constant";

import { toast } from "react-hot-toast";

interface IPostReviewsProps {
  courseId: number;
}

const PostReviews = ({ courseId }: IPostReviewsProps) => {
  const [open, setOpen] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleOpen = () => setOpen(!open);

  const handleComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    try {
      await fetch(`http://${host}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          comment: newComment,
          rating: rating,
          userId,
          courseId,
        }),
      });
      toast.success("Successfully created!");
      //   navigate("/learn/:id");
      location.reload();
    } catch (err: any) {
      toast.error(err.message);
    }
    setNewComment("");
  };

  return (
    <div className="my-4">
      <Button color="teal" onClick={handleOpen} variant="gradient">
        Review this course
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <form onSubmit={handleComment}>
          <div className="flex flex-col p-8 gap-2">
            <h2 className="font-bold text-lg">Write your review here.</h2>
            <Textarea
              color="teal"
              value={newComment}
              label="Message"
              onChange={(e: any) => setNewComment(e.target.value)}
            />
            <Rating
              value={rating}
              unratedColor="teal"
              ratedColor="teal"
              onChange={(rating) => setRating(rating)}
            />
            <Button color="teal" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

//   console.log(comment);

//   if (!comment || isLoading) return <Loading />;
//   if (error) return <h1>{error}</h1>;

export default PostReviews;
