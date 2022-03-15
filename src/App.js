import './App.css';
import ApiCall from './ApiCall';
import ListeCarte from './ListeCarte';
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
              <Link to="ApiCall">api call</Link>
            </li>
            <li>
              <Link to="ListeCarte">liste</Link>
            </li>
          </ul>
          <hr />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="ListeCarte" element={<ListeCarte/>}/>
            <Route path="ApiCall" element={<ApiCall/>}/>
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
