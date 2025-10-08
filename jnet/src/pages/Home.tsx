import "./Home.css";

import React, { Suspense } from "react";

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
      <div className="bg-s flex justify-center w-full bg-[var(--bg-2)] text-[var(--text-color)] transition-colors duration-300">
        <section className="home-text-bg bg-s w-full max-w-[1000px]">
          <p className="text-justify hyphens-auto text-sm !leading-4.75">Na JNet, acreditamos que internet de qualidade deve ser simples, estável e acessível. Oferecemos planos rápidos, suporte ágil e tecnologia de ponta para manter você sempre online — seja para trabalhar, estudar ou se divertir.</p>
        </section>
      </div>
      <div className="bg-s bg-h-s flex justify-center w-full bg-[var(--bg-1)] text-[var(--text-color)] transition-colors duration-300">
        <section className="home-content bg-s w-full max-w-[1000px] z-1">
          <h1>Sobre</h1>
          <h1>X</h1>
          <div className="flex gap-4">
            <h1>Outros</h1>
            <h1>Outros</h1>
          </div>
          
        </section>
      </div>
    </div>
  )

}