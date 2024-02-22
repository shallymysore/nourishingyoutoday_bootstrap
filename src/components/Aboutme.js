import React  from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import photo from '../images/flower.jpeg'
import './Aboutme.css'


export const Aboutme = ()=> {
  
    return(
        <section className="aboutme" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1><span className="wrap">About me</span></h1>
                        <p className='description'>
                        Unlocking the potential of your plate and the power of your body. 
          At our nutrition counseling center, we believe in nourishing both your body and your lifestyle. 
          Through evidence-based guidance and personalized support, 
          we'll explore the art of balanced eating, mindful nourishment, 
          and sustainable wellness practices. 
          Together, we'll create a roadmap to vibrant health, one delicious meal and empowering choice at a time. 
          Join us as we redefine your relationship with food and embrace a journey towards vitality and fulfillment.
                        </p>
                        <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
            quaerat voluptatem.
          </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={photo} alt='Header image'/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}