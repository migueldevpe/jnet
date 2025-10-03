import "./Header.css";

import useCloseMenu from "../hooks/useCloseMenu";
import Logo from "/hero/jnet-w.webp?url"

import { IoChatbubblesSharp } from "react-icons/io5";
import { HiPhone } from "react-icons/hi";
import { MdEmail, MdPhone } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
//import { useEffect } from "react";

export default function Header() {

/*useEffect(() => {
  const ocMenu = document.getElementById('mobile-menu') as HTMLButtonElement;
  const menu = document.getElementById('menu') as HTMLElement;

  ocMenu.onclick = () => {

  menu.classList.toggle('show');

    if (ocMenu.classList.contains('active')) {
      ocMenu.classList.remove('active');
      ocMenu.classList.add('closing');

      setTimeout(() => {
        ocMenu.classList.remove('closing');
      }, 500)
    } else {
      ocMenu.classList.remove('closing')
      ocMenu.classList.add('active');
    };
  };
}, []);*/

  return (
    <header className="flex flex-col items-center justify-center w-full !mt-[40px]">
      <div className="header-content flex items-center justify-center fixed top-0 w-full h-[40px] bg-[#005dfe] text-white !px-3 z-10">
        <nav className="flex flex-row items-center justify-between relative h-full w-full max-w-[1000px] {bg-[#005dfe]}">
          <span className="flex flex-row gap-1.5"><AiOutlineGlobal />JNet — Pernambuco</span>
          <button title="Menu" id="mobile-menu" className="flex items-center justify-center flex-col" onClick={useCloseMenu}>
            <div className="line-top"></div>
            <div className="line-middle"></div>
            <div className="line-bottom"></div>
          </button>
          <ul id="menu" className="flex flex-row gap-4 h-full z-[-1]">
            <li onClick={useCloseMenu} className="li-link"><a href="#home">Início</a></li>
            <li onClick={useCloseMenu} className="li-link"><a href="#plans">Planos</a></li>
            <li onClick={useCloseMenu} className="li-link"><a href="#doubts">Dúvidas</a></li>
            <li onClick={useCloseMenu} className="li-link"><a href="#contact">Contato</a></li>
            <li className="menu-contact w-full">
              <ul className="w-full text-sm">
                <li className="flex items-center gap-2 !pl-[1rem] !py-[1rem]"><MdPhone className="text-[1rem]" /><a href="#">(81) 98888-8888</a></li>
                <li className="flex items-center gap-2 !pl-[1rem] !py-[1rem]"><MdEmail className="text-[1rem]" /><a href="mailto:jnet.contato@hotmail.com">jnet.contato@hotmail.com</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <aside className="h-aside flex items-center justify-center w-full">
        <div className="flex items-center justify-between h-full w-full max-w-[1000px] !py-0.75">
          <div className="flex items-center h-full">
            <img src={Logo} alt="" loading="eager" decoding="sync" fetchPriority="high" className="bg-logo pointer-events-none"/>
            <span className="text-[1.25rem] !font-sans !font-semibold tracking-tighter !leading-none"></span>
          </div>
          <div className="h-aside-nav flex gap-2.5">
            <a href="tel:+5581988889999" target="_blank" rel="noreferrer" className="sm:hidden flex items-center gap-1 h-full"><HiPhone /><span>Ligar</span></a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer" className="{hidden sm:flex} flex items-center gap-1 h-full"><IoChatbubblesSharp /><span>Atendimento ágil</span></a>
          </div>
        </div>
      </aside>
    </header>
  )

}