import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./Home.css"; // Adjust the path if necessary


function Home({ submissions, setSubmissions }) {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    timestamp: "",
  });

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setFormSubmitted(false); // Reset to form view when modal closes
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString(); // Add timestamp
    setSubmissions((prev) => [
      ...prev,
      { ...formData, timestamp }, // Add formData to submissions array
    ]);
    setFormSubmitted(true);
  };

  return (
    <div>
      <h1>Simplify Your Life With Our</h1>
      <h1>Todo App</h1>
      <p>
        Stay organized and boost your productivity with our intuitive todo
        website.
      </p>
      <p>
        Experience a modern approach to task management that fits your
        lifestyle.
      </p>
      <div className="button">
        <Button variant="outline-danger" onClick={handleShow}>
          Get Started
        </Button>
        <Button variant="outline-danger">Learn More</Button>
      </div>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        dialogClassName="custom-modal"
      >
        {formSubmitted ? (
          // Success Message
          <>
            <Modal.Header>
              <Modal.Title>
                <div>
                  <p>❤️</p>
                  <p>Thank you for connecting with us.</p>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Our team will contact you soon.</p>
              <Button variant="danger" className="w-50" onClick={handleClose}>
                Done
              </Button>
            </Modal.Body>
          </>
        ) : (
          // Form
          <>
            <Modal.Header closeButton>
              <Modal.Title>Get Started Today!</Modal.Title>
            </Modal.Header>
            <p>Fill in your details and take control of your tasks.</p>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <div className="form-row">
                  <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your first name"
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your last name"
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <div className="form-check-row">
                    <Form.Check
                      type="radio"
                      label="Male"
                      name="gender"
                      value="Male"
                      onChange={handleInputChange}
                      required
                    />
                    <Form.Check
                      type="radio"
                      label="Female"
                      name="gender"
                      value="Female"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLanguage">
                  <Form.Label>Language</Form.Label>
                  <div>
                    <Form.Check type="checkbox" label="English" id="english" />
                    <Form.Check type="checkbox" label="Hindi" id="hindi" />
                    <Form.Check type="checkbox" label="Marathi" id="marathi" />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTerms">
                  <Form.Check
                    type="checkbox"
                    label={
                      <>
                        I agree to the{" "}
                        <span style={{ color: "red" }}>terms and conditions</span>
                      </>
                    }
                    required
                  />
                </Form.Group>
                <Button variant="danger" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Home;
