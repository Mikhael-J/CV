import React from 'react';
import ListePerso from '../../../composant/ListePerso';

const titre: string = "Formations"
const item: Array<string> = [
    "2016/2018 Licence 1 - 2 informatique",
    "2014/2015 1-2ème année DUT Génie électrique et informatique industrielle"
]



function Formation() {
    return (
        <div className="" id="formation">
            <ListePerso titre={titre} items={item} />
        </div>
    );
}

export default Formation;
