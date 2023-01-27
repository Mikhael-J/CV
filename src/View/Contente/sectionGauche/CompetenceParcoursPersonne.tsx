import React from 'react';
import Competences from './composant/Competences';
import ExperiencesProfessionnelles from './composant/ExperiencesProfessionnelles';
import Title from './composant/Title';

function CompetenceParcoursPersonne() {
    return (
        <div className="col-md-8 " id="competence-parcours-personne">
            <Title />
            <Competences />
            <ExperiencesProfessionnelles />
        </div>
    );
}

export default CompetenceParcoursPersonne;
