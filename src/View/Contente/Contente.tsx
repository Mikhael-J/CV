import React from "react";
import SectionDroite from "./sectionDroite/SectionDroite";
import SectionGauche from "./sectionGauche/SectionGauche";

export default function Contente() {
  return (
    <React.Fragment>
      <SectionDroite />
      <SectionGauche />
    </React.Fragment>
  );
}
