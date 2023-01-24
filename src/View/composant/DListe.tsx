import React from 'react'

interface IPropDList {
    dictioTitlesAndDescription: { [title: string]: string | JSX.Element };
    displayHr: boolean;
}

/**
 * 
 * @param titles liste des titres 
 * @param titlesDescription liste des description associé au titre
 * @returns 
 */
export default function DListe({ dictioTitlesAndDescription, displayHr }: IPropDList) {
    return (
        <dl className="row">
            {
                Object.entries(dictioTitlesAndDescription).map(([key, value]) =>
                    <React.Fragment key={key}>
                        <dt className="col-sm-3" >
                            <p>
                                {key}
                            </p>
                        </dt>
                        <dd className="col-sm-9">
                            <p>
                                {value}
                            </p>
                        </dd>
                    </React.Fragment>
                )
            }
            {(displayHr) ? <hr className="hrSeparatorSimple"></hr> : <></>}
        </dl>
    )
}
