import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";

export const ServiceCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" onClick={()=>console.log("hi")}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
  );
}
