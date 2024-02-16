import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Body } from './components/Body'
import { Services } from './components/Services';
import { Contactus } from './components/Contactus';
import { Footer } from './components/Footer';
import './App.css';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <Services/>
      <Contactus/>
      <Footer/>

    </div>
  );
}

export default App;
