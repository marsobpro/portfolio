import React from "react";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import ToolboxItems from "../ToolboxItems";
import { toolboxItems } from "@/utils/constants";

const ToolboxCard = () => {
  return (
    <Card className="h-[320px] md:col-span-3 lg:col-span-2">
      <CardHeader
        title="My toolbox"
        description="Explore the technologies and tools I use to craft exceptional
      digital experiences"
        className=""
      />
      <ToolboxItems
        items={toolboxItems}
        className=""
        itemsWrapperClassname="animate-move-left [animation-duration:30s]"
      />
      <ToolboxItems
        items={toolboxItems}
        className="mt-6"
        itemsWrapperClassname="animate-move-right [animation-duration:20s]"
      />
    </Card>
  );
};

export default ToolboxCard;
