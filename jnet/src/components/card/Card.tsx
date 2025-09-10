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
  others_style?: React.CSSProperties;
  tooltip_text: string;
}

export default function Card({ children, label="-", title="MEGA", desc="-", listItems, valor="00,00", others_style={"--border-card-color": "blue", "--button-fade-1": "blue", "--button-fade-2": "#005dfe"} as React.CSSProperties, tooltip_text="Vazio"}: CardProps) {

  if (children) {

    return (
      <div className="card flex flex-col relative bg-white" style={others_style}>
        <div className="absolute inset-0 overflow-hidden rounded-[20px] z-[-1]">
          {children}
        </div>
        <div className="relative !p-4 !px-5">
          <div className="flex justify-center">
            <Tooltip label={tooltip_text} show={{ "--tooltip-hover-x": "-30%", "--tooltip-hover-y": "175%" } as React.CSSProperties}>
              <span className="flex items-center text-[#646466] text-sm font-semibold cursor-help">{label}<MdOutlineSpeed className="!ml-1 text-[#000] text-[1rem]" /></span>
            </Tooltip>                  
          </div>
        </div>
        <div className="flex flex-col gap-8 !p-4 !pt-0 !px-5">
          <div className="relative">
            <h2 className="text-[#0d194f] text-[2rem] font-bold">{title}</h2>
            <h3 className="flex flex-row gap-1.5 text-[#646466] text-sm"><MdWifiTethering />{desc}</h3>
          </div>
          <div>
            <h1 className="!pb-2.5 font-semibold">Inclui:</h1>
            <ul className="flex flex-col gap-2.5 text-[#646466] text-sm">
              {listItems}
            </ul>
          </div>
          <span className="card-price flex items-baseline text-[#646466] font-bold z-2">
            R$<strong className="text-[#000]">{valor}</strong>/mês
          <Tooltip label="Lembre-se, a velocidade de conexão pode ter oscilações e variações conforme fatores externos, condições topográficas e/ou climáticas, movimento, distância e/ou número de clientes usando a mesma antena, do modo usado na conexão, das aplicações ou dos sites." show={{ "--tooltip-hover-x": "-375%", "--tooltip-hover-y": "175%" } as React.CSSProperties}>
            <IoMdInformationCircle className="!ml-1 text-[#000] text-[1rem] cursor-help" />
          </Tooltip>
          </span>
        </div>
        <a className="choose-plan flex items-center justify-center flex-1 w-full self-center text-2xl font-semibold text-[1.25rem]" title="Ir para WhatsApp." href="#" target="" rel=""><span>Assinar plano</span></a>
      </div>
    )

  }

  else {
    return (
      <div className="card flex flex-col relative bg-white" style={others_style}>
        {children}
        <div className="relative !p-4 !px-5">
          <div className="flex justify-center">
            <Tooltip label={tooltip_text} show={{ "--tooltip-hover-x": "-30%", "--tooltip-hover-y": "175%" } as React.CSSProperties}>
              <span className="flex items-center text-[#646466] text-sm font-semibold cursor-help">{label}<MdOutlineSpeed className="!ml-1 text-[#000] text-[1rem]" /></span>
            </Tooltip>                  
          </div>
        </div>
        <div className="flex flex-col gap-8 !p-4 !pt-0 !px-5">
          <div className="relative">
            <h2 className="text-[#0d194f] text-[2rem] font-bold">{title}</h2>
            <h3 className="flex flex-row gap-1.5 text-[#646466] text-sm"><MdWifiTethering />{desc}</h3>
          </div>
          <div>
            <h1 className="!pb-2.5 font-semibold">Inclui:</h1>
            <ul className="flex flex-col gap-2.5 text-[#646466] text-sm">
              {listItems}
            </ul>
          </div>
          <span className="card-price flex items-baseline text-[#646466] font-bold z-2">
            R$<strong className="text-[#000]">{valor}</strong>/mês
          <Tooltip label="Lembre-se, a velocidade de conexão pode ter oscilações e variações conforme fatores externos, condições topográficas e/ou climáticas, movimento, distância e/ou número de clientes usando a mesma antena, do modo usado na conexão, das aplicações ou dos sites." show={{ "--tooltip-hover-x": "-375%", "--tooltip-hover-y": "175%" } as React.CSSProperties}>
            <IoMdInformationCircle className="!ml-1 text-[#000] text-[1rem] cursor-help" />
          </Tooltip>
          </span>
        </div>
        <a className="choose-plan flex items-center justify-center flex-1 w-full self-center text-[1.25rem] font-semibold" title="Ir para WhatsApp." href="#" target="" rel=""><span>Assinar plano</span></a>
      </div>
    )
  }

}