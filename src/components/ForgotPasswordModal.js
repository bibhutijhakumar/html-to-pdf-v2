import React from 'react';

const ForgotPasswordModal = ({ onClose }) => {
  const handleResetPassword = () => {
    // Logic to reset password
    // ...
    onClose(); // Close the modal after resetting password
  };

  return (
    <div className="modal fade show" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Forgot Password</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Enter your email address to reset your password.</p>
            <input type="email" className="form-control" placeholder="Enter your email" required />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            <button type="button" className="btn btn-primary" onClick={handleResetPassword}>Reset Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
