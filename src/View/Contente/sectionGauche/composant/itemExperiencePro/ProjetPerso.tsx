import React from 'react';
import DListe from '../../../../composant/DListe';


const Projet1 = {
    "Application mobile": "Une application responsive web qui évalue la consommation électrique d'un ménage",
    "Technologies utilisées": "React, React Native, React Native Paper, @mui, CSS, Expo"
}
const Projet2 = {
    "Messagerie": "Une messagerie instantané",
    "Technologies utilisées": "React, React Native, React Native Paper, @mui, CSS, Expo"
}
const Projet3 = {
    "Problème d'optimisation": "Résolution de problème d'optimisation à l'aide de l'algorithme backtracking",
    "Problèmes": "Peaceable Armies of Queens [1999, Robert Bosch], Séquence magique",
    "Technologies utilisées": "Python 3.10, Makefile, Github"
}
const Projet4 = {
    "Script": "Script traitement de fichier pour le renommage par lot",
    "Technologies utilisées": "Python 3.10, test unitaire, Github"
}
function ProjetPerso() {
    return (
        <div className="list-group">
            <div className="d-flex w-100 justify-content-between">
                <h3 className="mb-1 text-decoration-underline">Projet Personnel</h3>
            </div>
            <hr className="hrSeparatorDouble"></hr>
            <DListe dictioTitlesAndDescription={Projet1} displayHr={true} />
            <DListe dictioTitlesAndDescription={Projet2} displayHr={true} />
            <DListe dictioTitlesAndDescription={Projet3} displayHr={true} />
            <DListe dictioTitlesAndDescription={Projet4} displayHr={false} />
        </div>
    );
}

export default ProjetPerso;
