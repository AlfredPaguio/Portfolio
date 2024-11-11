import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { IconComponent } from "@/components/IconComponent";
import { reader } from "@/utils/reader";
import CompactProjectCard from "../components/CompactProjectCard";

async function getFeaturedProjects() {
  const projects = await reader().collections.projects.all();
  return projects.filter((project) => project.entry.featured).slice(0, 3);
}

export default async function FeaturedProjects() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <div className="container relative z-10 py-16 sm:py-24">
      <div className="mb-10 space-y-4">
        <h1 className="text-pretty text-3xl font-bold min-[430px]:text-4xl md:text-5xl">
          Featured Projects
        </h1>
        <p className="text-pretty text-sm text-foreground/70 min-[430px]:text-base md:max-w-3xl">
          Explore some of my key projects, showcasing solutions crafted to solve
          real-world challenges and deliver seamless user experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <CompactProjectCard project={project} key={project.slug} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button asChild size="lg">
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </div>
  );
}
