import { FaWhatsapp } from "react-icons/fa";
import "./WhatsApp.css";
import useMessage from "../hooks/useMessage.ts";

export default function WhatsApp() {
  const horário = useMessage();

  return (
    <div className="button-wrapper fixed right-5 bottom-5 z-5">
      <a className="whatsapp flex flex-row items-center" title="WhatsApp" href={`https://api.whatsapp.com/send/?phone=5581984325732&text=Ol%C3%A1%2C+${horário}%2C+gostaria+de+saber+sobre+os+planos+disponíveis.%0APoderia+me+ajudar%3F&type=phone_number&app_absent=0`} target="_blank" rel="noreferrer">
        <span className="font-semibold tracking-tight">Venha combinar seu plano</span>
        <div className="w-logo-content flex items-center justify-center shrink-0">
          <FaWhatsapp size={32} />
        </div>
      </a>
      <div className="w-notification flex items-center justify-center absolute top-[-5px] right-0 font-bold">1</div>
    </div>
  )

}