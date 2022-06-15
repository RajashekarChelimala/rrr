import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = (props) => {
  return (
    <div id="container2">
      <div style={{ display: "flex" }}>
        <div>
          <b>
            <h1 id="Sih">Sign in</h1>
          </b>
          <p className="S1">
            Don't have an account ?{" "}
            <Link to={"/SignUp"} id="snv">
              {" "}
              SignUp{" "}
            </Link>
          </p>
          <div style={{ paddingTop: "30px" }}>
            <p>E-mail:</p>
            <input
              type="email"
              placeholder="email@email.com"
              className="inpT"
            />
            <br></br>
            <br></br>
            <p>Password:</p>
            <input type="password" placeholder="**********" className="inpT" />
            <br></br>
            <Link id="FPP" as={Link} to={"/ForgetPassword"}>
              Forgot Password?
            </Link>
            <br></br>
            <button type="submit" className="buttonSig">
              Submit
            </button>
          </div>
        </div>
        <div>
          <img src={""} alt="Error" id="imageLogin" />
        </div>
      </div>
    </div>
  );
};
export default Login;
