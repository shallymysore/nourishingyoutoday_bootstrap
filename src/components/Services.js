import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ServiceCard } from "./ServiceCard";
import diet from '../images/service2.jpg'
import wellness from '../images/service1.jpg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Services = () => {

    const services = [
      {
        title: "Weight Loss and Management",
        description: "Help with losing weight and Maintence",
        imgUrl: diet,
      },
      {
        title: "Wellness",
        description: "Maintaining Healthy Lifestyle",
        imgUrl: wellness,
      },
      
    ];
  
    return (
        <>
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce": ""}>
                  <h2>Services</h2>
                        <Row>
                          {
                            services.map((service, index) => {
                              return (
                                <ServiceCard
                                  key={index}
                                  {...service}
                                  />
                              )
                            })
                          }
                        </Row>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        </>
    )
  }