import { Hobby } from "@/utils/constants";
import { motion } from "framer-motion";
import React from "react";

interface HobbyBubbleProps {
  hobby: Hobby;
  constraintsRef: React.RefObject<HTMLElement>;
}

const HobbyBubble = ({
  hobby: { top, left, title, emoji },
  constraintsRef,
}: HobbyBubbleProps) => (
  <motion.div
    className={`absolute inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 cursor-pointer`}
    style={{ left: left, top: top }}
    drag
    dragConstraints={constraintsRef}
  >
    <span className="font-medium text-gray-950">{title}</span>
    <span>{emoji}</span>
  </motion.div>
);

export default HobbyBubble;
