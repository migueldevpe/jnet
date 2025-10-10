import "./Home.css";

//import { MdVerified } from "react-icons/md";
import React, { Suspense } from "react";

//import aboutMen from "../assets/images/aboutMen.webp";

function delayImport<T>(factory: () => Promise<T>, ms: number) {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(factory());
    }, ms);
  });
}

const HeroBackground = React.lazy(() => delayImport(() => import("../components/others/Hero-Background"), 500));

//const HeroBackground = React.lazy(() => import("../components/others/Hero-Background.tsx"));

export default function Home() {

  return (
    <div id="home" className="w-full">
      <Suspense fallback={
        <div className="flex items-center justify-center bg-[var(--bg-loading)] border-y-[2px] border-[#808080] h-[350px] !w-full">
          <img src="/hero/jnet-logo.webp" alt="Carregando" className="loading-logo h-[120px] w-[120px]" loading="eager" decoding="sync" fetchPriority="high"/>
        </div>
        }>
        <HeroBackground />
      </Suspense>
      <div className="bg-s flex justify-center w-full bg-[var(--bg-1)] text-[var(--text-color)] transition-colors duration-300">
        <section className="home-text-bg bg-s w-full max-w-[1000px]">
          <p className="text-justify hyphens-auto text-sm !leading-4.75">Conectar pessoas com qualidade e confiança é o que nos move. Na JNet, trabalhamos todos os dias para entregar uma internet estável, rápida e acessível — do jeito que você precisa, quando mais precisa.</p>
        </section>
      </div>
      {/* <div className="bg-s bg-h-s flex justify-center w-full bg-[var(--bg-1)] text-[var(--text-color)] transition-colors duration-300">
        <section className="home-content bg-s flex items-center justify-between flex-row gap-8 w-full max-w-[1000px] z-1">
          <picture className="home-content-img flex w-6/12">
            <source srcSet="#" media="(max-width: 768px)"/>
            <img src={aboutMen} alt="" className="h-full w-full min-w-[375px] object-cover aspect-[550/479] pointer-events-none" loading="lazy" decoding="async" fetchPriority="low" />
          </picture>
          <div className="home-content-text flex flex-col gap-4 w-6/12 self-start">
            <h1 className="flex items-center flex-row gap-1.5 text-[var(--jnet-title)] transition-colors duration-300 font-semibold"><img alt="" className="mask-image h-[1em] w-[1em] object-cover pointer-events-none" loading="lazy" decoding="async" fetchPriority="low" />JNet</h1>
            <h2 className="text-3xl font-semibold">O que nos move?</h2>
            <p className="text-justify hyphens-auto !leading-4.75 w-full">A JNet nasceu com o propósito de tornar a internet de <strong className="font-medium">qualidade acessível</strong> a todos. Acreditamos que conectar pessoas é mais do que fornecer megas por segundo — é <strong className="font-medium">oferecer estabilidade</strong>, atendimento humano e soluções que simplificam a vida digital. Com tecnologia de ponta e uma equipe comprometida, garantimos uma <strong className="font-medium">conexão rápida</strong>, segura e sempre disponível, para que você possa trabalhar, estudar e se divertir sem interrupções. A nossa internet é:</p>
            <aside className="home-content-aside flex items-start w-full">
              <ul className="flex flex-col gap-2 font-semibold">
                <li><MdVerified />Estável</li>
                <li><MdVerified />Rápida</li>
                <li><MdVerified />Acessível</li>
              </ul>
            </aside>
          </div>
        </section>
      </div> */}
    </div>
  )

}