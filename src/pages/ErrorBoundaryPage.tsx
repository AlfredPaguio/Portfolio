import { useRouteError } from "react-router-dom";

export default function ErrorBoundaryPage() {
  const error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}