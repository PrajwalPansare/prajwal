import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

function Testimonials() {
  return (
    <Container id="testimonials" className="my-5">
      <h2 className="text-center mb-4">Customer Testimonials</h2>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Card.Text>
                "Using this website has made my tasks so much easier! I can't imagine my day without it!"
              </Card.Text>
              <Card.Footer>— User</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
