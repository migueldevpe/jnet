import "./DefaultLayout.css";

import Home from "../pages/Home.tsx";
import Plans from "../pages/Plans.tsx";
import Doubts from "../pages/Doubts.tsx";
import Contact from "../pages/Contact.tsx";
import WhatsApp from "../components/WhatsApp.tsx";
import useCloseMenu from "../hooks/useCloseMenu";

export default function DefaultLayout() {

  return (

    <>
      <main className="flex items-center flex-col w-full">
        <Home />
        <Plans />
        <Doubts />
        <Contact/>
        <WhatsApp />
      </main>
      <div onClick={useCloseMenu} id="overlay" className="fixed inset-0 h-full w-full z-2"></div>
    </>
    
  )

}