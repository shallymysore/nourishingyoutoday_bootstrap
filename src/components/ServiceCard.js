import React from 'react';
import { Col } from "react-bootstrap";
import './Services.css'
import { Link } from "react-router-dom";

export const ServiceCard = ({ title, description, imgUrl,button,link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="service-imgbx">
        <img src={imgUrl} alt="services" />
        <div className="service-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <Link to={link} className='btn btn-dark'>{button}</Link>
        </div>
      </div>
    </Col>
  )
}


/*target="_blank" rel="noopener noreferrer"*/