import "./Plans.css";

import imgCard1 from "../assets/images/cardMen.webp";
import imgCard2 from "../assets/images/cardGirl.webp";
import imgCard3 from "../assets/images/cardBoy.webp";
import useMessage from "../hooks/useMessage.ts";

import { MdHeadsetMic, MdOutlineFileDownload, MdOutlineFileUpload, MdStar, MdTv, MdWifi } from "react-icons/md";
import { PiToolbox } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import React, { Suspense } from "react";

const Card = React.lazy(() => import("../components/card/Card.tsx"));

export default function Plans() {

  return (

    <div id="plans" className="bg-s flex justify-center w-full bg-[var(--bg-2)] text-[var(--text-color)] transition-colors duration-300">
      <section className="w-full max-w-[1000px]">
        <div className="plans-content flex flex-col gap-10 w-full">
          <div className="w-full">
            <h1 className="text-3xl font-semibold !mb-2">Confira os nossos planos</h1>
            <p className="text-justify hyphens-auto !leading-4.75">Escolher o plano de internet certo faz toda a diferença no dia a dia. Pensando nisso, montamos opções que atendem desde quem só precisa navegar e assistir vídeos, até quem busca máxima performance para jogos, trabalho remoto e streaming em alta qualidade. Confira abaixo o plano ideal para você ou sua família.</p>
          </div>
          <div>
            <div className="plans-cards-content flex items-start gap-2 w-full overflow-x-auto">
              <Suspense fallback={
                <div className="flex items-center justify-center shrink-0 bg-[var(--bg-loading)] border-[#808080] border-2 rounded-[15px] h-[380px] max-w-[300px] w-full">
                  <img src="/hero/jnet-logo.webp" alt="Carregando" className="loading-logo h-[100px] w-[100px]" loading="eager" decoding="sync" fetchPriority="high"/>
                </div>
                }>
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
                  img={imgCard1}
                  tooltip_text="Ideal para quem usa redes sociais, assiste vídeos em HD e conecta até 2 dispositivos sem travar."
                  w_message={
                  `Olá, ${useMessage()}!
                  Gostaria de solicitar a disponibilidade do plano *Básico* em minha região.

                  Meu *CEP*:`.replace(/^(?!\s*$)\s+/gm, '')
                  }
                />
                </Suspense>
              <Suspense fallback={
                <div className="flex items-center justify-center shrink-0 bg-[var(--bg-loading)] border-[#808080] border-2 rounded-[15px] h-[380px] max-w-[300px] w-full">
                  <img src="/hero/jnet-logo.webp" alt="Carregando" className="loading-logo h-[100px] w-[100px]" loading="eager" decoding="sync" fetchPriority="high"/>
                </div>
                }>
                <Card 
                  label="Mega"
                  title="200MEGA"
                  desc="Internet FIBRA"
                  listItems={
                    <>
                      <li className="flex flex-row gap-1.5"><PiToolbox />Instalação</li>
                      <li className="flex flex-row gap-1.5"><MdWifi />100% Fibra Ótica</li>
                      <li className="flex flex-row gap-1.5"><MdTv />Canais Premium</li>
                      <li className="flex flex-row gap-1.5"><MdOutlineFileDownload />Download 200Mbps</li>
                      <li className="flex flex-row gap-1.5"><MdOutlineFileUpload />Upload 200Mbps</li>
                      <li className="flex flex-row gap-1.5"><MdHeadsetMic />Suporte 24h</li>
                    </>
                  }  
                  valor="64,99"
                  img={imgCard2}
                  tooltip_text="Perfeito para famílias pequenas, chamadas de vídeo, jogos online e streaming em alta qualidade."
                  w_message={
                  `Olá, ${useMessage()}!
                  Gostaria de solicitar a disponibilidade do plano *Mega* em minha região.

                  Meu *CEP*:`.replace(/^(?!\s*$)\s+/gm, '')
                }
                />
              </Suspense>
              <Suspense fallback={
                <div className="flex items-center justify-center shrink-0 bg-[var(--bg-loading)] border-[#808080] border-2 rounded-[15px] h-[380px] max-w-[300px] w-full">
                  <img src="/hero/jnet-logo.webp" alt="Carregando" className="loading-logo h-[100px] w-[100px]" loading="eager" decoding="sync" fetchPriority="high"/>
                </div>
                }>
                <Card 
                  label="Família"
                  title="400MEGA"
                  desc="Internet FIBRA"
                  listItems={
                    <>
                      <li className="flex flex-row gap-1.5"><PiToolbox />Instalação</li>
                      <li className="flex flex-row gap-1.5"><MdWifi />100% Fibra Ótica</li>
                      <li className="flex flex-row gap-1.5"><MdTv />Canais Premium</li>
                      <li className="flex flex-row gap-1.5"><MdOutlineFileDownload />Download 400Mbps</li>
                      <li className="flex flex-row gap-1.5"><MdOutlineFileUpload />Upload 400Mbps</li>
                      <li className="flex flex-row gap-1.5"><MdHeadsetMic />Suporte 24h</li>
                    </>
                  }  
                  valor="79,99"
                  img={imgCard3}
                  others_style={{"--border-card-color": "orange", "--button-fade-1": "#ffa600", "--button-fade-2": "#ffc65c"} as React.CSSProperties}
                  tooltip_text="Feito para casas com muitos dispositivos, home office, streaming em 4K e máxima performance online."
                  w_message={
                  `Olá, ${useMessage()}!
                  Gostaria de solicitar a disponibilidade do plano *Família* em minha região.
                  
                  Meu *CEP*:`.replace(/^(?!\s*$)\s+/gm, '')
                  }
                >
                  <MdStar className="card-star absolute top-2.5 right-2.5 text-[#ffa600]" size={24}/>
                </Card>
              </Suspense>
            </div>
            <span className="md:hidden block relative text-sm text-[var(--card-other-text-plan)] transition-colors duration-300 w-fit !mt-[.5rem]">Arraste para ver mais planos
            <FaArrowRight className="plans-arrow absolute right-[-1.75rem] top-0 transform-[translateY(-50%)]"/>
            </span>
          </div>
          <div>
            <p className="text-justify hyphens-auto !leading-4.75">Ainda está em dúvida sobre qual plano contratar? Vá até a <a className="link text-[var(--link)] transition-colors duration-300" title="Ir até a secão de dúvidas." href="#doubts">seção de dúvidas</a>, ou contate a nossa equipe de suporte que está pronta para te ajudar a escolher a melhor opção para o seu perfil de uso. Fale conosco pelo WhatsApp ou entre em contato pelos nossos <a className="link text-[var(--link)] transition-colors duration-300" title="Ir até a secão de contato." href="#contact">canais de atendimento</a> — vamos tirar todas as suas dúvidas e garantir que você tenha a melhor experiência online.</p>
          </div>
        </div>
      </section>
    </div>

  )

}