import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Body } from './components/Body'
import { Services } from './components/Services';
import { Contactus } from './components/Contactus';
import { Footer } from './components/Footer';
import './App.css';
import {Routes,Route, BrowserRouter as Router} from 'react-router-dom'
import { Aboutme } from './components/Aboutme';

function App() {
  return (
    <div className="App">
    <Router>
    <NavBar />
    <Body />
    <Aboutme />
    <Services/>
    <Contactus/>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
