import "./WhatsApp.css";

import useMessage from "../hooks/useMessage.ts";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {

  return (
    <div className="button-wrapper fixed right-5 bottom-5 z-10">
      <a className="whatsapp flex flex-row items-center" title="WhatsApp" href={`https://api.whatsapp.com/send/?phone=5581984931028&text=${encodeURIComponent(`
        Olá, ${useMessage()}!
        Gostaria de ser atendido, poderia me ajudar?
        `)}`} target="_blank" rel="noopener noreferrer">
        <span className="text-[1.1rem] font-semibold tracking-tight">Venha combinar seu plano</span>
        <div className="w-logo-content flex items-center justify-center shrink-0">
          <FaWhatsapp size={40} />
        </div>
      </a>
      <div className="w-notification flex items-center justify-center absolute top-[-5px] right-0 font-bold">1</div>
    </div>
  )

}