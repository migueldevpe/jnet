import { AiOutlineGlobal } from "react-icons/ai";
import "./Header.css";

export default function Header() {

  return (
    <header className="flex flex-col items-center justify-center w-full !mt-[40px] z-1">
      <nav className="flex items-center justify-center fixed top-0 w-full h-[40px] bg-[#005dfe] text-white !px-4 z-5">
        <div className="flex flex-row justify-between w-full max-w-[1000px]">
          <span className="flex flex-row gap-1.5"><AiOutlineGlobal /> JNet</span>
          <ul className="flex flex-row gap-4">
            <li><a href="#">Início</a></li>
            <li><a href="#">Planos</a></li>
            <li><a href="#plans">Dúvidas</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
      </nav>
      <div className="w-full h-[80px] bg-gray-200">
        
      </div>
    </header>
  )

}