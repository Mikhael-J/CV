import React from "react";
import DescriptifPersonne from "./sectionDroite/DescriptifPersonne";
import CompetenceParcoursPersonne from "./sectionGauche/CompetenceParcoursPersonne";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Fab from "../composant/Fab";


export default function Contente() {
  return (
    <React.Fragment>
      <Fab/>
      <Header/>
      <div className="container-xxl pt-2">
        <div className="row">
          <DescriptifPersonne />
          <CompetenceParcoursPersonne />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
