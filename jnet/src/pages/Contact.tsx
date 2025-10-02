import "./Contact.css";

import { MdEmail, MdPhone, MdWhatsapp } from "react-icons/md";

import contactImg from "../assets/images/contact.webp";

export default function Contact() {

  return (
    <div id="contact" className="bg-s flex justify-center bg-gray-100 w-full">
      <section className="flex flex-col gap-4 w-full max-w-[1000px]">
        <div className="contact-root flex flex-row gap-4">
          <div className="contact-content w-6/12">
            <div className="!mb-4">
              <h1 className="text-3xl font-semibold !mb-2">Fale conosco</h1>
              <p className="text-justify hyphens-auto !leading-[1.2rem]">Está precisando de atendimento ou suporte? Nossa equipe está pronta para ajudar você agora mesmo! Escolha onde prefere ser atendido.</p>
            </div>
            <div className="c-list flex">
              <div>
                <ul className="flex flex-col gap-4">
                  <li><a href="" target="_blank" rel="noreferrer" className="contact-l flex items-center gap-2"><MdWhatsapp/><span className="font-medium">WhatsApp</span></a></li>
                  <li><a href="" target="_blank" rel="noreferrer" className="contact-l flex items-center gap-2"><MdPhone/><span className="font-medium">(81) 9 8888-9999</span></a></li>
                  <li><a href="" target="_blank" rel="noreferrer" className="contact-l flex items-center gap-2"><MdEmail/><span className="font-medium">jnet.contato@hotmail.com</span></a></li>
                  {/* <li><a href="" target="_blank" rel="noreferrer" className="contact-l flex items-center gap-2"><MdLocationOn/><span className="font-medium">Rua X, № X</span></a></li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="c-content-img self-center w-6/12">
            <img src={contactImg} alt="#" loading="lazy" decoding="async" fetchPriority="low" className="c-img w-full object-cover aspect-square pointer-events-none"/>
          </div>
        </div>
      </section>
    </div>
  )

}