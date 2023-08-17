import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';

const SignIn = ({ show, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationError, setValidationError] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setValidationError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setValidationError('');
  };

  const handleToggleForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword);
    setValidationError('');
  };

  const handleAuthAction = () => {
    if (!email || !password) {
      setValidationError('Please fill in all fields.');
      return;
    }

    if (isForgotPassword) {
      // Handle forgot password logic here
      console.log('Forgot password requested for:', email);
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
        <Modal.Title>{isForgotPassword ? 'Forgot Password' : 'Sign In'}</Modal.Title>
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
          {!isForgotPassword && (
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
          )}
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-between">
          <Button variant="link" onClick={handleToggleForgotPassword}>
            {isForgotPassword ? 'Back to Sign In' : 'Forgot Password?'}
          </Button>
        </div>
        <Button variant="primary" onClick={handleAuthAction}>
          {isForgotPassword ? 'Reset Password' : 'Sign In'}
        </Button>
      </Modal.Footer>
      </div>
    </Modal>
  );
};

export default SignIn;
