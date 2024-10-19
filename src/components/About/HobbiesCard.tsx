import React, { useRef } from "react";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import { hobbies } from "@/utils/constants";
import HobbyBubble from "./HobbyBubble";

const HobbiesCard = () => {
  const constraintRef = useRef(null);

  return (
    <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
      <CardHeader
        title="Beyond the code"
        description="Explore my interests and hobbies beyond the digital realm"
        className="px-6 py-6"
      />
      <div className="relative flex-1" ref={constraintRef}>
        {hobbies.map(hobby => (
          <HobbyBubble hobby={hobby} constraintsRef={constraintRef} />
        ))}
      </div>
    </Card>
  );
};

export default HobbiesCard;
