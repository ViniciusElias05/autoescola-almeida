import React from "react";
import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  tags: ["autodocs"],
  component: Accordion
};

export const usage = () => (
  <>
    <Accordion title="Como eu renovo a minha CNH?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, tenetur tempora eius at saepe labore, unde culpa, et consectetur facere nobis eveniet. Quo nostrum esse distinctio illum reiciendis, consequatur odit.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, tenetur tempora eius at saepe labore, unde culpa, et consectetur facere nobis eveniet. Quo nostrum esse distinctio illum reiciendis, consequatur odit.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, tenetur tempora eius at saepe labore, unde culpa, et consectetur facere nobis eveniet. Quo nostrum esse distinctio illum reiciendis, consequatur odit.
    </Accordion>
  </>
);

export const WithGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo a minha CNH?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, tenetur tempora eius at saepe labore, unde culpa, et consectetur facere nobis eveniet. Quo nostrum esse distinctio illum reiciendis, consequatur odit.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, tenetur tempora eius at saepe labore, unde culpa, et consectetur facere nobis eveniet. Quo nostrum esse distinctio illum reiciendis, consequatur odit.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, tenetur tempora eius at saepe labore, unde culpa, et consectetur facere nobis eveniet. Quo nostrum esse distinctio illum reiciendis, consequatur odit.
    </Accordion>
  </AccordionGroup>
);

