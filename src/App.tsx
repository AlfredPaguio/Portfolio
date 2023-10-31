import { RouterProvider, createBrowserRouter } from "react-router-dom";
import pagesData from "./routes/pagesData";
import LoadingPage from "./routes/layouts/LoadingPage";
import Layout from "./routes/layouts/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: pagesData,
  },
]);

export default function App() {
  return (
    <RouterProvider
      future={{ v7_startTransition: true }}
      router={router}
      fallbackElement={<LoadingPage />}
    />
  );
}
