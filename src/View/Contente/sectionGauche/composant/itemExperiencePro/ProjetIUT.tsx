import React from 'react';
import DListe from '../../../../composant/DListe';

const Projet = {
    "Projet": "Robot suiveur de ligne",
    "Activité": "Conception électronique du robot et programmation en Arduino et VHDL"
}

function ProjetIUT() {
    return (
        <div className="list-group">
            <div className="d-flex w-100 justify-content-between">
                <h3 className="mb-1 text-decoration-underline">Projet de groupe (IUT)</h3>
                <div className="badge text-wrap fs-6" style={{ color: "black" }}>2014/2015</div>
            </div>
            <hr className="hrSeparatorDouble"></hr>
            <DListe dictioTitlesAndDescription={Projet} displayHr={false} />
        </div>
    );
}

export default ProjetIUT;
