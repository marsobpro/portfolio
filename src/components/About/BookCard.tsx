import React from "react";
import Image from "next/image";
import { books } from "@/utils/constants";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import SlickSlider from "../SlickSlider";

const BookCard = () => {
  const booksSliderSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1.07,
    slidesToScroll: 1,
    className: "books-slider",
  };

  return (
    <Card className="h-[320px] md:col-span-2 lg:col-span-1">
      <CardHeader
        title="My reads"
        description="Explore the books shaping my perspectives."
      />
      <div className="w-40 mx-auto mt-2 md:-mt-4 h-full relative  ">
        <SlickSlider settings={booksSliderSettings}>
          {books.map(book => (
            <div
              className="relative h-60 md:h-44 after:absolute after:inset-0 after:content[''] after:bg-gradient-to-t after:from-gray-900 after:to-gray-5 after:opacity-90 overflow-hidden rounded-lg "
              key={book.title}
            >
              <Image
                className="absolute inset-0 "
                src={book.src}
                alt={`${book.title} cover`}
              />
            </div>
          ))}
        </SlickSlider>
      </div>
    </Card>
  );
};

export default BookCard;
