import React from 'react';
import DListe from '../../../../composant/DListe';

const Projet = {
    "Société": "GEEK SCHOOL",
    "Activité": <>Enseignement en présentiel (cours magistraux et TP), niveau collège et lycée.<br />Participation à l'évolution des modules enseignés</>,
    "Notions abordées": "Html5, CSS, JavaScript (jQuery), Python (selenium), Scratch",
    "Projets": "Démineur, hunter, compteur de click, scraper"
}

function FormateurInformatiqueOrienteWeb() {
    return (
        <div className="list-group">
            <div className="d-flex w-100 justify-content-between">
                <h3 className="mb-1 text-decoration-underline">Formateur en informatique orienté web</h3>
                <div className="badge text-wrap fs-6" style={{ color: "black" }}>2017/2021</div>
            </div>
            <hr className="hrSeparatorDouble"></hr>
            <DListe dictioTitlesAndDescription={Projet} displayHr={false} />
        </div>
    );
}

export default FormateurInformatiqueOrienteWeb;
