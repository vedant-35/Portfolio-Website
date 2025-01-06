import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

/**
 * @param threshold Number between `0` and `1` indicating the percentage that should be visible before triggering. Can also be an `array` of numbers, to create multiple trigger points.
 */
export function useActiveSectionInView(
    sectionName: SectionName,
    threshold: number | number[] = 0.75,
) {
    const { ref, inView } = useInView({ threshold });
    const { setActiveSection, timeOfLastCLick } = useActiveSectionContext();
    useEffect(() => {
        if (inView && timeOfLastCLick + 1000 < Date.now()) {
            setActiveSection(sectionName);
        }
    }, [inView, sectionName, setActiveSection, timeOfLastCLick]);
    return { ref };
}