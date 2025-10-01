import { AiOutlineGlobal } from "react-icons/ai";
import Tooltip from "../Tooltip";
import "./Card.css"
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
}

export default function Card({ children, label="-", title="MEGA", desc="-", listItems, valor="00,00", img, others_style={"--border-card-color": "#005dfe", "--button-fade-1": "#000082", "--button-fade-2": "#005dfe"} as React.CSSProperties, tooltip_text="Vazio"}: CardProps) {

  return (
    <div className="card flex flex-col shrink-0 relative bg-gray-50" style={others_style}>
      <div className="wrapper-img absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none">
        <AiOutlineGlobal className="jnet-icon text-[#646466]"/> {/* <- TALVEZ EU REMOVA ISSO */}
        {children}
        <div className="relative inset-0 h-full w-full">
          <img src={img} alt="" loading="lazy" />
        </div>
      </div>
      <div className="relative !p-4 !px-5 z-2">
        <div className="flex justify-center gap-1">
          <span className="flex items-center text-[#646466] text-sm font-semibold">{label}</span>
          <Tooltip label={tooltip_text} show={{ "--tooltip-hover-x": "-5rem", "--tooltip-hover-y": "1.5rem" } as React.CSSProperties} p_arrow_tooltip="t-arrow-top">
            <MdOutlineSpeed className="text-[#000] text-[1rem] cursor-help" />
          </Tooltip>                  
        </div>
      </div>
      <div className="flex flex-col gap-8 !p-4 !pt-0 !px-5 drop-shadow-xs drop-shadow-white">
        <div className="relative">
          <h2 className="text-[#0d194f] text-[2rem] uppercase font-bold tracking-tight">{title}</h2>
          <h3 className="flex flex-row gap-1 text-[#646466] text-sm"><MdWifiTethering />{desc}</h3>
        </div>
        <div>
          <h1 className="!pb-2.5 font-semibold">Inclui:</h1>
          <ul className="flex flex-col gap-2.5 text-[#646466] text-sm">
            {listItems}
          </ul>
        </div>
        <span className="card-price flex items-baseline text-[#646466] font-bold">
          R$<strong className="text-[#000]">{valor}</strong>/mês
        <Tooltip label="Lembre-se, a velocidade de conexão pode ter oscilações e variações conforme fatores externos, condições topográficas e/ou climáticas, movimento, distância e/ou número de clientes usando a mesma antena, do modo usado na conexão, das aplicações ou dos sites." show={{ "--tooltip-hover-x": "-4.75rem", "--tooltip-hover-y": "-8.75rem" } as React.CSSProperties} p_arrow_tooltip="t-arrow-bottom">
          <IoMdInformationCircle className="!ml-1 text-[#000] text-[1rem] cursor-help" />
        </Tooltip>
        </span>
      </div>
      <a className="choose-plan flex items-center justify-center flex-1 w-full self-center text-2xl font-semibold text-[1.25rem]" title="Ir para WhatsApp." href="#" target="" rel=""><span>Assinar plano</span></a>
    </div>
  )

}