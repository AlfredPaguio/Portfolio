import TechnologiesProvider from "@/contexts/TechnologiesContext";

export default function Layout({
  children,
  projectList,
}: {
  children: React.ReactNode;
  projectList: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-6">
      <TechnologiesProvider>
        {children}
        {projectList}
      </TechnologiesProvider>
    </div>
  );
}
