import React from 'react';
import { Container, Button } from 'react-bootstrap';

function CallToAction() {
  return (
    <Container id="cta" className="my-5 text-center">
      <h2>Start Organizing Your Life Today</h2>
      <Button variant="outline-danger" size="lg">Get Started</Button>
    </Container>
  );
}

export default CallToAction;
