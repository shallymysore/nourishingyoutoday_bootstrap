import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ServiceCard } from "./ServiceCard";
import diet from '../images/weight_maintenance.png'
import wellness from '../images/calmed.png'
import sport from '../images/drinking_healthy.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Services.css'

export const Services = () => {

    const services = [
      {
        title: "Weight Loss and Management",
        description: "Help with losing weight and Maintence",
        imgUrl: diet,
        button: "Read More",
        link: '/services/weight-management',
      },
      {
        title: "Wellness",
        description: "Maintaining Healthy Lifestyle",
        imgUrl: wellness,
        button: "Read More",
        link: '/services/wellness-nutrition',
      },
      {
        title: "Sports Nutrition",
        description: "Maintaining Active Lifestyle",
        imgUrl: sport,
        button: "Read More",
        link: '/services/sports-nutrition',
      },
    ];
  
    return (
        <div className="service">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
              {({ isVisible }) =>
              <div>
              <h2>Services Offered</h2>
              <Tab.Container id="services-tabs" defaultActiveKey="first">
              <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__pulse" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          services.map((services, index) => {
                            return (
                              <ServiceCard
                                key={index}
                                {...services}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        </div>
    )
  }
