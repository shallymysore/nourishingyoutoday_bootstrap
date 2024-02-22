import React, {useState} from 'react'
import {
    BrowserRouter as Router
  } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Body } from './components/Body'
import { Services } from './components/Services';
import { Contactus } from './components/Contactus';
import { Footer } from './components/Footer';
import {SideBar} from './components/SideBar';

export const Homepage = () => {
    const [isopen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isopen)
    };


  return (
    <>
    <Router>
   
    </Router>
    </>
  )
}


/*<Sidebar isopen={isopen} toggle = {toggle}     />*/