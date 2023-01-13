import React from 'react';

interface IPropListPerso {
    titre: string;
    item: Array<string | JSX.Element>
}

function ListePerso({ titre, item }: IPropListPerso) {

    return (
        <div className="">
            <ul className="list-group">
                <li className="list-group-item bg-secondary" aria-current="true">
                    <p className="text-center">
                        {titre}
                    </p>
                </li>
                {
                    item.map((item: string | JSX.Element) => (
                        <li className="list-group-item">
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ListePerso;
