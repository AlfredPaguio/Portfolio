"use client";
import { TechStackType } from "@/data/fetchContent";
import { camelCaseToTitleCase } from "@/utils/camelCaseToTitleCase";
import { Fragment, useMemo } from "react";
import TechCard from "../components/TechCard";

type TechnologiesProps = {
  techStack: TechStackType;
};

type Skill = {
  name: string;
  status: string;
  proficiency: string;
};

function Technologies({ techStack }: TechnologiesProps) {
  const filteredTechStack = useMemo(() => {
    return Object.fromEntries(
      Object.entries(techStack)
        .filter((entry) => entry[0] != "developerTools")
        .map(([category, skills]) => {
          const filteredSkills = skills
            .filter(
              (skill: Skill) =>
                skill.status === "using" || skill.status === "learning",
            )
            .map((skill: Skill) => ({
              name: skill.name,
              status: skill.status,
              proficiency: skill.proficiency,
            }));

          return [category, filteredSkills];
        })
        .filter(([, skills]) => skills.length > 0),
    );
  }, [techStack]);

  const categories = Object.keys(filteredTechStack);

  return (
    <div className="container relative z-10 py-16 sm:py-24">
      <div className="mb-10 space-y-4">
        <h1 className="font-regular max-w-xl text-pretty text-left text-3xl tracking-tighter md:text-5xl">
          Current technologies
        </h1>
        <p className="max-w-xl text-pretty text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg">
          I&apos;m currently working with a variety of modern technologies that
          enhance my ability to create functional solutions. Here are some of
          the main tools I&apos;m actively using and/or learning.
        </p>
      </div>
      <div className="grid grid-cols-1 items-center justify-between gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Fragment key={category}>
            {filteredTechStack[category].map((skill: Skill) => (
              <TechCard
                key={skill.name}
                description={camelCaseToTitleCase(skill.status)}
                name={skill.name}
              />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
