"use client";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";
import { REPO_OWNER } from "@/data/Repositories";
import { useEffect, useState } from "react";

const MOBILE_CALENDAR_SIZE = 12;
const LAPTOP_CALENDAR_SIZE = 12;
const MOBILE_BREAKPOINT = 768;

export function GithubCommitCalendar() {
  const { theme } = useTheme();
  const [windowWidth, setWindowWidth] = useState<number>(0);

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
      <h3 className="md:leading-14 text-center text-2xl font-extrabold leading-9 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl">
        A cool chart
      </h3>
      <div className="mt-5 flex items-center justify-center">
        <GitHubCalendar
          colorScheme={colorScheme}
          username={REPO_OWNER}
          blockSize={isMobile ? MOBILE_CALENDAR_SIZE : LAPTOP_CALENDAR_SIZE}
          blockMargin={4}
          blockRadius={2}
          fontSize={14}
          style={{ fontWeight: "bold" }}
          showWeekdayLabels={true}
        />
      </div>
    </div>
  );
}
