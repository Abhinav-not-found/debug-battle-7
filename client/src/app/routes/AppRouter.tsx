import { createBrowserRouter, RouterProvider } from "react-router";
import Register from "../../features/auth/ui/pages/Register";

const router = createBrowserRouter([
  {
    index: true,
    element: <Register />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;