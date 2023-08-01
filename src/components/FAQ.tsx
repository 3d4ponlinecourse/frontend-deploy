import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { BiQuestionMark } from "react-icons/bi";

const FAQ = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <div className="px-4 md:px-12 lg:px-64 py-32 flexs flex-col gap-8">
      <div className="flex flex-row pb-4">
        <span className="text-teal-400">
          <BiQuestionMark size={36} />
        </span>
        <h2 className="font-bold text-3xl md:text-4xl">
          FAQ<span className="text-teal-400">.</span>
        </h2>{" "}
      </div>

      <div>
        <Accordion open={open === 1}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`text-neutral-400 hover:text-neutral-500`}
          >
            What is 3D4P?
          </AccordionHeader>
          <AccordionBody className={"text-neutral-300"}>
            On this site, you will find a variety of tutorials, articles, videos
            and eBooks all of which will show you exactly HOW I make the things
            I love doing… You’ll also find resources I created which you could
            utilise in your own projects.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`text-neutral-400 hover:text-neutral-500`}
          >
            How to use 3D4P?
          </AccordionHeader>
          <AccordionBody className={"text-neutral-300"}>
            On this site, you will find a variety of tutorials, articles, videos
            and eBooks all of which will show you exactly HOW I make the things
            I love doing… You’ll also find resources I created which you could
            utilise in your own projects.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`text-neutral-400 hover:text-neutral-500`}
          >
            What can I do with 3D4P?
          </AccordionHeader>
          <AccordionBody className={"text-neutral-300"}>
            On this site, you will find a variety of tutorials, articles, videos
            and eBooks all of which will show you exactly HOW I make the things
            I love doing… You’ll also find resources I created which you could
            utilise in your own projects.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
