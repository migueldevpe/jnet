import "./Footer.css" 

export default function Footer() {

  return (

    <div id="footer" className="bg-s flex flex-col items-center justify-center gap-4 bg-[#005dfe]">
      <div className="f-root flex flex-col gap-8 text-white w-full max-w-[1000px]">
        <div className="f-content flex flex-row justify-between">
          <div className="h-[80px] w-fit">
            <img src="/hero/jnet-footer.webp" alt="Logo - JNet" className="h-full w-full aspect-[620/220] pointer-events-none" loading="lazy" decoding="async" fetchPriority="low"/>
          </div>
          <div className="flex flex-row gap-12">
            <div>
              <h1 className="font-semibold">Acesso rápido</h1>
              <ul className="flex flex-col gap-2 !mt-2">
                <li><a href="#home">Início</a></li>
                <li><a href="#plans">Planos</a></li>
                <li><a href="#doubts">Dúvidas</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </div>
            <div>
              <h1 className="font-semibold">Redes sociais</h1>
              <ul className="flex flex-col gap-2 !mt-2">
                <a href="https://www.instagram.com/jnetultrafibra" target="_blank" rel="noopener noreferrer"><li>Instagram</li></a>
                {/* <li>Facebook</li> */}
              </ul>              
            </div>      
            <div className="adress-limit">
              <h1 className="font-semibold">Endereço</h1>
              <ul className="!mt-2">
                <a href="https://maps.app.goo.gl/8eAhUmnC86E28Hw39" target="_blank" rel="noopener noreferrer"><li>Rua Visconde do Uruguai, 65 - Recife, PE | CEP 50610-700</li></a>
              </ul>              
            </div>
          </div>
        </div>
        <div className="f-label flex items-center justify-between flex-row text-sm w-full">
          <span className="flex items-center flex-row gap-1.5">
            <img src="/hero/jnet-logo.webp" alt="" className="h-[1.25em] w-[1.25em] pointer-events-none" loading="lazy" decoding="async" fetchPriority="low" />
            JNet — Pernambuco
          </span>
          <p>© 2025 - Todos os direitos reservados.</p>
        </div>
      </div>
    </div>

  )

}