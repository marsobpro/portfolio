"use client";
import SectionHeader from "@/components/SectionHeader";
import BookCard from "@/components/About/BookCard";
import ToolboxCard from "@/components/About/ToolboxCard";
import HobbiesCard from "@/components/About/HobbiesCard";
import MapCard from "@/components/About/MapCard";

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8 ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            <BookCard />
            <ToolboxCard />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <HobbiesCard />
            <MapCard />
          </div>
        </div>
      </div>
    </section>
  );
};
