import AddGymAbout from "../pages/AddGymAbout";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import NotFound from "../pages/NotFound";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
      {
        path: "add-about",
        element: <AddGymAbout />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
