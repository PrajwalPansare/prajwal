import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Features() {
  return (
    <Container id="features" className="my-5">
      <h2 className="text-center mb-4">Transform Your Productivity</h2>
      <Row className="justify-content-between">
        <Col md={3}>
          <Card style={{ backgroundColor: '#D3D3D3' }}>
            <Card.Img variant="top" src="/collaboration.png" style={{ width: '50px', height: '50px', margin: '0 auto' }} />
            <Card.Body>
              <Card.Title>User-Friendly interface</Card.Title>
              <Card.Text>
                Our platform offers seamless task management to boost your efficiency.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ backgroundColor: '#D3D3D3' }}>
            <Card.Img variant="top" src="/collaboration.png" style={{ width: '50px', height: '50px', margin: '0 auto' }} />
            <Card.Body>
              <Card.Title>Collaboration & Share Effortlessly</Card.Title>
              <Card.Text>
                Invite team members to work together and achieve your goals faster.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ backgroundColor: '#D3D3D3' }}>
            <Card.Img variant="top" src="/collaboration.png" style={{ width: '50px', height: '50px', margin: '0 auto' }} />
            <Card.Body>
              <Card.Title>Effortless Collaboration</Card.Title>
              <Card.Text>
                Invite team members to work together and achieve your goals faster.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ backgroundColor: '#D3D3D3' }}>
            <Card.Img variant="top" src="/collaboration.png" style={{ width: '50px', height: '50px', margin: '0 auto' }} />
            <Card.Body>
              <Card.Title>Seamless Access</Card.Title>
              <Card.Text>
                Stay connected and manage your tasks on the go with ease.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;
