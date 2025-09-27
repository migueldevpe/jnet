import { AiOutlineGlobal } from "react-icons/ai"
import "./Footer.css"

export default function Footer() {

  return (

    <>
      <div id="footer" className="bg-s flex flex-col items-center justify-center gap-4 bg-[#005dfe]">
        <div className="f-root flex flex-col gap-8 text-white w-full max-w-[1000px]">
          <div className="f-content flex flex-row justify-between">
            <div className="h-[80px] w-[80px]">
              <img src="/hero/jnet-w.webp" alt="Logo - JNet" className="h-full w-full aspect-square" />
            </div>
            <div className="flex flex-row gap-12">
              <div>
                <h1 className="font-semibold">Acesso rápido</h1>
                <ul className="flex flex-col gap-2 !mt-2">
                  <li><a href="#home" target="_parent">Início</a></li>
                  <li><a href="#plans" target="_parent">Planos</a></li>
                  <li><a href="#doubts" target="_parent">Dúvidas</a></li>
                  <li><a href="#contact" target="_parent">Contato</a></li>
                </ul>
              </div>
              <div>
                <h1 className="font-semibold">Contatos</h1>
                <ul className="flex flex-col gap-2 !mt-2">
                  <li>WhatsApp</li>
                  <li>Instagram</li>
                  <li>(81) 9 8888-9999</li>
                  <li>jnet.contato@hotmail.com</li>
                  <li>Rua X, № X</li>
                </ul>              
              </div>      
              {/* <div>
                <ul>
                  
                </ul>              
              </div>       */}
            </div>
          </div>
          <div className="f-label flex items-center justify-between flex-row text-sm w-full">
            <span className="flex items-center flex-row gap-2"><AiOutlineGlobal />JNet — Pernambuco</span>
            <p>© 2025 - Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </>

  )

}