import { useMemo } from "react";
import { referrals } from "@/utils/constants";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card/Card";
import ReferralCardContent from "@/components/Referrals/ReferralCardContent";

export const Referrals = () => {
  const referralContent = useMemo(
    () => (
      <>
        {referrals.map(referral => (
          <Card
            className="max-w-xs max-h-[400px] md:p-8 md:max-w-md p-6 hover:-rotate-3 transition duration-300"
            key={referral.name}
          >
            <ReferralCardContent referral={referral} />
          </Card>
        ))}
      </>
    ),
    []
  );

  return (
    <section className="py-16 lg:py-24" id="referrals">
      <div className="container ">
        <SectionHeader
          title={"What My Coworkers Say"}
          eyebrow={"Trusted by Teams"}
          description={
            "Hear directly from the people I've worked with. See what my coworkers have to say about my skills and contributions."
          }
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {referralContent}
            {referralContent}
          </div>
        </div>
      </div>
    </section>
  );
};
