import "./Hero-Background.css";

import ImgLG from "/hero/home-men.webp?url"
import ImgSM from "/hero/home-men-sm.webp?url";
import FundLG from "/hero/teste.webp?url"
import FundSM from "/hero/teste2.webp?url"

import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

export default function HeroBackground() {
  const [image, setImage] = useState<string>();
  const [fund, setFund] = useState<string>();

  useEffect(() => {
    function toggleImgs() {
      if (window.innerWidth <= 768) {
        setImage(ImgSM);
        setFund(FundSM);
      } else {
        setImage(ImgLG);
        setFund(FundLG);
      }
    }

    toggleImgs();

    window.addEventListener("resize", toggleImgs);

    return () => window.removeEventListener("resize", toggleImgs);
  }, []);

  return (

    <div className="home-bg bg-s relative flex justify-center w-full">
      <section className="w-full max-w-[1000px]">
        <img src={fund} alt="" className="fund absolute left-[50%] transform-[translatex(-50%)] h-full w-full max-w-[1300px] object-cover pointer-events-none z-0" loading="eager" decoding="sync" fetchPriority="high" />
        <div className="wallpaper relative h-[350px] w-full z-1">
          <img src={image} alt="" className="home-img absolute right-0 h-full object-cover pointer-events-none" loading="eager" decoding="sync" fetchPriority="high" />
          <div className="bg-text flex flex-col gap-4 absolute font-semibold text-white">
            <div>
              <h1 className="text-(length:--home-title) tracking-tighter">Conexão sem limites</h1>
              <h2 className="text-(length:--home-subtitle) font-normal !mt-[-2px]">Velocidade e Estabilidade para sua Casa e Negócio</h2>
            </div>
            <a href="#plans" target="_parent" rel="referrer" className="plans-button flex relative w-fit">
              <FaArrowDown className="home-arrow absolute left-0 top-6/12 transform-[translateY(-50%)]"/>
              <span className="p-button-text !py-2 !px-4 font-normal z-1">Confira nossos planos</span>
            </a>
          </div>
        </div>
      </section>
    </div>
    
  )

}