import ProjectsHandler from "@/components/ProjectsHandler";

export default function Layout({
  children,
  projectList,
}: {
  children: React.ReactNode;
  projectList: React.ReactNode;
}) {
  return (
    <>
      <ProjectsHandler />
      <div className="flex flex-col items-center gap-6 pt-8">
        {children}
        {projectList}
      </div>
    </>
  );
}
