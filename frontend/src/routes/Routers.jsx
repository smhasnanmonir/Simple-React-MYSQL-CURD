import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import AddBooks from "../Content/AddBooks/AddBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addBooks",
        element: <AddBooks></AddBooks>,
      },
    ],
  },
]);

export default router;
