import { useState } from "react";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
    setEmail("");
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h1>🔑 Forgot Password</h1>
        <p>Enter your registered email address and we’ll send you a link to reset your password.</p>
        
        <form onSubmit={handleSubmit} className="forgot-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn">Send Reset Link</button>
        </form>

        <a href="/login" className="back-link">← Back to Login</a>
      </div>
    </div>
  );
}

export default ForgotPassword;
