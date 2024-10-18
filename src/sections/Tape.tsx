import { useMemo } from "react";
import { tapeWords } from "@/utils/constants";
import TapeItem from "@/components/TapeSection/TapeItem";

export const TapeSection = () => {
  const tapeContent = useMemo(
    () => (
      <>
        {tapeWords.map(word => (
          <TapeItem word={word} key={word} />
        ))}
      </>
    ),
    []
  );

  return (
    <section className="py-16 lg:py-24 overflow-x-clip">
      {/* Gradient */}
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
        {/* Mask image */}
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* Animation */}
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left">
            {/* Duplicated the content to achieve infinite scrolling effect*/}
            {tapeContent}
            {tapeContent}
          </div>
        </div>
      </div>
    </section>
  );
};
