import React from 'react';
import Competences from './composant/Competences';
import ExperiencesProfessionnelles from './composant/ExperiencesProfessionnelles';
import Title from './composant/Title';

function SectionGauche() {
    return (
        <div className="col-md-8 ">
            <Title />
            <Competences />
            <ExperiencesProfessionnelles />
        </div>
    );
}

export default SectionGauche;
