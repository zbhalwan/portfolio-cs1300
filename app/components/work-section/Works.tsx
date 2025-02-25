import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";
import { Link } from "react-router-dom";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Accessible Components",
      liveLink: "/acc-comp",
      about:
        "Analysis on Components of major applications and redesigning one to be more accessible and efficient.",
      stack: ["Case Study"],
      img: "/acc_comp.png",
    },

    {
      title: "Github",
      liveLink: "google.com",
      gitLink: "google.com",
      about:
        "git version control",
      stack: ["next.js", "typescript", "framer motion", "tailwindcss"],
      img: "/black.png",
    },
    
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          gitLink={work.gitLink}
          title={work.title}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}
      <Timeline />
    </section>
  );
}
