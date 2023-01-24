import React from 'react';

interface IPropListPerso {
    titre: string;
    items: Array<string | JSX.Element>
}

/**
 * 
 * @param titre titre de la liste
 * @param items items de la liste
 * @returns 
 */
function ListePerso({ titre, items }: IPropListPerso) {
    let cpt: number = 0;
    return (
        <div className="">
            <ul className="list-group">
                <li className="list-group-item bg-secondary" aria-current="true">
                    <p className="text-center">
                        {titre}
                    </p>
                </li>
                {
                    items.map((item: string | JSX.Element) => (

                        <li className="list-group-item" key={cpt++}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ListePerso;
