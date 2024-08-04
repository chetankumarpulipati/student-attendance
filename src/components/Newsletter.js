import React, { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ onValidated }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // Can be 'sending', 'error', 'success'

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && email.indexOf("@") > -1) {
      setStatus('sending'); // Set status to 'sending' to show the "Sending..." message
      try {
        // Simulate storing email in database (replace with actual API call)
        await fetch('http://localhost:5000/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        // Clear email input after successful submission
        setEmail('');
        setStatus('success');
      } catch (error) {
        console.error('Error storing email:', error);
        setStatus('error');
      }
    }
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br /> & Never miss latest updates</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">Failed to subscribe. Please try again later.</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
            {status === 'success' && <p style={{ color: 'green' }}>Successfully subscribed!</p>}
          </Col>
        </Row>
      </div>
    </Col>
  );
};
