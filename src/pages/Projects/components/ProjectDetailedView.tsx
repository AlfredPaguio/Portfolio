import { ProjectType } from "@/data/Projects";
import { CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/formatDate";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LinkButtonIcons from "./LinkButtonIcons";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

type ProjectDetailedViewProps = {
  project: ProjectType;
  open: boolean | undefined;
  onOpenChange: (value: boolean) => void;
};

export function ProjectDetailedView({
  project,
  open = false,
  onOpenChange,
}: ProjectDetailedViewProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog onOpenChange={onOpenChange} open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription className="whitespace-pre-line text-pretty indent-8 text-muted">
              {project.description}
            </DialogDescription>
            {/* <ImageCarouselView imageList={project.images} /> */}
          </DialogHeader>
          <div className="flex flex-1 flex-col gap-4 pt-4">
            <div className="space-y-4">
              <CardTitle>Stack</CardTitle>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, index) => (
                  <Badge variant={"secondary"} key={index}>
                    {tech}
                  </Badge>
                ))}
              </div>
              {project.links && (
                <>
                  <CardTitle>Links</CardTitle>
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

          <DialogFooter className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            <Badge variant={"ghost"} className="p-0">
              {formatDate(project.date)}
            </Badge>
            <DialogClose asChild>
              <Button type="button" variant="destructive">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="flex flex-col justify-between">
            {project.title}
            <Badge variant={"ghost"} className="px-0 pt-2">
              {formatDate(project.date)}
            </Badge>
          </DrawerTitle>
          <DrawerDescription className="whitespace-pre-line text-pretty indent-4 text-muted">
            {project.description}
          </DrawerDescription>
        </DrawerHeader>
        {/* <ImageCarouselView imageList={project.images} /> */}

        <div className="mx-4 flex flex-1 flex-col gap-4 pt-4">
          <div className="space-y-4">
            <CardTitle>Stack</CardTitle>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, index) => (
                <Badge variant={"secondary"} key={index}>
                  {tech}
                </Badge>
              ))}
            </div>
            {project.links && (
              <>
                <CardTitle>Links</CardTitle>
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
        <DrawerFooter className="flex flex-col items-stretch justify-center md:flex-row md:justify-between">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
