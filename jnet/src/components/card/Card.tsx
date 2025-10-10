import "./Card.css"

import Tooltip from "../Tooltip";

import { IoMdInformationCircle } from "react-icons/io";
import { MdWifiTethering } from "react-icons/md";
import { MdOutlineSpeed } from "react-icons/md";

interface CardProps {
  children?: React.ReactNode;
  label: string;
  title: string;
  desc: string;
  listItems?: React.ReactNode;
  valor: string;
  img: string;
  others_style?: React.CSSProperties;
  tooltip_text: string;
  w_message?: string;
}

export default function Card({ children, label="-", title="MEGA", desc="-", listItems, valor="00,00", img, others_style={"--border-card-color": "#005dfe", "--button-fade-1": "#1010fe", "--button-fade-2": "#005dfe"} as React.CSSProperties, tooltip_text="Vazio", w_message }: CardProps) {

  return (
    <div className="card flex flex-col shrink-0 relative bg-[var(--bg-1)]" style={others_style}>
      <div className="wrapper-img absolute inset-0 overflow-hidden rounded-[10px] pointer-events-none z-0">
        <img src="/hero/jnet-logo.webp" alt="Logo" className="jnet-icon"/>
        {children}
        <img src={img} alt="" loading="lazy" decoding="async" fetchPriority="low" className="card-people" />
      </div>
      <div className="relative !p-4 !px-5 z-2">
        <div className="flex justify-center gap-1">
          <span className="flex items-center text-[var(--card-other-text-plan)] transition-colors duration-300 text-sm font-semibold">{label}</span>
          <Tooltip label={tooltip_text} style={{ "--tooltip-hover-x": "50%", "--tooltip-hover-y": "1.5rem" } as React.CSSProperties} p_arrow_tooltip="t-arrow-top">
            <MdOutlineSpeed className="title-svg text-[1rem] cursor-help" />
          </Tooltip>                  
        </div>
      </div>
      <div className="flex flex-col gap-8 !p-4 !pt-0 !px-5 text-outline z-1">
        <div className="relative">
          <h2 className="text-[var(--card-price-plan)] transition-colors duration-300 text-[2rem] uppercase font-bold tracking-tight">{title}</h2>
          <h3 className="flex flex-row gap-1 text-[var(--card-other-text-plan)] transition-colors duration-300 text-sm"><MdWifiTethering />{desc}</h3>
        </div>
        <div>
          <h1 className="!pb-2.5 font-semibold text-[var(--text-color)] transition-colors duration-300">Inclui:</h1>
          <ul className="flex flex-col gap-2.5 text-[var(--card-other-text-plan)] transition-colors duration-300 text-sm">
            {listItems}
          </ul>
        </div>
        <span className="card-price flex items-baseline text-[var(--card-other-text-plan)] transition-colors duration-300 font-bold">
          R$<strong className="text-[var(--text-color)] transition-colors duration-300">{valor}</strong>/mês
        <Tooltip label="Lembre-se, a velocidade de conexão pode ter oscilações e variações conforme fatores externos, condições topográficas e/ou climáticas, movimento, distância e/ou número de clientes usando a mesma antena, do modo usado na conexão, das aplicações ou dos sites." style={{ "--tooltip-hover-x": "50%", "--tooltip-hover-y": "-8.75rem", "textShadow": "none" } as React.CSSProperties} p_arrow_tooltip="t-arrow-bottom">
          <IoMdInformationCircle className="!ml-1 text-[var(--text-color)] transition-colors duration-300 text-[1rem] cursor-help svg-outline" />
        </Tooltip>
        </span>
      </div>
      <a className="choose-plan flex items-center justify-center flex-1 w-full self-center text-2xl font-semibold text-[1.25rem]" title="Ir para WhatsApp." href={`https://api.whatsapp.com/send/?phone=5581984931028&text=${encodeURIComponent(w_message as string)}&app_absent=0`} target="_blank" rel="noopener noreferrer"><span>Assinar plano</span></a>
    </div>
  )

}