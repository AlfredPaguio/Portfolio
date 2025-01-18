import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/utils/cn";
import { CodeIcon, DatabaseIcon, WebhookIcon } from "lucide-react";
import React from "react";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  className,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}) => (
  <Card
    className={cn(
      "group relative overflow-hidden transition-all duration-300 hover:shadow-lg",
      "before:bg-gradient-to-r before:absolute before:inset-0 before:-translate-x-full before:translate-y-full before:from-transparent before:via-black/20 before:to-transparent before:transition-transform before:duration-700 hover:before:-translate-y-full hover:before:translate-x-full before:dark:via-white/20",
      className,
    )}
  >
    <CardHeader className="relative z-10">
      <div className="mb-2 flex items-center space-x-4">
        <div className="rounded-lg bg-primary p-2 transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
          <Icon className="h-6 w-6 text-primary-foreground transition-colors duration-300  group-hover:bg-accent group-hover:text-accent-foreground" />
        </div>
        <CardTitle className="text-xl font-semibold transition-colors duration-300 group-hover:text-accent-foreground">
          {title}
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent className="relative z-10">
      <p className="text-card-foreground">{description}</p>
    </CardContent>
  </Card>
);

function Services() {
  const services = [
    {
      icon: CodeIcon,
      title: "Web Development",
      description:
        "Create responsive and performant web applications using modern frameworks and best practices.",
    },
    {
      icon: WebhookIcon,
      title: "Backend Development",
      description:
        "Develop and integrate robust server-side solutions and APIs to power applications.",
    },
    {
      icon: DatabaseIcon,
      title: "Database Management",
      description:
        "Design and manage databases that ensure data integrity and quick access.",
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="container space-y-4">
        <h2 className="font-regular max-w-xl text-pretty text-left text-3xl tracking-tighter md:text-5xl">
          What I do
        </h2>
        <p className="max-w-xl text-pretty text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg">
          I build efficient, responsive web solutions, from dynamic apps to
          robust database management, bringing your vision to life.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
