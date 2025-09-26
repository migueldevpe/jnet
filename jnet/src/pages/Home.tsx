import "./Home.css";

import ImgLG from "/hero/home-men.webp?url"
import ImgSM from "/hero/home-men-sm.webp?url";
import Logo from "/hero/jnet-w.webp?url"
import FundLG from "/hero/teste.webp?url"
import FundSM from "/hero/teste2.webp?url"

import { FaArrowDown } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Background() {
  const [image, setImage] = useState(ImgLG);
  const [fund, setFund] = useState(FundLG);

  useEffect(() => {
    function toggleImg() {
      if (window.innerWidth <= 768) {
        setImage(ImgSM);
        setFund(FundSM);
      } else {
        setImage(ImgLG);
        setFund(FundLG);
      }
    };

    toggleImg();

    window.addEventListener("resize", toggleImg);

    return () => window.removeEventListener("resize", toggleImg);
  }, []);

  return (
    <div id="home" className="w-full">
      <div className="home-bg bg-s relative flex justify-center w-full">
        <section className="w-full max-w-[1000px]">
          <img src={fund} alt="" className="fund absolute left-[50%] transform-[translatex(-50%)] h-full w-full max-w-[1300px] object-cover pointer-events-none z-0" loading="eager" decoding="sync" fetchPriority="high" />
          <div className="wallpaper relative h-[350px] w-full z-1">
            <img src={Logo} alt="" loading="eager" decoding="sync" fetchPriority="high" className="bg-logo absolute h-[40px] w-[40px] pointer-events-none"/>
            <img src={image} alt="" className="home-img absolute right-0 h-full object-cover pointer-events-none" loading="eager" decoding="sync" fetchPriority="high" />
            <div className="bg-text flex flex-col gap-4 absolute font-semibold text-white">
              <div>
                <h1 className="text-(length:--home-title) tracking-tighter">Conexão sem limites</h1>
                <h2 className="text-(length:--home-subtitle) font-normal !mt-[-2px]">Velocidade e Estabilidade para sua Casa e Negócio</h2>
              </div>
              <a href="#plans" target="_parent" rel="referrer" className="plans-button flex relative w-fit">
                <FaArrowDown className="plans-arrow absolute left-0 top-6/12 transform-[translateY(-50%)]"/>
                <span className="p-button-text !py-2 !px-4 font-normal z-1">Confira nossos planos</span>
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-s flex justify-center w-full bg-gray-100 !mb-10">
        <section className="home-text-bg bg-s w-full max-w-[1000px]">
          <p className="text-justify text-sm !leading-4.75">Na JNet, acreditamos que internet de qualidade deve ser simples, estável e acessível. Oferecemos planos rápidos, suporte ágil e tecnologia de ponta para manter você sempre online — seja para trabalhar, estudar ou se divertir.</p>
        </section>
      </div>
    </div>
  )

}