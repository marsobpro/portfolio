import React from "react";
import Image from "next/image";
import Card from "../Card/Card";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";

const MapCard = () => {
  return (
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
  );
};

export default MapCard;
