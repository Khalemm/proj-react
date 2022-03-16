import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Film from './Film';

/**
 * va chercher la liste des films mis en favoris
 * @returns la liste des favoris
 */
function Favoris() {
    let content = [];
    console.log(localStorage.length)
    for (var a = 1;a < localStorage.length;a++) {
        console.log(localStorage.getItem(a+1))
        content.push(
            <div key={a}>
                {RequeteFilm(a,localStorage.getItem(a+1))}
            </div>
        )
    }
    return (
        <div className="App">
            {content}
        </div>
    );
}

/**
 * permet d'obtenir un film via l'url envoyé
 * @param {*} key la clef de la donnée dans le local storage
 * @param {*} urlFilm l'url du film a rechercher
 * @returns le film 
 */
const RequeteFilm = (key, urlFilm) => {
    const [isLoading, setIsLoading] = useState(true);
    const [film, setFilm] = useState([]);
    useEffect(() => {
        const getFilm = () => {
            if (isLoading) {
                fetch(urlFilm, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                    .then((response) => response.json())
                    .then((data) => { setIsLoading(false); setFilm(data); console.log(data) })
                    .catch(error => console.log(error));
            }
        }
        getFilm();
    }, [urlFilm, isLoading]);
    if (isLoading) {
        return <div>Chargement...</div>;
    }
    return (
        <div>
            {film && <Film data={film} />}
            <Button onClick={deleteFav(key)}>Supprimer des favs</Button>
        </div>
    );
}

/**
 * delete des favoris
 * @param {*} key la clé du localStorage
 */
const deleteFav = (key) => {
}
export default Favoris;