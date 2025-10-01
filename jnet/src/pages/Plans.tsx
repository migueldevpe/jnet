import "./Plans.css";
import Card from "../components/card/Card.tsx";
import { MdHeadsetMic, MdOutlineFileDownload, MdOutlineFileUpload, MdStar, MdWifi } from "react-icons/md";
import { PiToolbox } from "react-icons/pi";

import mlk from "../../../outros/mlk.webp"
import mlk1 from "../../../outros/mlk1.webp"
import mlk2 from "../../../outros/mlk2.webp"
import { FaArrowRight } from "react-icons/fa6";

export default function Plans() {

  return (
    <div id="plans" className="bg-s flex justify-center w-full bg-gray-100">
      <section className="w-full max-w-[1000px]">
        <div className="plans-content flex flex-col gap-10 w-full">
          <div className="w-full">
            <h1 className="text-3xl font-semibold !mb-2">Confira os nossos planos</h1>
            <p className="text-justify hyphens-auto !leading-4.75">Escolher o plano de internet certo faz toda a diferença no dia a dia. Pensando nisso, montamos opções que atendem desde quem só precisa navegar e assistir vídeos, até quem busca máxima performance para jogos, trabalho remoto e streaming em alta qualidade. Confira abaixo o plano ideal para você ou sua família.</p>
          </div>
          <div>
            <div className="plans-cards-content flex items-start gap-2 w-full overflow-x-auto">
              <Card 
                label="Básico"
                title="100MEGA"
                desc="Internet FIBRA"
                listItems={
                  <>
                    <li className="flex flex-row gap-1.5"><PiToolbox />Instalação</li>
                    <li className="flex flex-row gap-1.5"><MdWifi />100% Fibra Ótica</li>
                    <li className="flex flex-row gap-1.5"><MdOutlineFileDownload />Download 100Mbps</li>
                    <li className="flex flex-row gap-1.5"><MdOutlineFileUpload />Upload 100Mbps</li>
                    <li className="flex flex-row gap-1.5"><MdHeadsetMic />Suporte 24h</li>
                  </>
                }  
                valor="54,99"
                img={mlk2}
                tooltip_text="Ideal para quem usa redes sociais, assiste vídeos em HD e conecta até 2 dispositivos sem travar."
              />
              <Card 
                label="Intermediário"
                title="200MEGA"
                desc="Internet FIBRA"
                listItems={
                  <>
                    <li className="flex flex-row gap-1.5"><PiToolbox />Instalação</li>
                    <li className="flex flex-row gap-1.5"><MdWifi />100% Fibra Ótica</li>
                    <li className="flex flex-row gap-1.5"><MdOutlineFileDownload />Download 200Mbps</li>
                    <li className="flex flex-row gap-1.5"><MdOutlineFileUpload />Upload 200Mbps</li>
                    <li className="flex flex-row gap-1.5"><MdHeadsetMic />Suporte 24h</li>
                  </>
                }  
                valor="64,99"
                img={mlk1}
                tooltip_text="Perfeito para famílias pequenas, chamadas de vídeo, jogos online e streaming em alta qualidade."
              />
              <Card 
                label="Popular"
                title="400MEGA"
                desc="Internet FIBRA"
                listItems={
                  <>
                    <li className="flex flex-row gap-1.5"><PiToolbox />Instalação</li>
                    <li className="flex flex-row gap-1.5"><MdWifi />100% Fibra Ótica</li>
                    <li className="flex flex-row gap-1.5"><MdOutlineFileDownload />Download 400Mbps</li>
                    <li className="flex flex-row gap-1.5"><MdOutlineFileUpload />Upload 400Mbps</li>
                    <li className="flex flex-row gap-1.5"><MdHeadsetMic />Suporte 24h</li>
                  </>
                }  
                valor="79,99"
                img={mlk}
                others_style={{"--border-card-color": "orange", "--button-fade-1": "#ffc65c", "--button-fade-2": "orange"} as React.CSSProperties}
                tooltip_text="Feito para casas com muitos dispositivos, home office, streaming em 4K e máxima performance online."
              >
                <MdStar className="card-star absolute top-2.5 right-2.5 text-[orange]" size={24}/>
              </Card>
            </div>
            <span className="md:hidden block relative text-sm text-[#707070] w-fit !mt-[.5rem]">Arraste para ver mais planos
            <FaArrowRight className="plans-arrow absolute right-[-1.75rem] top-0 transform-[translateY(-50%)]"/>
            </span>
          </div>
          <div>
            <p className="text-justify hyphens-auto !leading-4.75">Ainda está em dúvida sobre qual plano contratar? Vá até a <a className="link text-[#0066cc]" title="Ir até a secão de dúvidas." href="#doubts" target="_parent" rel="referrer">seção de dúvidas</a>, ou contate a nossa equipe de suporte que está pronta para te ajudar a escolher a melhor opção para o seu perfil de uso. Fale conosco pelo WhatsApp ou entre em contato pelos nossos <a className="link text-[#0066cc]" title="Ir até a secão de contato." href="#contact" target="_parent" rel="referrer">canais de atendimento</a> — vamos tirar todas as suas dúvidas e garantir que você tenha a melhor experiência online.</p>
          </div>
        </div>
      </section>
    </div>
  )

}