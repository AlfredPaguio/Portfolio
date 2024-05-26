interface ProgressCircleProps extends React.HTMLAttributes<HTMLDivElement> {}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ ...props }) => {
  return (
    <div
      className="h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-accent"
      {...props}
    />
  );
};

export default ProgressCircle;
