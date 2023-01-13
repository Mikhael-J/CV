import React from 'react';
import ActiviteFreelance from './itemExperiencePro/ActiviteFreelance';
import FormateurInformatiqueOrienteWeb from './itemExperiencePro/FormateurInformatiqueOrienteWeb ';
import GestionLocative from './itemExperiencePro/GestionLocative';
import ProjetIUT from './itemExperiencePro/ProjetIUT';
import ProjetPerso from './itemExperiencePro/ProjetPerso';
import StageINRA from './itemExperiencePro/StageINRA';

function ExperiencesProfessionnelles() {
    return (
        <div className="border border-primary">
            <ul className="list-group">
                <li className="list-group-item bg-secondary" aria-current="true">
                    Expériences professionnelles
                </li>
                <li className="list-group-item">
                    <ProjetPerso /> 
                </li>
                <li className="list-group-item">
                    <ActiviteFreelance />
                </li>
                <li className="list-group-item">
                    <FormateurInformatiqueOrienteWeb />
                </li>
                <li className="list-group-item">
                    <GestionLocative />
                </li>
                <li className="list-group-item ">
                    <StageINRA />
                </li>
                <li className="list-group-item ">
                    <ProjetIUT />
                </li>
            </ul>
        </div>
    );
}


export default ExperiencesProfessionnelles;
