import React from "react";
import Image from "next/image";
import { Referral } from "@/utils/constants";

const ReferralCardContent = ({ referral }: { referral: Referral }) => {
  const { avatar, name, position, text } = referral;
  return (
    <>
      <div className="flex gap-4 items-center">
        <div className="size-14 flex-shrink-0 bg-gray-700 inline-flex items-center rounded-full justify-center">
          <Image className="max-h-full" src={avatar} alt={name} />
        </div>
        <div className="">
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-white/40">{position}</div>
        </div>
      </div>
      <p className="mt-4 md:mt-6 text-sm md:text-base">{text}</p>
    </>
  );
};

export default ReferralCardContent;
