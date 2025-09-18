import { useState } from "react";
import "./index.css";

function Login() {
  const [email,setEmail] = useState("");
  const [passowrd, setpassword] = useState("");
  const [showpassword,setShowPassword] = useState(flase);
  const [gender,setGender] = useState("");
  const [rememberme,setRemmemBerme] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();

    console.log({
      email:email,
      passowrd:passowrd,
      gender:gender,
      rememberme:rememberme? "yes" : "no",
    });
  };

  return(
    <div className="login-container" id="login-contaoner">
      <div className="login-card" id="login-card">
        <h2 className="login-heading" id="login-heading">
          login

          <form className="login-form" id="login-form" onSubmit={handlesubmit}>
            <div className="form-group" id="email-group">
              <label htmlFor="email" className="form-label">
                email
              </label>
              <input
              id="email"
              type="email"
              className="form-input"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group"
          </form>
        </h2>
      </div>
    </div>
  )
}