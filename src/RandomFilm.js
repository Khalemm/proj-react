import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Film from './Film';

/**
 * va placer dans la liste des favoris le film voulu
 * @param {*} url l'url du film
 */
const setFavoris = (url) => {
    var increment = parseInt(localStorage.getItem(1)) + 1
    localStorage.setItem(1, increment)
    localStorage.setItem(localStorage.getItem(1), url)
}

/**
 * va obtenir un film aléatoire. Sachant qu'il n'y a pas de requete API pour, je créée manuellement une ID
 * aléatoire a placer dans l'URL. (je n'ai pas eu le temps de controller quand l'url sort un 404)
 * @returns un film aléatoire
 */
const RandomFilm = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [film, setFilm] = useState([]);
    const [url, setUrl] = useState();
    //obtient un nouveau film aléatoire
    const newRandom = () =>{
        setIsLoading(true)
    }
    useEffect(() => {
        const getFilm = () => {
            if (isLoading) {
                //créées une ID généré aléatoirement
                const id = Math.trunc(Math.random() * (2000 - 1) + 1);
                const filmURL = "https://api.themoviedb.org/3/movie/" + id + "?api_key=3dceec64c036d3bb5cc3708d099863fa";
                console.log(filmURL);
                fetch(filmURL, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setIsLoading(false);
                        setFilm(data);
                        setUrl(filmURL);
                        console.log(data)
                    })
                    .catch(error => console.log(error));
            }
        }
        getFilm();
    }, [isLoading]);
    if (isLoading) {
        return <div>Chargement...</div>;
    }
    return (
        <div>
            {film && <Film data={film} />}
            <Button onClick={function (e) { setFavoris(url) }}>sauvegarder dans les favoris</Button>
            <br/>
            <Button onClick={function (e) { newRandom() }}>nouveau film aléatoire</Button>
        </div>
    );
}
export default RandomFilm;