import { useMemo } from "react";
import Image from "next/image";
import { orbitConfig } from "@/utils/constants";
import Button from "@/components/UI/Button";
import OrbitingObject from "@/components/Hero/OrbitingObject";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";

export const HeroSection = () => {
  const orbitingObjects = useMemo(
    () =>
      orbitConfig.map((config, index) => (
        <OrbitingObject key={index} config={config} />
      )),
    []
  );

  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      {/* Bg wrapper */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
        {/* Grain bg */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>

        {/*Rings - from inner outwards */}
        {[620, 820, 1020, 1220].map((size, index) => (
          <div
            key={index}
            className={`hero-ring size-[${size}px]`}
            aria-hidden="true"
          />
        ))}
        {/* <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div> */}

        {orbitingObjects}
      </div>

      <div className="container">
        {/* Laptop img container */}
        <div className="flex flex-col items-center">
          <Image
            className="size-[100px]"
            src={memojiImage}
            alt="Person with laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4">
            {/* Duplicated dot so it's still visible when animation fades out */}
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="absolute bg-green-500 inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-semibold">
              Available for new projects
            </div>
          </div>
        </div>

        {/* Header and description */}
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let's discuss your next project.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <Button variant="secondary" href="#projects">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </Button>
          <Button
            variant="primary"
            href="https://www.linkedin.com/in/marcin-sobieraj/"
          >
            <span>👋</span>
            <span className=" font-semibold ">Let's Connect</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
