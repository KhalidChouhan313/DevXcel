import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

export const web_routes = [
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];
