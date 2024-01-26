import { RouterProvider } from "react-router-dom";
import routers from "./pages/routes";
// import LoadingPage from "./pages/LoadingPage";
import ErrorBoundaryPage from "./pages/ErrorBoundaryPage";

export default function App() {
  return (
    <RouterProvider
      future={{ v7_startTransition: true }}
      router={routers}
      // fallbackElement={<LoadingPage />}
      fallbackElement={<ErrorBoundaryPage />}
    />
  );
}
