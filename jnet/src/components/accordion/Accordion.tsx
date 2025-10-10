import "./Accordion.css";

import { useState, useEffect } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function Accordion({ title, children, isOpen, onToggle }: AccordionProps ) {
  const [delayedOpen, setDelayedOpen] = useState(isOpen);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedOpen(isOpen);
    }, 175);
    return () => clearTimeout(timer);
  }, [isOpen]);

  return (

    <div className={`accordion-root w-full ${isOpen ? "active" : ""}`}>
      <button type="button" className="accordion-header flex items-center justify-between gap-2" onClick={onToggle} aria-expanded={isOpen}>
        <span className="text-start">{title}</span>
        <span className="accordion-open">
          {delayedOpen ? <FiMinus /> : <FiPlus />}
          </span>
      </button>
      <div className="accordion-body flex flex-col">
        {children}
      </div>
    </div>

  )

}