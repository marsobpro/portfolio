import React, { PropsWithChildren } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlickSliderProps {
  settings?: Settings;
  customPrevArrow?: React.ReactNode;
  customNextArrow?: React.ReactNode;
}

const SlickSlider = ({
  children,
  settings,
  customPrevArrow,
  customNextArrow,
}: PropsWithChildren<SlickSliderProps>) => {
  var defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const finalSettings = { ...defaultSettings, ...settings };

  const DefaultPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute -left-10 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    );
  };

  const DefaultNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute -right-10 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    );
  };

  return (
    <Slider
      {...finalSettings}
      prevArrow={<DefaultPrevArrow /> || customPrevArrow}
      nextArrow={<DefaultNextArrow /> || customNextArrow}
    >
      {children}
    </Slider>
  );
};

export default SlickSlider;
