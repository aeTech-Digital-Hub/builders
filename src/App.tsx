

import About from "./components/pages/About";
import HousePlane from "./components/pages/HousePlane";
import Landing from "./components/pages/landingPage";
import Care from "./components/pages/Care";
import Process from "./components/pages/Process";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Trust from "./components/pages/Trust";
import Contact from "./components/pages/Contact";
import TeamCard from "./components/layout/TeamCard";
import Gallery from "./components/section/Gallery";
export default function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element: <Landing/>
    },

    {
      path : '/about',
      element: <About/>
    },

    {
      path : '/customer-care',
      element: <Care/>
    },

    {
      path : '/trust-us',
      element: <Trust/>
    },

    {
      path : '/plan',
      element: <HousePlane/>
    },
    {
      path : '/contact',
      element: <Contact/>
    },
    {
      path : 'gallery',
      element: <Gallery/>
    },


    {
      path : '/card',
      element: <TeamCard/>
    },


    {
      path : '/process',
      element: <Process/>
    },


  ]);

  return  <RouterProvider router={router}/>
}

