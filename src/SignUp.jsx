import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    if (!role) {
      alert("⚠️ Please select a role (Admin or Student).");
      return;
    }

    alert("✅ Account created successfully!");

    // Redirect based on role
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "student") {
      navigate("/books");
    } else {
      navigate("/login"); // fallback just in case
    }
  };

  return (
    <div className="signup-container">
      <h2>📝 Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Role</label>
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
            required
          >
            <option value="">-- Select Role --</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>

      <div className="extra-links">
        <p>Already have an account? <Link to="/login">🔑 Login</Link></p>
      </div>
    </div>
  );
}

export default SignUp;
