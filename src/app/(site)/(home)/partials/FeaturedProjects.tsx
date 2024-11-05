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
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Featured Projects
        </h2>
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
    </section>
  );
}
