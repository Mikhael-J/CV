import React from "react";
import SectionDroite from "./sectionDroite/DescriptifPersonne";
import SectionGauche from "./sectionGauche/CompetenceParcoursPersonne";

export default function Contente() {
  return (
    <React.Fragment>
      <div className="container-xxl">
        <div className="row">
          <SectionDroite />
          <SectionGauche />
        </div>
      </div>
    </React.Fragment>
  );
}
