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
    
    <section id="home" className="w-full">
      <Suspense fallback={
        <div className="flex items-center justify-center bg-[var(--bg-loading)] border-y-[2px] border-[#808080] h-[350px] !w-full">
          <img src="/hero/jnet-logo.webp" alt="Carregando" className="loading-logo h-[120px] w-[120px]" loading="eager" decoding="sync" fetchPriority="high"/>
        </div>
        }>
        <HeroBackground />
      </Suspense>
      <div className="bg-s flex justify-center w-full bg-[var(--bg-1)] text-[var(--text-color)] transition-colors duration-300">
        <div className="home-text-bg bg-s w-full max-w-[1000px]">
          <p className="text-justify hyphens-auto text-sm !leading-4.75">Conectar pessoas com qualidade e confiança é o que nos move. Na JNet, trabalhamos todos os dias para entregar uma internet estável, rápida e acessível — do jeito que você precisa, quando mais precisa.</p>
        </div>
      </div>
    </section>

  )

}