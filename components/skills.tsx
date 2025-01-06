"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useActiveSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import {useThemeContext} from "@/context/theme-context";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useActiveSectionInView("Skills");
  const {theme} = useThemeContext();

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 "
    >
      <SectionHeading>My skills</SectionHeading>
      
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex flex-col items-center"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            
          >
           {theme === "light" ? <skill.iconL className="w-12 h-12 mb-2" /> : <skill.iconD className="w-12 h-12 mb-2" />}
           <span>{skill.name}</span>

          </motion.li>
        ))}
      </ul>
    </section>
  );
}