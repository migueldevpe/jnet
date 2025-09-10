import { useState, useEffect, useRef } from "react";

export function useAccordionActive(count: number, maxOpen = 2) {
  const [openStates, setOpenStates] = useState(Array(count).fill(false));
  const prevStates = useRef(openStates);
  const isAnimating = useRef(Array(count).fill(false));

  const toggleAccordion = (index: number) => {
    if (isAnimating.current[index]) return;

    setOpenStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];

      const currentlyOpen = newStates.filter(Boolean).length;
      if (currentlyOpen > maxOpen) {
        const firstOpenI = newStates.findIndex((v, i) => v && i !== index);
        if (firstOpenI !== -1) newStates[firstOpenI] = false;
      }

      return newStates;
    });
  };

  useEffect(() => {
    openStates.forEach((isOpen, i) => {
      const accordionRoot = document.querySelectorAll(".accordion-root")[i] as HTMLElement;
      if (!accordionRoot) return;

      const wasOpen = prevStates.current[i];

      if (isOpen && !wasOpen) {
        accordionRoot.classList.add("active");
        accordionRoot.classList.remove("closing");
      }

      if (!isOpen && wasOpen) {
        isAnimating.current[i] = true;
        accordionRoot.classList.add("closing");
        void accordionRoot.offsetWidth;

        setTimeout(() => {
          accordionRoot.classList.remove("closing");
          accordionRoot.classList.remove("active");
          isAnimating.current[i] = false;
        }, 650);
      }
    });

    prevStates.current = openStates;
  }, [openStates]);

  return { openStates, toggleAccordion };
}