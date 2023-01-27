import React from 'react'
import DropdownMenuLink from '../../composant/DropdownMenuLink'


const itemsExperiencesProfessionnelles = {
    "#projet-perso": "Projet Personnel",
    "#activite-freelance": "Activité Freelance",
    "#formateur-informatique-oriente-web": "Formateur en informatique orienté web",
    "#gestion-locative": "Gestion locative (2 studios)",
    "#stage-inra": "Stage de 2 mois à L'INRA",
    "#projet-iut": "Projet de groupe (IUT)"
}


const itemsAMonPropos = {
    "#contact": "Contact",
    "#a-mon-propos": "A mon propos",
    "#savoir-faire": "Savoir faire",
    "#savoir-etre": "Savoir être",
    "#formation": "Formation",
    "#centre-interet": "Centre d'intérêt"
}

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="headerPage">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">CV</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Compétences</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#experiences-professionnelles" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Expériences professionnelles
                            </a>
                            <DropdownMenuLink dictioHrefTitles={itemsExperiencesProfessionnelles} />
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#experiences-professionnelles" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                A mon propos
                            </a>
                            <DropdownMenuLink dictioHrefTitles={itemsAMonPropos} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
