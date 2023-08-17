import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';

const SignupModal = ({ show, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationError, setValidationError] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setValidationError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setValidationError('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setValidationError('');
  };

  const handleToggleAuthType = () => {
    setIsSignUp(!isSignUp);
    setValidationError('');
  };

  const handleAuthAction = () => {
    if (!email || !password) {
      setValidationError('Please fill in all fields.');
      return;
    }

    if (isSignUp) {
      if (!confirmPassword) {
        setValidationError('Please confirm your password.');
        return;
      }

      if (password !== confirmPassword) {
        setValidationError('Passwords do not match.');
        return;
      }

      // Handle sign-up logic here
      console.log('Signing up with:', email, password);
    } else {
      // Handle sign-in logic here
      console.log('Signing in with:', email, password);
    }

    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <div className='p-3'>
      <Modal.Header closeButton>
        <Modal.Title>{isSignUp ? 'Sign Up' : 'Sign In'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {validationError && <p className="text-danger">{validationError}</p>}
        <Form className='d-flex flex-column gap-4'>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>
          {isSignUp && (
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </Form.Group>
          )}
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-between">
          <Button variant="link" onClick={handleToggleAuthType}>
            {isSignUp ? 'Already have an account? Sign In' : 'New user? Sign Up'}
          </Button>
        </div>
        <Button variant="primary" onClick={handleAuthAction}>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Button>
      </Modal.Footer>
      </div>
    </Modal>
  );
};

export default SignupModal;
