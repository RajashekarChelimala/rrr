import React from "react";
import { Link } from "react-router-dom";
import "./MyAccount.css";
const MyAccount = () => {
  return (
    <div>
      <div id="MyAccount_Head">
        <h3>MyAccount:</h3>
        <Link to={"/UpdatePassword"}>Update Password </Link>
      </div>
      <div id="MyAccount">
        <div id="MyAccount_flex">
          <div>
            <label>Profile Picture:</label>
            <br></br>
            <input type="file" />
          </div>
          <div>
            <label>Name:</label>
            <br></br>
            <input type="text" className="MyAccount_input" />
            <br></br>
            <br></br>
            <label>E-mail</label>
            <br></br>
            <input type="email" className="MyAccount_input" />
            <br></br>
            <br></br>
            <label>Age:</label>
            <br></br>
            <input type="number" className="MyAccount_input" />
            <br></br>
            <br></br>
            <label>College:</label>
            <br></br>
            <input type="text" className="MyAccount_input" />
            <br></br>
            <br></br>
            <label>About me:</label>
            <br></br>
            <input type="text" className="MyAccount_input" />
            <br></br>
            <br></br>
            <button type="submit" id="MyAccount_btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyAccount;
