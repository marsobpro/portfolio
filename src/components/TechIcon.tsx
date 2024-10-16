import React from "react";

interface TechIconProps {
  component: React.ElementType;
}

const TechIcon = ({ component }: TechIconProps) => {
  const Component = component;
  return <Component className="size-10" />;
};

export default TechIcon;
