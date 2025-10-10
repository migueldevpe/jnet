//import { useState } from "react";
import Accordion from "../accordion/Accordion.tsx";

import { useAccordionActive } from "../../hooks/useAccordionActive.ts";

export default function AccordionGroup() {

  const accordions = [
    { title: "Como funciona o serviço?",  
      children: (
        <>
          <h2>Vamos lá.</h2>
          <p>Nosso serviço é totalmente online e foi desenvolvido para simplificar sua rotina. Após escolher o plano ideal, você terá acesso imediato a todas as funcionalidades, podendo gerenciar suas atividades de forma intuitiva. Além disso, nossa plataforma é constantemente atualizada para oferecer a melhor experiência possível, garantindo rapidez, segurança e praticidade no seu dia a dia.</p>
        </>
      )
    },
    { title: "Quais formas de pagamento são aceitas?", 
      children: (
        <>
          <h2>Não se preocupe.</h2>
          <p>Aceitamos cartões de crédito, débito, boleto bancário e transferências. Todos os pagamentos são processados de forma segura, utilizando criptografia de ponta. Além disso, você recebe confirmação imediata e acesso automático ao serviço após a aprovação do pagamento.</p>       
        </>
      )
    },
    { title: "Posso cancelar ou receber reembolso?", 
      children: (
        <>
          <h2>Sim!</h2>
          <p>Você pode cancelar seu plano a qualquer momento, diretamente pela plataforma ou entrando em contato com o suporte. Para solicitações de reembolso, seguimos nossa política transparente, garantindo que você receba orientação clara sobre prazos e condições. Nosso objetivo é que você tenha total liberdade e confiança ao contratar nossos serviços.</p>
        </>
      )
    },
    { title: "Meus dados estão seguros?", 
      children: (
        <>
          <h2>Claro que sim!</h2>
          <p>A segurança das suas informações é nossa prioridade. Utilizamos criptografia avançada e protocolos rigorosos para proteger todos os dados inseridos na plataforma. Seus dados pessoais e financeiros não são compartilhados com terceiros, e você pode gerenciar suas informações a qualquer momento com total transparência.</p> 
        </>
      )
    },
  ];

  const { openStates, toggleAccordion } = useAccordionActive(accordions.length, 2);

  return (

    <>
      {accordions.map(( acc, index ) => (
        <Accordion
          key={index}
          title={acc.title}
          isOpen={openStates[index]}
          onToggle={() => toggleAccordion(index)}
        >
          {acc.children}
        </Accordion>
      ))}
    </>
    
  )

}