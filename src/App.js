import './App.css';
import Favoris from './Favoris';
import RandomFilm from './RandomFilm';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="Favoris">film favoris</Link>
            </li>
            <li>
              <Link to="RandomFilm">random film</Link>
            </li>
          </ul>
          <hr />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="RandomFilm" element={<RandomFilm/>}/>
            <Route path="Favoris" element={<Favoris/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return(<div><h2>home</h2></div>)
}
export default App;
