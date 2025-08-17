import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!role) {
      alert("⚠️ Please select a role (Admin or Student).");
      return;
    }

    if (!role) {
      alert("⚠️ Please select a role (Admin or Student).");
      return;
    }

    if (role === "admin") {
      alert("✅ Logged in as Admin!");
      navigate("/admin");
    } else if (role === "student") {
      alert("✅ Logged in as Student!");
      navigate("/books");
    }
  };

  return (
    <div className="login-container">
      <h2>🔑 Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Login as:</label>
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

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>

      <div className="extra-links">
        <Link to="/signup">📝 Sign Up</Link>
        <Link to="/forgotpassword">❓ Forgot Password?</Link>
      </div>
    </div>
  );
}

export default Login;
