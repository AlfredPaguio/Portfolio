import keystaticConfig from "@@/keystatic.config";
import { Entry } from "@keystatic/core/reader";
import React from "react";

type ProjectProps = Entry<(typeof keystaticConfig)["collections"]["projects"]>;

export default function ProjectList(props: ProjectProps) {
  return (
    <div>
      <pre className="whitespace-pre-wrap bg-slate-950">
        <code className="text-foreground">
          {JSON.stringify(props, undefined, 2)}
        </code>
      </pre>
    </div>
  );
}
