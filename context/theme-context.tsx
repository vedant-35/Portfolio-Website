"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
type Theme = "dark" | "light";
type ThemeProviderProps = { children: React.ReactNode };
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>("light");
    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as null | Theme;
        if (localTheme) {
            setTheme(localTheme);
            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (theme == "light") {
            setTheme("dark");
            document.documentElement.classList.add("dark");
            window.localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
            window.localStorage.setItem("theme", "light");
        }
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("useThemeContext must be used within an ThemeProvider");
    }
    return context;
}