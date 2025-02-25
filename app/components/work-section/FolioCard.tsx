// folioCard.tsx
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { Link } from "react-router-dom";
import React from "react";
import Tag from "./Tag";

export default function FolioCard({
  title,
  img,
  gitLink,
  liveLink,
  about,
  stack,
}: {
  img: string;
  title: string;
  gitLink?: string;
  liveLink: string;
  about: string;
  stack: string[];
}) {
  return (
    <div className="w-full rounded-[20px] grid grid-cols-1 lg:grid-cols-12 gap-5 p-6">
      <Image
        src={img}
        width={420}
        height={700}
        alt="work"
        className="rounded-[10px] w-full lg:col-span-5"
      />
      <div className="flex flex-col gap-4 lg:col-span-7">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">{title}</h2>
          <div className="flex gap-3 text-2xl">
            <Link
              to={liveLink}
              className="rounded-full bg-icon-radial p-3 hover:bg-red"
              aria-label="View Live Demo"
            >
              <Icon icon="line-md:external-link-rounded" />
            </Link>
            {gitLink && (
              <a
                href={gitLink}
                target="_blank"
                className="rounded-full bg-icon-radial p-3"
                aria-label="View Github Repo"
              >
                <Icon icon="mingcute:github-line" />
              </a>
            )}
          </div>
        </div>
        <p className="text-base text-white/70">{about}</p>
        <div className="flex gap-3 flex-wrap">
          {stack.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
