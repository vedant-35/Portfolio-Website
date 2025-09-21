"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import { useActiveSectionInView } from "@/lib/hooks";

export default function About() {
  const {ref} = useActiveSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a Final Year Student at{" "}
        <span className="font-medium">
          Dayananda Sagar College of Engineering
        </span>
        , Bengaluru pursuing B.E. in{" "}
        <span className="font-medium text-gray-900 dark:text-gray-100">
          Information Science and Engineering
        </span>
        . I'm a{" "}
        <span className="font-medium text-gray-900 dark:text-gray-100">
          Full Stack Developer
        </span>{" "}
        and a{" "}
        <span className="font-medium text-gray-900 dark:text-gray-100">
          Competitive Programmer
        </span>
        . I'm passionate about learning new technologies and building projects.
        I'm a <span className="italic">quick learner</span> and a{" "}
        <span className="italic">team player</span>. I'm always ready to take up
        new challenges and solve them. I'm a{" "}
        <span className="font-medium">self-motivated person</span> and always
        ready to learn new things.
      </p>

    </motion.section>
  );
}
