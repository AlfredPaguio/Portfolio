import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

function CompactProjectCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Name 1</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          A brief description of the project and its key features.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge>React</Badge>
          <Badge>Node.js</Badge>
          <Badge>MongoDB</Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export default CompactProjectCard;
