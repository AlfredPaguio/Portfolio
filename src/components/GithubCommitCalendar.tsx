"use client";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";
import { REPO_OWNER } from "@/data/Repositories";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MOBILE_CALENDAR_SIZE = 12;
const LAPTOP_CALENDAR_SIZE = 12;
const MOBILE_BREAKPOINT = 768;

export function GithubCommitCalendar() {
  const { theme } = useTheme();
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const myTheme = {
    light: ['hsl(210, 30%, 40%)', 'hsl(45, 85%, 60%)'],
    dark: ['hsl(0, 0%, 10%)', 'hsl(0, 100%, 60%)'],
  };

  //from https://github.com/grubersjoe/react-github-calendar/issues/102
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial window width
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= MOBILE_BREAKPOINT;

  const colorScheme = theme === "dark" ? "dark" : "light";

  return (
    <div className="my-10 w-full">
      <div className="mb-10 space-y-4">
        <h3 className="text-pretty text-3xl font-bold min-[430px]:text-4xl md:text-5xl">
          A cool chart
        </h3>
        <Button variant={"link"} asChild>
          <a href="https://github.com/AlfredPaguio" className="text-pretty text-sm text-foreground/70 min-[430px]:text-base md:max-w-3xl">
            https://github.com/AlfredPaguio
          </a>
        </Button>
      </div>
      <div className="mt-5 flex items-center justify-center">
        <GitHubCalendar
          colorScheme={colorScheme}
          username={REPO_OWNER}
          blockSize={isMobile ? MOBILE_CALENDAR_SIZE : LAPTOP_CALENDAR_SIZE}
          blockMargin={4}
          blockRadius={2}
          fontSize={14}
          theme={myTheme}
          style={{ fontWeight: "bold" }}
          showWeekdayLabels={true}
        />
      </div>
    </div>
  );
}
