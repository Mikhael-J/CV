import React from 'react';
import AMonPropos from './composant/AMonPropos';
import CentreInteret from './composant/CentreInteret';
import Contact from './composant/Contact';
import Formation from './composant/Formation';
import Name from './composant/Name';
import SavoirEtre from './composant/SavoirEtre';
import SavoirFaire from './composant/SavoirFaire';

function DescriptifPersonne() {
    return (
        <div className='col-md-4' id="descriptif-personne">
            <Name />
            <Contact />
            <AMonPropos />
            <SavoirFaire />
            <SavoirEtre />
            <Formation />
            <CentreInteret />
        </div>
    );
}

export default DescriptifPersonne;
