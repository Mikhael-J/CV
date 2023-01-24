import React from 'react';
import ListePerso from '../../../composant/ListePerso';

const titre: string = "A mon propos"
const item: Array<string> = [
    "Développeur informatique niveau bac+2 maîtrisant l'anglais technique.",
    "Passionné par toutes les problématiques liées au développement front-end,",
    "Curieux, tech-challenger, très autonome, mon objectif est de prendre part à des projets de développement web dans un contexte innovant qui me permettra de monter en compétences techniquement et d'évoluer au sein d'une structure motivante.",
    "J'ai une expérience d'enseignement du développement web."
]

function AMonPropos() {
    return (
        <div className="">
            <ListePerso titre={titre} items={item}  />
        </div>
    );
}

export default AMonPropos;
