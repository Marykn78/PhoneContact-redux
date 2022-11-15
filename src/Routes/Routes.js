import { createBrowserRouter } from "react-router-dom";
import Form from "../Pages/AddContact/AddContact";
import InfoContact from "../Pages/InfoContact/InfoContact";
import Home from "../Pages/HomePage/Home";
import UpdateContact from "../Pages/UpdateContact/UpdateContact";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "newcontact",
    element: <Form />,
  },
  {
    path: "info/:userId",
    element: <InfoContact />,
  },
  {
    path: "update",
    element: <UpdateContact />,
  },
]);

export default router;
