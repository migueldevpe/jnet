import "./Contact.css";

import { MdPhone, MdWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";

import contactImg from "../assets/images/contactGirl.webp";
import useMessage from "../hooks/useMessage";

export default function Contact() {

  return (

    <div id="contact" className="bg-s flex justify-center bg-[var(--bg-1)] text-[var(--text-color)] transition-colors duration-300 w-full">
      <section className="flex flex-col gap-4 w-full max-w-[1000px]">
        <div className="contact-root flex flex-row gap-8">
          <div className="contact-content w-6/12">
            <div className="!mb-4">
              <h1 className="text-3xl font-semibold !mb-2">Fale conosco</h1>
              <p className="text-justify hyphens-auto !leading-[1.2rem]">Está precisando de atendimento ou suporte? Nossa equipe está pronta para ajudar você agora mesmo! Escolha onde prefere ser atendido.</p>
            </div>
            <div className="c-list flex">
              <div>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a href={`https://api.whatsapp.com/send/?phone=5581984931028&text=${encodeURIComponent(
                      `Olá, ${useMessage()}!
                      Gostaria de ser atendido, poderia me ajudar?`.replace(/^(?!\s*$)\s+/gm, ''))}`
                    } target="_blank" rel="noopener noreferrer" className="contact-l flex items-center gap-2">
                      <MdWhatsapp />
                      <span className="font-medium">WhatsApp</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/jnetultrafibra" target="_blank" rel="noopener noreferrer" className="contact-l flex items-center gap-2">
                      <FaInstagram />
                      <span className="font-medium">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+5581984931028" target="_blank" rel="noopener noreferrer" className="contact-l flex items-center gap-2">
                      <MdPhone />
                      <span className="font-medium">(81) 9 8493-1028</span>
                    </a>
                  </li>
                  {/* <li>
                    <a href="" target="_blank" rel="noopener noreferrer" className="contact-l flex items-center gap-2">
                      <MdLocationOn/>
                      <span className="font-medium">Rua X, № X</span>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <picture className="c-content-img flex w-6/12">
            {/* <source srcSet="#" media="(max-width: 768px)"/> */}
            <img src={contactImg} alt="#" loading="lazy" decoding="async" fetchPriority="low" className="h-full w-full min-w-[375px] object-cover aspect-[1024/960] pointer-events-none"/>
          </picture>
        </div>
      </section>
    </div>

  )

}