import { createHashRouter } from "react-router-dom";
import Layout from "./layout";
import AuthGuard from "./components/Guard/AuthGuard";
import { lazy } from "react";

const SignIn = lazy(() => import("./containers/Auth/SignIn"));
const SignUp = lazy(() => import("./containers/Auth/SignUp"));
const Homepage = lazy(() => import("./containers/Home"));
const ClassManagement = lazy(
  () => import("./components/Admin/ClassManagement")
);
const UserManagement = lazy(() => import("./components/Admin/UserManagement"));
const VideoManagement = lazy(
  () => import("./components/Admin/VideoManagement")
);
const WhiteListManagement = lazy(
  () => import("./components/Admin/WhiteListManagement")
);

const router = createHashRouter([
  {
    path: "/",
    element: (
      <AuthGuard>
        <Layout />
      </AuthGuard>
    ),
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/admin/class",
        element: <ClassManagement />,
      },
      {
        path: "/admin/user",
        element: <UserManagement />,
      },
      {
        path: "/admin/video",
        element: <VideoManagement />,
      },
      {
        path: "/admin/white-list",
        element: <WhiteListManagement />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default router;
