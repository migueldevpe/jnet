import "./Doubts.css";

import AccordionGroup from "../components/accordion/AccordionGroups.tsx";

export default function Doubts() {

  return (

    <section id="doubts" className="bg-s flex justify-center w-full bg-[var(--bg-1)] text-[var(--text-color)] transition-colors duration-300">
      <div className="flex flex-col gap-10 w-full max-w-[1000px]">
      <div>
        <h1 className="text-3xl font-semibold !mb-2">Ainda há dúvidas?</h1>
        <p className="text-justify hyphens-auto !leading-4.75">Se você ainda tem alguma pergunta ou precisa de mais detalhes sobre nossos serviços, estamos aqui para ajudar. Verifique se a sua dúvida está logo abaixo, caso não, nossa equipe está pronta para esclarecer qualquer ponto e garantir que você se sinta seguro e bem informado antes de tomar qualquer decisão. Não hesite em <a className="link text-[var(--link)] transition-colors duration-300" title="Clique para entrar em contato." href="#contact">entrar em contato</a> conosco!</p>
      </div>
      <div className="accordion-content flex items-center justify-center w-full">
        <AccordionGroup/>
      </div>
      </div>
    </section>
    
  )

}