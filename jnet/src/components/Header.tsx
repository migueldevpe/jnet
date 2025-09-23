import { AiOutlineGlobal } from "react-icons/ai";
import "./Header.css";
import { MdEmail, MdPhone } from "react-icons/md";

import useCloseMenu from "../hooks/useCloseMenu";
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
          <ul id="menu" className="flex flex-row gap-4 z-[-1]">
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
      <div className="w-full h-[65px]">
      </div>
    </header>
  )

}