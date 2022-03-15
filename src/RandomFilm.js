import React from 'react';
import { Button } from 'react-bootstrap';

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

const getFilm = async() => {
    const id = getRandom(1,6000)
    const url = "https://api.themoviedb.org/3/movie/"+ id +"?api_key=3dceec64c036d3bb5cc3708d099863fa";
    const response = await fetch(url, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }});
    const json = await response.json();
    console.log(json);
    return (
        <div>
            <p>{json.original_title}</p>
            <Button onClick={setFavoris(id,url)}>save</Button>
        </div>
    );
}

const setFavoris = (id,url) => {
    localStorage.setItem(id,url)
}

function RandomFilm() {
    return (
        <div className="App">
            {getFilm()}
        </div>
    );
}
export default RandomFilm;