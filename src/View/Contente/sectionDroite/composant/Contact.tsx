import React from 'react';
import ListePerso from '../../../composant/ListePerso';

const titre: string = "CONTACT"
const item: Array<string | JSX.Element> = [
    "1122 Route de Grasse, 06600 Antibes",
    "jankee.mikhael@gmail.com",
    <a href='https://www.linkedin.com/in/mikhaeljankee/'>linkedin</a>,
    <a href='https://github.com/Mikhael-J'>github</a>
]



function Contact() {
    return (
        <div className="border">
            <ListePerso titre={titre} item={item} />
        </div>
    );
}

export default Contact;
