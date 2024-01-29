import { Skeleton } from "@/components/ui/skeleton";

const Loading: React.FC = () => {
  return (
    <div className="mb-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <Skeleton
          key={index}
          className="max-w-sm  md:max-w-md lg:max-w-lg w-full"
        />
      ))}
    </div>
  );
};

export default Loading;
