import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

function Testimonials() {
  return (
    <Container id="testimonials" className="my-5">
      <h2 className="text-center mb-4">Customer Testimonials</h2>
      <Row>
        <Col md={7}>
          <Card style={{backgroundColor:"red"}}>
          <Card.Body>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <h1 style={{ color: "pink" }}>Organize.</h1>
              <h1 style={{ color: "pink" }}>Achieve.</h1>
              <h1 style={{ color: "pink" }}>Relax.</h1>
            </div>
            <Card.Text style={{ color: "white", width: "50%" }}>
              Turn clutter into clarity, chaos into control, and dreams into done. Bold vision into market success.
            </Card.Text>
            <Card.Footer style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Button variant="outline-light rounded-pill">Get Started Today</Button>
              <Button variant="outline-light rounded-pill">Discover Features</Button>
            </Card.Footer>
          </Card.Body>
          </Card>
        </Col>
        <Col md={5}>
          <Card>
          <Carousel fade>
              <Carousel.Item>
              <Carousel.Caption >
                  <h3>Your Task</h3>
                  <h3>Our Tools</h3>
                  <p>Freddie Halvorson</p>
                  <p>Chife Productivity Enthusiast</p>
                </Carousel.Caption>
              <img style={{width:"100%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd25wz50u-wZfTJa_aqslbYZmzn44YKwaN3g&s' alt='image1' text="First slide" />
                
              </Carousel.Item>
              <Carousel.Item>
              <img style={{width:"100%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi78Bu6jAZZu-tKrugK7rpAJKLtW-OMwWTMg&s' alt='image1' text="Second slide" />
                <Carousel.Caption>
                  <h3>Your Task</h3>
                  <h3>Our Tools</h3>
                  <p>Freddie Halvorson</p>
                  <p>Chife Productivity Enthusiast</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img style={{width:"100%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi78Bu6jAZZu-tKrugK7rpAJKLtW-OMwWTMg&s' alt='image1' text="Third slide" />
                <Carousel.Caption>
                  <h3>Your Task</h3>
                  <h3>Our Tools</h3>
                  <p>Freddie Halvorson</p>
                  <p>Chife Productivity Enthusiast</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
