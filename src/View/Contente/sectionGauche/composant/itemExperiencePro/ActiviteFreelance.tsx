import React from 'react';
import DListe from '../../../../composant/DListe';

const Projet = {
    "Projet": "Développement de macros",
    "Domaine d'application": "Finance",
    "Technologies utilisées": "VBA, Excel"
}

function ActiviteFreelance() {
    return (
        <div className="list-group" id="activite-freelance">
            <div className="d-flex w-100 justify-content-between">
                <h3 className="mb-1 text-decoration-underline">Activité Freelance</h3>
                <div className="badge text-wrap fs-6" style={{color: "black"}}>Depuis 2022</div>
            </div>
            <hr className="hrSeparatorDouble"></hr>
            <DListe dictioTitlesAndDescription={Projet} displayHr={false} />
        </div>
    );
}

export default ActiviteFreelance;
