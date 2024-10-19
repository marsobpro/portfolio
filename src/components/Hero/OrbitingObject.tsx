import React from "react";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { orbitConfig } from "@/utils/constants";

export const OrbitingObject = ({
  config,
}: {
  config: (typeof orbitConfig)[0];
}) => {
  const { size, rotation, orbitDuration, spinDuration, icon, iconSize } =
    config;

  const iconClassName =
    // Sparkles are brighter
    icon === SparkleIcon ? "text-emerald-300" : "text-emerald-300/30";

  return (
    <HeroOrbit
      size={size}
      rotation={rotation}
      shouldOrbit
      orbitDuration={orbitDuration}
      // No need to spin circles, won't be visible anyways
      shouldSpin={icon !== "circle"}
      spinDuration={spinDuration}
    >
      {/* Circles are just divs, sparkles and stars are icons */}
      {icon === "circle" ? (
        <div className={`rounded-full size-${iconSize} bg-emerald-300/20`} />
      ) : (
        <config.icon className={`size-${iconSize} ${iconClassName}`} />
      )}
    </HeroOrbit>
  );
};

export default OrbitingObject;
