<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Filmlist-API</h3>

  <p align="center">
    une API pour générer aléatoirement des synopsys de films!
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table des matières</summary>
  <ol>
    <li>
      <a href="#about-the-project">a propos</a>
      <ul>
        <li><a href="#built-with">réalisé avec </a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">commencer</a>
      <ul>
        <li><a href="#prerequisites">prérequis</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## a propos

[![Product Name Screen Shot][product-screenshot]](https://www.mycrawfordportal.com/wp-content/uploads/2021/07/best-movies-1614634680.jpg)

voici un super projet git qui permet de faire du requettage API via https://api.themoviedb.org/3/
on va récupérer aléatoirement des films via cette API, et les gérer dans une liste de favoris

<p align="right">(<a href="#top">retourner en haut</a>)</p>



### réalisé avec 

réalisé avec react js + bootstrap

* [React.js](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com)

<p align="right">(<a href="#top">retourner en haut</a>)</p>



<!-- GETTING STARTED -->
## commencer

voici les étapes a suivre :

### prérequis

la dernière version de npm
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Obtenez une clé API a [https://api.themoviedb.org](https://api.themoviedb.org)
2. Clone the repo
   ```sh
   git clone https://github.com/Khalemm/proj-react.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Entrez la clef API dans `RandomFilm.js` ligne 33
   ```js
   const filmURL = "https://api.themoviedb.org/3/movie/" + id + "?api_key=";
   ```

<p align="right">(<a href="#top">retourner en haut</a>)</p>


