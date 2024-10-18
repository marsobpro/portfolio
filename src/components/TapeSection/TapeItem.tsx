import StarIcon from "@/assets/icons/star.svg";
import { memo } from "react";

interface TapeItemProps {
  word: string;
}

const TapeItem: React.FC<TapeItemProps> = memo(({ word }) => (
  <div className="inline-flex gap-4 items-center">
    <span className="text-gray-900 uppercase font-extrabold text-sm">
      {word}
    </span>
    <StarIcon className="size-6 text-gray-900 -rotate-12" aria-hidden="true" />
  </div>
));

export default TapeItem;
