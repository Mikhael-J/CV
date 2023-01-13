import React from 'react';
import ListePerso from '../../../composant/ListePerso';

const titre: string = "Compétences"
const item: Array<string> = [
    "Stack: React, React Native, JQuery, Webpack, CircleCI, Git, Node.js, Selenium, Docker, Bootstrap",
    "Programmation en langage: TypeScript, Python 3.10, HTML, script Bash, CI/CD, C, VBA",
    "Système d'exploitation: Debian/Ubuntu, Windows 10",
    "Electronique: Arduino, VHDL",
    "Langue: Anglais professionnel"
]


function Competences() {
    return (
        <div className="">
            <ListePerso titre={titre} item={item} />
        </div>
    );
}

export default Competences;
