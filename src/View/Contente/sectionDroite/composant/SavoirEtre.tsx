import React from 'react';
import ListePerso from '../../../composant/ListePerso';


const titre: string = "Savoir être"
const item: Array<string> = [
    "À l'écoute, constructif, je sais prendre ma place dans une équipe de développement.",
    "Patient et persévérant, je sais chercher des solutions pour un code propre et efficace",
    "Très autonome",
    "Pédagogue",
    "Fiable et adaptable"
]


function SavoirEtre() {
    return (
        <div className="">
            <ListePerso titre={titre} items={item} />
        </div>
    );
}

export default SavoirEtre;
