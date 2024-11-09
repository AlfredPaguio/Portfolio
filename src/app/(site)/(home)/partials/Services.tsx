import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeIcon, DatabaseIcon, WebhookIcon } from "lucide-react";
import React from "react";

function Services() {
  return (
    <div className="container relative z-10 py-16 sm:py-24">
      <div className="mb-10 space-y-4">
        <h1 className="text-pretty text-3xl font-bold min-[430px]:text-4xl md:text-5xl">
          What I can do for you
        </h1>
        <p className="text-pretty text-sm text-foreground/70 min-[430px]:text-base md:max-w-3xl">
          I create efficient, responsive web solutions. From building web apps
          to managing databases, I&apos;m here to help bring your vision to
          life.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CodeIcon className="mr-2 size-6" />
              Web Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="pl-2">
              Create responsive and performant web applications using modern
              frameworks and best practices.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <WebhookIcon className="mr-2 size-6" />
              Backend Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="pl-2">
              Develop and integrate robust server-side solutions and APIs to
              power applications.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DatabaseIcon className="mr-2 size-6" />
              Database Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="pl-2">
              Design and manage databases that ensure data integrity and quick
              access.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Services;
