import WhatsApp from "../components/WhatsApp.tsx";
import Doubts from "../pages/Doubts.tsx";
import Home from "../pages/Home.tsx";
import Plans from "../pages/Plans.tsx";
import "./DefaultLayout.css";

export default function DefaultLayout() {

  return (
    <main className="flex items-center flex-col w-full">
      <Home />
      <Plans />
      <Doubts />
      <WhatsApp />
    </main>
  )

}