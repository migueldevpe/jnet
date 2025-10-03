import "./Home.css";

import React, { Suspense } from "react";

// function delayImport<T>(factory: () => Promise<T>, ms: number) {
//   return new Promise<T>((resolve) => {
//     setTimeout(() => {
//       resolve(factory());
//     }, ms);
//   });
// }

// React.lazy(() => delayImport(() => import("../components/others/hero-background"), 500));

const HeroBackground = React.lazy(() => import("../components/others/Hero-Background.tsx"));

export default function Home() {

  return (
    <div id="home" className="w-full">
      <Suspense fallback={
        <div className="flex items-center justify-center bg-[#dadada] border-y-[2px] border-[#808080] h-[350px] !w-full">
          <img src="/hero/jnet.webp" alt="Carregando" className="loading-logo brightness-35" loading="eager" decoding="sync" fetchPriority="high"/>
        </div>
        }>
        <HeroBackground />
      </Suspense>
      <div className="bg-s flex justify-center w-full bg-gray-100">
        <section className="home-text-bg bg-s w-full max-w-[1000px]">
          <p className="text-justify hyphens-auto text-sm !leading-4.75">Na JNet, acreditamos que internet de qualidade deve ser simples, estável e acessível. Oferecemos planos rápidos, suporte ágil e tecnologia de ponta para manter você sempre online — seja para trabalhar, estudar ou se divertir.</p>
        </section>
      </div>
      <div className="bg-s flex justify-center w-full">
        <section className="home-text-bg bg-s w-full max-w-[1000px]">
          <h1>COMEÇANDO</h1>
        </section>
      </div>
    </div>
  )

}