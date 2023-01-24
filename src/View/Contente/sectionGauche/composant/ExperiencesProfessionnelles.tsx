import React from 'react';
import ListePerso from '../../../composant/ListePerso';
import ActiviteFreelance from './itemExperiencePro/ActiviteFreelance';
import FormateurInformatiqueOrienteWeb from './itemExperiencePro/FormateurInformatiqueOrienteWeb ';
import GestionLocative from './itemExperiencePro/GestionLocative';
import ProjetIUT from './itemExperiencePro/ProjetIUT';
import ProjetPerso from './itemExperiencePro/ProjetPerso';
import StageINRA from './itemExperiencePro/StageINRA';



const titre: string = "Expériences professionnelles"
const item: Array<string | JSX.Element> = [
    <ProjetPerso />,
    <ActiviteFreelance />,
    <FormateurInformatiqueOrienteWeb />,
    <GestionLocative />,
    <StageINRA />,
    <ProjetIUT />
]



function ExperiencesProfessionnelles() {
    return (
        <div className="">
            <ListePerso titre={titre} items={item} />
        </div>
    );
}


export default ExperiencesProfessionnelles;
