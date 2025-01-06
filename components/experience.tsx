"use client";

import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { Fragment } from "react";
import { useActiveSectionInView } from "@/lib/hooks";
import VerticalTimeline from "./VerticalTimeline/VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimeline/VerticalTimelineElement";
import {useThemeContext} from "@/context/theme-context";

export default function Experience() {
    const { ref } = useActiveSectionInView("Experience", 0.4);
    const {theme} = useThemeContext();

    return (
        <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>My experience</SectionHeading>
            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                    <Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0,0,0,0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #9ca3af",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: theme === "light"
                                ? "white"
                                : "hsl(221, 15%, 24%)",
                                fontSize: "1.5rem",
                            }}
                        >
                            <h3 className="font-semibold capitalize">
                                {item.title}
                            </h3>
                            <p className="font-normal !mt-0">{item.location}</p>
                            <p className="!mt-1 !font-normal text--gray-700">
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    </Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}

   