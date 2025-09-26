import "./Footer.css"

export default function Footer() {

  return (

    <>
      <div id="footer" className="bg-s flex justify-center bg-[#005dfe]">
        <div className="max-w-[1000px]">
          <div>

          </div>
          <div className="flex flex-row gap-4">
            <div>
              <h1>Acesso rápido</h1>
              <ul className="flex flex-col gap-2 !mt-2">
                <li>Início</li>
                <li>Planos</li>
                <li>Dúvidas</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h1>Contatos</h1>
              <ul className="flex flex-col gap-2 !mt-2">
                <li>WhatsApp</li>
                <li>Instagram</li>
                <li>(81) 9 8888-9999</li>
                <li>jnet.contato@hotmail.com</li>
                <li>Rua X, № X</li>
              </ul>              
            </div>            
            <ul>
              
            </ul>
          </div>
        </div>
      </div>
    </>

  )

}