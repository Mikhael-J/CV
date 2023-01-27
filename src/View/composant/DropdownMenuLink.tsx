import React, { useEffect } from 'react'


interface IPropListItems {
    dictioHrefTitles: { [key: string]: string};
}

export default function DropdownMenuLink({dictioHrefTitles}: IPropListItems) {
    return (
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            {Object.entries(dictioHrefTitles).map(([href, titles]) => (
                <li key={href}>
                    <a className="dropdown-item" href={href} >
                        {titles}
                    </a>
                </li>
            ))}
        </ul>
    )
}
