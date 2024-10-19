"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card/Card";
import CardHeader from "@/components/Card/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import SlickSlider from "@/components/SlickSlider";

import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import bookImage from "@/assets/images/book-cover.png";
import { hobbies, toolboxItems } from "@/utils/constants";

export const AboutSection = () => {
  const constraintRef = useRef(null);
  const booksSliderSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1.07,
    slidesToScroll: 1,
    className: "books-slider",
  };

  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8 ">
          {/* Books */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-4 h-full relative  ">
                <SlickSlider settings={booksSliderSettings}>
                  {[...new Array(3)].fill(0).map((_, index) => (
                    <div
                      className="relative h-60 md:h-40 after:absolute after:inset-0 after:content[''] after:bg-gradient-to-t after:from-gray-900 after:to-gray-5 after:opacity-90 overflow-hidden "
                      key={index}
                    >
                      <Image
                        className="absolute inset-0"
                        src={bookImage}
                        alt="Book cover"
                      />
                    </div>
                  ))}
                </SlickSlider>
              </div>
            </Card>

            {/* Toolbox */}
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences"
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassname="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassname="animate-move-right [animation-duration:20s]"
              />
            </Card>
          </div>

          {/* Hobbies */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the code"
                description="Explore my interests and hobbies beyond the digital realm"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div
                    className="absolute inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 cursor-pointer"
                    style={{ left: hobby.left, top: hobby.top }}
                    key={hobby.title}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Map */}
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                className="h-full w-full object-cover object-left-top"
                src={mapImage}
                alt="map"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:rounded-full after:-outline-offset-2 after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>

                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  className="size-20 object-cover"
                  src={smileMemoji}
                  alt="smiling memoji"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
