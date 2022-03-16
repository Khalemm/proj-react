import './App.css';
import Favoris from './Favoris';
import RandomFilm from './RandomFilm';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#">themoviedb API</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="RandomFilm">random film</Link></Nav.Link>
              <Nav.Link><Link to="Favoris">film favoris</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="RandomFilm" element={<RandomFilm />} />
          <Route path="Favoris" element={<Favoris />} />
        </Routes>
      </Router >
    </div >
  );
}

function Home() {
  localStorage.setItem(1, 1)
  return (<div><h2>Obtention de films de manière aléatoire !</h2></div>)
}
export default App;
