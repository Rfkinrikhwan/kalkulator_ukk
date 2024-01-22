import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Kalkuator from "./pages/Kalkuator.jsx";
import PersegiPanjang from "./pages/PersegiPanjang.jsx";
import LayangLayang from "./pages/LayangLayang.jsx";
import JajarGenjang from "./pages/JajarGenjang.jsx";
import Persegi from "./pages/Persegi.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Kalkuator/>,
      },
      {
        path: "peregi-panjang",
        element: <PersegiPanjang/>
      },
      {
        path: "layang-layang",
        element: <LayangLayang/>
      },
      {
        path: "jajar-genjang",
        element: <JajarGenjang/>
      },
      {
        path: "persegi",
        element: <Persegi/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
