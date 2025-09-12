import "./Doubts.css";
import AccordionGroup from "../components/accordion/AccordionGroups.tsx";

export default function Doubts() {

  return (
    <div id="doubts" className="bg-s flex justify-center w-full">
      <section className="flex flex-col gap-12 w-full max-w-[1000px]">
      <div>
        <h1 className="text-3xl font-semibold !mb-2">Ainda há dúvidas?</h1>
        <p className="text-justify !leading-4.75">Se você ainda tem alguma pergunta ou precisa de mais detalhes sobre nossos serviços, estamos aqui para ajudar. Verifique se a sua dúvida está logo abaixo, caso não, nossa equipe está pronta para esclarecer qualquer ponto e garantir que você se sinta seguro e bem informado antes de tomar qualquer decisão. Não hesite em <a className="link text-[#0066cc]" title="Clique para entrar em contato." href="#" target="_blank" rel="noreferrer">entrar em contato</a> conosco!</p>
      </div>
      <div className="accordion-content flex items-center justify-center w-full">
        <AccordionGroup/>
      </div>
      </section>
    </div>
  )

}