import React from 'react';
import DListe from '../../../../composant/DListe';

const Projet = {
    "Projet": "Réorganisation d'un réseau informatique du centre de Marseille",
    "Activité": "Maquettage, plan d'adressage, configuration switch"
}

function StageINRA() {
    return (
        <div className="list-group">
            <div className="d-flex w-100 justify-content-between">
                <h3 className="mb-1 text-decoration-underline">Stage de 2 mois à L'INRA</h3>
                <div className="badge text-wrap fs-6" style={{ color: "black" }}>2015</div>
            </div>
            <hr className="hrSeparatorDouble"></hr>
            <DListe dictioTitlesAndDescription={Projet} displayHr={false} />
        </div>
    );
}

export default StageINRA;
