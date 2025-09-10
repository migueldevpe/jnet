import WhatsApp from "../components/WhatsApp.tsx";
import Doubts from "../pages/Doubts.tsx";
import Background from "../pages/HomeBackground.tsx";
import Plans from "../pages/Plans.tsx";
import "./DefaultLayout.css";

export default function DefaultLayout() {

  return (
    <main className="flex items-center flex-col w-full">
      <Background />
      <Plans />
      <Doubts />
      <WhatsApp />
    </main>
  )

}