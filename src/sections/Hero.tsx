import { useMemo } from "react";
import Image from "next/image";
import { orbitConfig } from "@/utils/constants";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import Button from "@/components/UI/Button";
import OrbitingObject from "@/components/Hero/OrbitingObject";

export const HeroSection = () => {
  const orbitingObjects = useMemo(
    () =>
      orbitConfig.map((config, index) => (
        <OrbitingObject key={index} config={config} />
      )),
    []
  );

  const HeroBackground = () => (
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
      {/* Grain bg */}
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
        aria-hidden="true"
      />

      {/*Rings - from inner outwards */}
      {[620, 820, 1020, 1220].map((size, index) => (
        <div
          key={index}
          className="hero-ring"
          style={{ width: `${size}px`, height: `${size}px` }}
        />
      ))}

      {orbitingObjects}
    </div>
  );

  const AvailabilityBadge = () => (
    <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4">
      {/* Duplicated dot so it's still visible when animation fades out */}
      <div className="bg-green-500 size-2.5 rounded-full relative">
        <div className="absolute bg-green-500 inset-0 animate-ping-large rounded-full"></div>
      </div>
      <div className="text-sm font-semibold">Available for new projects</div>
    </div>
  );

  const HeroHeader = () => (
    <div className="flex flex-col items-center">
      <Image
        className="size-[100px]"
        src={memojiImage}
        alt="Person with laptop"
      />
      <AvailabilityBadge />
    </div>
  );

  const HeroContent = () => (
    <div className="max-w-lg mx-auto">
      <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
        I'm Marcin.
        <br />I Build Exceptional User Experiences.
      </h1>
      <p className="mt-4 text-center text-white/60 md:text-lg">
        I specialize in transforming designs into functional, high-performing
        web applications. Let&apos;s discuss your next project.
      </p>
    </div>
  );

  const HeroActions = () => (
    <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
      <Button variant="secondary" href="#projects" isInternalLink>
        <span className="font-semibold">Explore My Work</span>
        <ArrowDown className="size-4" />
      </Button>
      <Button
        variant="primary"
        href="https://www.linkedin.com/in/marcin-sobieraj/"
      >
        <span>👋</span>
        <span className=" font-semibold ">Let&apos;s Connect</span>
      </Button>
    </div>
  );

  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <HeroBackground />
      <div className="container">
        <HeroHeader />
        <HeroContent />
        <HeroActions />
      </div>
    </div>
  );
};
