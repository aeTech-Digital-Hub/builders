

import Landing from "./components/pages/landingPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
export default function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element: <Landing/>
    },


  ]);

  return  <RouterProvider router={router}/>
}

