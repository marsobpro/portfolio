import React from "react";
import Image from "next/image";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import SlickSlider from "../SlickSlider";
import bookImage from "@/assets/images/book-cover.png";

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
  );
};

export default BookCard;
