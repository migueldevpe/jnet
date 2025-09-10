import "./Plans.css";
import Card from "../components/card/Card.tsx";
import { MdHeadsetMic, MdOutlineFileDownload, MdOutlineFileUpload, MdStar, MdWifi } from "react-icons/md";
import { PiToolbox } from "react-icons/pi";

export default function Plans() {

  return (
    <div id="plans" className="bg-s flex justify-center w-full bg-gray-200">
      <section className="w-full max-w-[1000px]">
        <div className="plans-content flex flex-col gap-14 w-full">
          <div className="w-full">
            <h1 className="text-3xl font-semibold !mb-2">Confira os nossos planos</h1>
            <p>Escolher o plano de internet certo faz toda a diferença no dia a dia. Pensando nisso, montamos opções que atendem desde quem só precisa navegar e assistir vídeos, até quem busca máxima performance para jogos, trabalho remoto e streaming em alta qualidade. Confira abaixo o plano ideal para você ou sua família.</p>
          </div>
          <div className="plans-cards-content grid gap-2 w-full">
            <Card 
              label="Básico"
              title="100MEGA"
              desc="Internet FIBRA"
              listItems={
                <>
                  <li className="flex flex-row gap-1.5"><PiToolbox />Instalação</li>
                  <li className="flex flex-row gap-1.5"><MdWifi />100% Fibra Ótica</li>
                  <li className="flex flex-row gap-1.5"><MdOutlineFileDownload />Download 400Mbps</li>
                  <li className="flex flex-row gap-1.5"><MdOutlineFileUpload />Upload 250Mbps</li>
                  <li className="flex flex-row gap-1.5"><MdHeadsetMic />Suporte 24h</li>
                </>
              }  
              valor="54,99"
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
                  <li className="flex flex-row gap-1.5"><MdOutlineFileDownload />Download 400Mbps</li>
                  <li className="flex flex-row gap-1.5"><MdOutlineFileUpload />Upload 250Mbps</li>
                  <li className="flex flex-row gap-1.5"><MdHeadsetMic />Suporte 24h</li>
                </>
              }  
              valor="64,99"
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
                  <li className="flex flex-row gap-1.5"><MdOutlineFileUpload />Upload 250Mbps</li>
                  <li className="flex flex-row gap-1.5"><MdHeadsetMic />Suporte 24h</li>
                </>
              }  
              valor="79,99"
              others_style={{"--border-card-color": "orange", "--button-fade-1": "#FFB733", "--button-fade-2": "orange"} as React.CSSProperties}
              tooltip_text="Feito para casas com muitos dispositivos, home office, streaming em 4K e máxima performance online."
            >
              <MdStar className="card-star absolute top-2.5 right-2.5 text-[orange]" size={24}/>
            </Card>
          </div>
          <div>
            <p>Ainda está em dúvida sobre qual plano contratar? Vá até a <a className="text-[#0066cc] hover:underline" href="#help" target="_parent" rel="referrer">seção de dúvidas</a>, ou contate a nossa equipe de suporte que está pronta para te ajudar a escolher a melhor opção para o seu perfil de uso. Fale conosco pelo WhatsApp ou entre em contato pelos nossos <a className="text-[#0066cc] hover:underline" href="#contact" target="_parent" rel="referrer">canais de atendimento</a> — vamos tirar todas as suas dúvidas e garantir que você tenha a melhor experiência online.</p>
          </div>
        </div>
      </section>
    </div>
  )

}