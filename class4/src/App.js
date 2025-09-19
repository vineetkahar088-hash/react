import { useState } from "react";
import "./index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState(""); 
  const [rememberMe, setRememberMe] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email: email,
      password: password,
      gender: gender,
      rememberMe: rememberMe ? "Yes" : "No",
    });
  };

  return (
    <div className="login-container" id="login-container">
      <div className="login-card" id="login-card">
        <h2 className="login-heading" id="login-heading">
          Login
        </h2>

        <form className="login-form" id="login-form" onSubmit={handleSubmit}>
          <div className="form-group" id="email-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group" id="password-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-wrapper" id="password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="password-toggle"
                id="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "" : "show"}
              </span>
            </div>
          </div>
          <div className="form-group" id="gender-group">
            <label className="form-label">Gender</label>
            <div className="radio-options">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={gender === "Other"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Other
              </label>
            </div>
          </div>
          <div className="form-group" id="remember-group">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
          </div>
          <button type="submit" className="login-btn" id="login-btn">
            Login
          </button>
        </form>

        <p className="signup-text" id="signup-text">
          Don’t have an account?{" "}
          <a href="#" className="signup-link" id="signup-link">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
