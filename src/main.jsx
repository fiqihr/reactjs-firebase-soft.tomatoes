import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Write from "./components/Write";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Write />,
  },
  {
    path: "/write",
    element: <Write />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
