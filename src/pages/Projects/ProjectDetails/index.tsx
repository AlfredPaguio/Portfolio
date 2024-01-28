import { Projects } from "@/data/Projects";
import LinkButtonIcons from "../components/LinkButtonIcons";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Folder } from "lucide-react";
import { formatDate } from "@/lib/formatDate";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import NoPage from "@/pages/SpecialPages/NoPage";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = Projects.find((p) => p.id === projectId);

  if (!project) {
    return <NoPage />;
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Alfred's Portfolio</title>
        {/* <meta
          name="description"
          content={project.summary || project.description}
        /> */}
        <meta
          name="og:description"
          content={project.summary || project.description}
        />
        <meta
          property="og:title"
          content={`${project.title} | Alfred's Portfolio`}
        />
        <meta
          property="og:url"
          content={`https://alfredpaguio.vercel.app/projects/${project.id}/`}
        />
        <link
          rel="canonical"
          href={`https://alfredpaguio.vercel.app/projects/${project.id}/`}
        />
        <meta
          property="og:image"
          content={`http://alfredpaguio.vercel.app${project.images ? project.images[0].imageUrl : ""}`}
        />
        <meta
          property="og:image:secure"
          content={`https://alfredpaguio.vercel.app${project.images ? project.images[0].imageUrl : ""}`}
        />
      </Helmet>
      <div className="flex h-full flex-col items-start justify-between gap-y-2">
        <div className="flex items-center gap-x-2">
          <Button variant={"ghost"} size={"icon"} asChild>
            <Link to={"/projects"}>
              <ArrowLeft />
            </Link>
          </Button>

          <h1 className="text-md flex items-center gap-1 text-pretty font-semibold leading-none tracking-tight text-foreground [viewTransitionName:project-name] md:text-lg lg:text-xl xl:text-2xl">
            <Folder className="shrink-0" />
            {project.title}
          </h1>
        </div>
        <Badge variant={"ghost"} className="p-0">
          {formatDate(project.date)}
        </Badge>
        {/* <p className="text-sm text-muted">{project.description}</p> */}
        <ReactMarkdown
          className={
            "markdown flex flex-col gap-y-2 leading-relaxed text-foreground transition-all lg:text-lg xl:text-xl"
          }
          remarkPlugins={[remarkGfm, remarkBreaks]}
        >
          {project.description}
        </ReactMarkdown>
        <div className="flex flex-1 flex-col gap-4 pt-4">
          <div className="space-y-4">
            <span>Stack</span>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, index) => (
                <Badge variant={"secondary"} key={index}>
                  {tech}
                </Badge>
              ))}
            </div>
            {project.links && (
              <>
                <p>Links</p>
                <div className="flex gap-2">
                  <LinkButtonIcons
                    links={project.links}
                    displayText={true}
                    variant={"default"}
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {project.images &&
          project.images.length > 0 &&
          project.images.map((image, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center self-center"
            >
              <Label className="text-lg">{image.alt || `Image ${index}`}</Label>
              <img
                loading="lazy"
                key={index}
                src={image.imageUrl}
                alt={image.alt || `Image ${index}`}
                className="aspect-video"
                title={image.alt || `No Description`}
              />
            </div>
          ))}
      </div>
    </>
  );
}
