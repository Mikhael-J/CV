import React from 'react';
import ListePerso from '../../../composant/ListePerso';


const titre: string = "Savoir-faire"
const item: Array<string> = [
    "Analyser et vérifier le cahier des charges",
    "Adapter à l'environnement informatique",
    "Développer du code structuré, lisible, maintenable",
    "Tester et debugger",
    "Mettre en production"
]

function SavoirFaire() {
    return (
        <div className="" id="savoir-faire">
            <ListePerso titre={titre} items={item} />
        </div>
    );
}

export default SavoirFaire;
