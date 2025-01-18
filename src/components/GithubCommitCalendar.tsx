"use client";
import { REPO_OWNER } from "@/data/Repositories";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "next-themes";
import { ThemeInput } from "react-activity-calendar";
import GitHubCalendar, { Activity } from "react-github-calendar";
import { Button } from "./ui/button";

const selectLastHalfYear = (contributions: Activity[]) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter((activity) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

export function GithubCommitCalendar() {
  const { theme } = useTheme();

  const myTheme: ThemeInput = {
    light: ["hsl(210, 30%, 40%)", "hsl(45, 85%, 60%)"],
    dark: ["hsl(0, 0%, 10%)", "hsl(0, 100%, 60%)"],
  };

  //from https://github.com/grubersjoe/react-github-calendar/issues/102

  const isMobile = useIsMobile();

  const colorScheme = theme === "dark" ? "dark" : "light";

  return (
    <div className="my-10 w-full">
      <div className="mb-10 space-y-4">
        <h3 className="font-regular max-w-xl text-pretty text-left text-3xl tracking-tighter md:text-5xl">
          A cool chart
        </h3>
        <Button variant={"link"} asChild>
          <a
            href="https://github.com/AlfredPaguio"
            className="text-pretty text-sm text-foreground/70 min-[430px]:text-base md:max-w-3xl"
          >
            https://github.com/AlfredPaguio
          </a>
        </Button>
      </div>
      <div className="mt-5 flex items-center justify-center">
        <GitHubCalendar
          colorScheme={colorScheme}
          username={REPO_OWNER}
          theme={myTheme}
          style={{ fontWeight: "bold" }}
          showWeekdayLabels={true}
          {...(isMobile && { transformData: selectLastHalfYear })}
        />
      </div>
    </div>
  );
}
