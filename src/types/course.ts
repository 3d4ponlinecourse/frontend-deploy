import { IComment } from "./comment";
import { IEnrollment } from "./enrollment";
import { ILesson } from "./lesson";

export interface ShowCourse {
  id: number;
  imageUrl: string;
  courseName: string;
  description: string;
  duration: string;
  lesson: {
    id: number;
    lessonName: string;
    videoUrl: string;
    duration: string;
    courseId: number;
  }[];
  comment: {
    comment: string;
    rating: number;
    userId: string;
    courseId: number;
    username: string;
    createdAt: Date;
  }[];
}

export interface ICreateCourse {
  courseName: string;
  videoUrl: string;
  imageUrl: string;
  duration: string;
  description: string;
}

export interface ICourse extends ICreateCourse {
  id: number;
  enrollment?: IEnrollment[];
  lesson?: ILesson[];
  comment?: IComment[];
}
