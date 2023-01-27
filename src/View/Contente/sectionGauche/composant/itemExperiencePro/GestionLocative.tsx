import React from 'react';
import DListe from '../../../../composant/DListe';

const Projet = {
    "Activité": "Mise aux normes de studios par rapport au règlement sanitaire départemental",
    "Réalisation de travaux ": "électricité, plomberie, travaux de toiture, peinture, ameublement"
}
 
function GestionLocative() {
    return (
        <div className="list-group" id="gestion-locative">
            <div className="d-flex w-100 justify-content-between">
                <h3 className="mb-1 text-decoration-underline">Gestion locative (2 studios)</h3>
                <div className="badge text-wrap fs-6" style={{ color: "black" }}>Depuis 2016</div>
            </div>
            <hr className="hrSeparatorDouble"></hr>
            <DListe dictioTitlesAndDescription={Projet} displayHr={false} />
        </div>
    );
}

export default GestionLocative;
