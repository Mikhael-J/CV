import React from 'react';
import ListePerso from '../../../composant/ListePerso';

const titre: string = "Centre d'intérêt"
const item: Array<string> = [
    "Lecture: Light Novel, Manga, Manhwa",
    "Jeux: Stratégie, gestion, action, aventure"
]


function CentreInteret() {
    return (
        <div className="">
            <ListePerso titre={titre} item={item} />
        </div>
    );
}

export default CentreInteret;
