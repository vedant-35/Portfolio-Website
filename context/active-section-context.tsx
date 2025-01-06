"use client";

import type { SectionName } from "@/lib/types";
import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";

type ActivateSectionProviderProps = { children: React.ReactNode };
type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: Dispatch<SetStateAction<SectionName>>;
    timeOfLastCLick: number;
    setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
    null,
);

export default function ActivateSectionProvider({
    children,
}: ActivateSectionProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastCLick, setTimeOfLastClick] = useState(0);
    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastCLick,
                setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActivateSectionProvider",
        );
    }
    return context;
}