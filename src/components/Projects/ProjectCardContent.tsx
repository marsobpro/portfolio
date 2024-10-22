import React from "react";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import { Project } from "@/utils/constants";

const ProjectCardContent = ({ project }: { project: Project }) => {
  const { company, year, title, results, link, image } = project;

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-16">
      {/* Left grid col on large devices */}
      <div className="lg:pb-16">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
          <span>{company}</span>
          <span>&bull;</span>
          <span>{year}</span>
        </div>
        <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
          {title}
        </h3>
        <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

        {/* Results list*/}
        <ul className="flex flex-col gap-4 mt-4 md:mt-5">
          {results.map(result => (
            <li
              className="flex gap-2 text-sm text-white/50 md:text-base"
              key={result.title}
            >
              <span className="flex items-start" style={{ flexShrink: 0 }}>
                <CheckCircleIcon className="size-5 md:size-6" />
              </span>
              <span>{result.title}</span>
            </li>
          ))}
        </ul>
        <a href={link} target="_blank" rel="noopener noreferrer" className="">
          <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 px-6 md:w-auto">
            <span>Visit live site</span>
            <ArrowUp className="size-4" />
          </button>
        </a>
      </div>

      {/* Right grid col on large devices */}
      <div className="relative">
        <Image
          className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-xl"
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

export default ProjectCardContent;
