import React from "react";
import { BiNews } from "react-icons/bi";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

interface IContent {
  id: number;
  date: string;
  topic: string;
  body: string;
}

const Content: IContent[] = [
  {
    id: 1,
    date: "JULY 5, 2023",
    topic: "Posing Characters in ZBrush the Easy Way",
    body: "I have been invited by Reallusion to showcase a bit more of my posing workflow between ZBrush and Character Creator 4.",
  },
  {
    id: 2,
    date: "JUNE 3, 2023",
    topic: "Adobe live - Substance 3D tools",
    body: "Get ready for a new kind of livestream: In collaboration with Adobe we've setup a two part Zelda-inspired livestream",
  },
  {
    id: 3,
    date: "MAY 3, 2023",
    topic:
      "Star Wars art challenge: Reimagine a classic Star Wars character in 3D and May the 4th be with you",
    body: "Hey guys! We're thrilled to announce our latest online art challenge. Get ready to unleash your creativity and let your imagination run wild!",
  },
  // {
  //   id: 4,
  //   date: 'MAY 2, 2023',
  //   topic: 'Ultimate Zbrush Guide Free Workshop',
  //   body: "Quick reminder: We're hosting a live workshop for the Ultimate ZBrush Guides students, and the best part is that it's completely free to join!",
  // },
];

const News = () => {
  return (
    <div className="px-4 md:px-12 lg:px-64 py-8 lg:py-32 flex flex-col gap-12">
      <div className="flex flex-row justify-between items-end ">
        <div className="flex flex-row items-center gap-2">
          <span className="text-teal-400">
            <BiNews size={36} />
          </span>
          <h2 className="font-bold text-3xl md:text-4xl">
            News & Updates<span className="text-teal-400">.</span>
          </h2>{" "}
        </div>
        <p className="font-bold hidden md:block hover:text-teal-400 hover:cursor-pointer">
          SEE ALL
        </p>
      </div>
      <div className="flex flex-row gap-4 flex-wrap md:flex-nowrap">
        {Content.map((item) => (
          <Card key={item.id} className="w-auto bg-neutral-300">
            <CardBody className="">
              <div className="pb-2">
                <Typography>{item.date}</Typography>
              </div>

              <Typography variant="h5" color="blue-gray" className="mb-2">
                {item.topic}
              </Typography>
              <Typography>{item.body}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button color="teal" variant="outlined">
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default News;
