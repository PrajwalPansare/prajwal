import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid className="bg-light py-3">
      <Row>
        <Col className="text-center">
          <p>Contact us: email@example.com</p>
          <p>Follow us on social media:</p>
          <p>
            <a href="#facebook">Facebook</a> | 
            <a href="#twitter">Twitter</a> | 
            <a href="#instagram">Instagram</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
