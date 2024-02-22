import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import './SideBar.css';

export const SideBar = ({ isOpen, toggle }) => {
  return (
    <div className={isOpen ? 'sidebar-container open' : 'sidebar-container'} onClick={toggle}>
      <div className="icon" onClick={toggle}>
        <FaTimes />
      </div>
      <div className="wrapper">
        <ul className="sidebar-menu">
          <li>
            <LinkScroll to="about" onClick={toggle}>
              About Me
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="recipes" onClick={toggle}>
              Recipes
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="contact" onClick={toggle}>
              Contact Us
            </LinkScroll>
          </li>
        </ul>
        <div className="btn-wrap">
          <LinkRouter to="/signIn" className="sidebar-route">
            SignIn
          </LinkRouter>
        </div>
      </div>
    </div>
  );
};
