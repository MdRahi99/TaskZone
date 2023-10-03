import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";
import Contact from "../Components/Contact/Contact";
import Error from "../Components/Error/Error";
import CreateTask from "../Components/Tasks/CreateTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/add-task',
        element: <CreateTask />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  },
  {
    path: "*",
    element: <Error />
  }
]);

export default router;