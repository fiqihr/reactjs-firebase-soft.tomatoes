import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Write from "./components/Write";
import Read from "./components/Read.jsx";
import UpdateRead from "./components/UpdateRead.jsx";
import UpdateWrite from "./components/UpdateWrite.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Write />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/read",
    element: <Read />,
  },
  {
    path: "/updateread",
    element: <UpdateRead />,
  },
  {
    path: "/updatewrite/:firebaseId",
    element: <UpdateWrite />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
