import WhatsApp from "../components/WhatsApp";
import Background from "../pages/Background";
import Plans from "../pages/Plans";
import "./DefaultLayout.css";

export default function DefaultLayout() {

  return (
    <main className="flex items-center flex-col w-full">
      <Background />
      <Plans />
      <WhatsApp />
    </main>
  )

}