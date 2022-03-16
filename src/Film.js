import React from "react";

/**
 * affiches le film sur la page 
 * @param {*} data les données du film
 * @returns le film
 */
const Film = ({ data }) => {
    return (
        <div>
            <h1>{data.original_title}</h1>
            <p>Synopsys: {data.overview}</p>
        </div>
    )
}

export default Film;