import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function getRandom(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}
const setFavoris = (id, url) => {
    localStorage.setItem(id, url)
}

const Film = ({ data }) => {
    console.log(data);
    return (
        <div>
            <h1>{data.original_title}</h1>
            <p>Synopsys: {data.overview}</p>
        </div>
    )
}

const RandomFilm = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [film, setFilm] = useState([]);
    const id = getRandom(1, 1000)
    const url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=3dceec64c036d3bb5cc3708d099863fa";
    
    useEffect(() => {
        const getFilm = () => {
            if(isLoading){
                fetch(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {setIsLoading(false);setFilm(data);console.log(data)})
                    .catch(error => console.log(error));
            }
        }
        getFilm();
    }, [url,isLoading]);
    if (isLoading) {
        return <div>Chargement...</div>;
    }
    return (
        <div>
            {film && <Film data={film} />}
            <Button onClick={setFavoris(id, url)}>save</Button>
        </div>
    );
}
export default RandomFilm;