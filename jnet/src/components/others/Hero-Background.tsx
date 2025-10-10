import "./Hero-Background.css";

import ImgLG from "/hero/homemLG.webp?url";
import ImgSM from "/hero/homemSM.webp?url";
import FundLG from "/hero/fundLG.webp?url";
import FundSM from "/hero/fundSM.webp?url";

//import { useEffect, useState } from "react";

export default function HeroBackground() {
  // const [image, setImage] = useState<string>();
  // const [fund, setFund] = useState<string>();

  // useEffect(() => {
  //   function toggleImgs() {
  //     if (window.innerWidth <= 767) {
  //       setImage(ImgSM);
  //       setFund(FundSM);
  //     } else {
  //       setImage(ImgLG);
  //       setFund(FundLG);
  //     }
  //   }

  //   toggleImgs();

  //   window.addEventListener("resize", toggleImgs);

  //   return () => window.removeEventListener("resize", toggleImgs);
  // }, []);

  return (

    <div className="home-bg bg-s relative flex justify-center w-full">
      <section className="w-full max-w-[1000px]">
        <picture>
          <source srcSet={FundSM} media="(max-width: 767px)"/>
          <img src={FundLG} alt="" className="fund absolute left-[50%] transform-[translateX(-50%)] h-full w-full max-w-[1300px] object-cover aspect-[768/350] md:aspect-[1300/350] pointer-events-none z-0" loading="eager" decoding="sync" fetchPriority="high" />
        </picture>
        <div className="wallpaper relative h-[350px] w-full z-1">
          <div className="absolute right-[50%] transform-[translateX(50%)] h-full w-full max-w-[430px] md:w-[400px] md:right-0 md:transform-[unset]">
            <div className="relative h-full w-full max-w-[430px] pointer-events-none">
              <picture>
                <source srcSet={ImgSM} media="(max-width: 767px)"/>
                <img src={ImgLG} alt="" className="home-img h-full w-full object-cover pointer-events-none aspect-[500/438] md:aspect-[500/448]" loading="eager" decoding="sync" fetchPriority="high" />
              </picture>
              <img src="/hero/modem.webp" alt="" className="home-icons absolute left-[clamp(5px,2.5vw,45px)] top-[60px] md:left-[120px] md:top-[30px] h-[95px] w-[95px] aspect-square pointer-events-none" loading="eager" decoding="sync" fetchPriority="high" />
              <img src="/hero/wifi.webp" alt="" className="home-icons absolute right-[clamp(32px,8vw,70px)] top-[35px] md:left-0 md:top-[unset] md:bottom-[60px] h-[65px] w-[65px] aspect-square pointer-events-none" loading="eager" decoding="sync" fetchPriority="high" />
            </div>
          </div>
          <div className="bg-text flex flex-col gap-4 absolute font-semibold text-white">
            <div>
              <h1 className="text-(length:--home-title) tracking-tighter">Conexão sem limites</h1>
              <h2 className="text-(length:--home-subtitle) font-normal !mt-[-2px]">Velocidade e Estabilidade para sua Casa e Negócio</h2>
            </div>
            <a href="#plans" className="plans-button flex relative w-fit">
              <span className="p-button-text relative !py-2 !px-4 font-normal z-1">Confira nossos planos</span>
            </a>
          </div>
        </div>
      </section>
    </div>
    
  )

}