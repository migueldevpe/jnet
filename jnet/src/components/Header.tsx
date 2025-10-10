import "./Header.css";

import logoLG from "/hero/jnet-headerLG.webp?url";
import logoSM from "/hero/jnet-headerSM.webp?url";
import Tooltip from "./Tooltip";
import useCloseMenu from "../hooks/useCloseMenu";
import useMessage from "../hooks/useMessage"; 

import { IoChatbubblesSharp, IoContrast, IoHome } from "react-icons/io5";
import { HiPhone } from "react-icons/hi";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaFileSignature } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { RiInstagramFill } from "react-icons/ri";
//import { MdFacebook } from "react-icons/md";

export default function Header() {
  const [ tel, setTel ] = useState<string>( window.innerWidth <= 767 ? "Ligar" : "(81) 9 8493-1028" );
  //const [ logo, setLogo ] = useState<string>(logoLG);
  const [ btnContrast, setBtnContrast ] = useState<string>( window.innerWidth <= 375 ? "Contraste" : "Alto contraste" );

  useEffect(() => {
    function toggleTel() {
      if (window.innerWidth <= 767) {
        setTel("Ligar");
      } else {
        setTel("(81) 9 8493-1028");
      }
    };

    toggleTel();

    window.addEventListener("resize", toggleTel);

    return () => window.removeEventListener("resize", toggleTel);
  }, []);

  // useEffect(() => {
  //   function toggleLogo() {
  //     if (window.innerWidth <= 500) {
  //       setLogo(logoSM);
  //     } else {
  //       setLogo(logoLG);
  //     }
  //   };

  //   toggleLogo();

  //   window.addEventListener("resize", toggleLogo);

  //   return () => window.removeEventListener("resize", toggleLogo);
  // },[])

  useEffect(() => {
    function toggleBtnContrast() {
      if ( window.innerWidth <= 375 ) {
        setBtnContrast("Contraste");
      } else {
        setBtnContrast("Alto contraste");
      }
    };

    toggleBtnContrast();

    window.addEventListener("resize", toggleBtnContrast);

    return () => window.removeEventListener("resize", toggleBtnContrast);
  }, [])

  const { toggleTheme } = useTheme();

  return (
    <header className="flex flex-col items-center justify-center w-full !mt-[40px]">
      <div className="header-content flex items-center justify-center fixed top-0 h-full max-h-[40px] w-full bg-[#005dfe] text-white !px-2 z-10">
        <nav className="flex flex-row items-center justify-between gap-2 h-full w-full max-w-[1000px] !py-[.5rem]">
          <span className="jnet-pin relative">
            <Tooltip label="Atendendo Recife, Olinda e Região. Consulte a disponibilidade em sua localização." style={{ "--tooltip-hover-y": "1.75rem", "--tooltip-hover-x": "50%" } as React.CSSProperties} p_arrow_tooltip="t-arrow-top">
              <div className="flex items-center">
                <img src="/hero/jnet-logo.webp" alt="" className="h-[1.25em] w-[1.25em] pointer-events-none" loading="eager" decoding="sync" fetchPriority="high" />            
                <span className="!ml-1.5 text-nowrap">
                  JNet — Pernambuco
                </span>
                <TiArrowSortedDown className="shrink-0"/>
              </div> 
            </Tooltip>
          </span>
          <ul className="flex items-center flex-row gap-2 h-full">
            <li className="flex items-center h-full">
              <a href="#home" className="flex items-center flex-row gap-1.25 h-full">
                <IoHome/>
                <span>Início</span>
              </a>
            </li>
            <li className="flex items-center h-full">
              <button type="button" onClick={toggleTheme} className="flex items-center flex-row gap-1.25 h-full cursor-pointer">
                <IoContrast/>
                <span>{btnContrast}</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <aside className="h-aside flex items-center justify-center bg-[var(--bg-1)] text-[var(--text-color)] transition-colors duration-300 h-[56px] w-full overflow-x-clip">
        <nav className="flex items-center justify-between h-full w-full max-w-[1000px] !py-0.75">
          <picture className="flex items-center h-full">
            <source srcSet={logoSM} media="(max-width: 500px)"/>
            <img src={logoLG} alt="" loading="eager" decoding="sync" fetchPriority="high" className="bg-logo pointer-events-none transition-[filter] duration-300"/>
            {/* <span className="text-[1.25rem] !font-sans !font-semibold tracking-tighter !leading-none"></span> */}
          </picture>
          <ul id="menu" className="h-aside-nav flex items-center flex-row gap-4 h-full">
            <li onClick={useCloseMenu} className="l-link">
              <a href="tel:+5581984931028" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 h-full">
                <HiPhone />
                <span>{tel}</span>
              </a>
            </li>
            <li onClick={useCloseMenu} className="l-link">
              <a href={`https://api.whatsapp.com/send/?phone=5581984931028&text=${`
                Olá, ${useMessage()}!
                Gostaria de ser atendido, poderia me ajudar?
                `}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 h-full">
                <IoChatbubblesSharp />
                <span>Fale conosco</span>
              </a>
            </li>
            <li onClick={useCloseMenu} className="l-link">
              <a href="#plans" className="flex items-center gap-1 h-full">
                <FaFileSignature />
                <span>Assine já</span>
              </a>
            </li>
            <li className="l-others">
              <ul className="flex gap-4 border-l">
                <li onClick={useCloseMenu} className="l-link l-hidden">
                  <a href="https://www.instagram.com/jnetultrafibra" title="Instagram" className="flex items-center gap-1 h-full" target="_blank" rel="noopener noreferrer">
                    <RiInstagramFill />
                    <span>Instagram</span>
                  </a>
                </li>
                {/* <li onClick={useCloseMenu} className="l-link l-hidden">
                  <a href="#plans" title="Facebook" className="flex items-center gap-1 h-full">
                    <MdFacebook />
                    <span>Facebook</span>
                  </a>
                </li> */}
              </ul>
            </li>
          </ul>
          <button title="Menu" id="mobile-menu" className="flex items-center justify-center flex-col" onClick={useCloseMenu}>
            <div className="line-top"></div>
            <div className="line-middle"></div>
            <div className="line-bottom"></div>
          </button>
        </nav>
      </aside>
    </header>
  )

}