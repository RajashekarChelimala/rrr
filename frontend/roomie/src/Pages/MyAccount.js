import React, { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import "./MyAccount.css";
const MyAccount = () => {
  const auth = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState({});

  useCallback(() => {
    async function gettingUserDetails() {
      try {
        const response = await fetch(
          `http://localhost:5000/api/users/${auth.userId}`
        );
        const responseData = await response.json();
        setUserDetails(responseData.data);
        console.log(userDetails);
      } catch (err) {
        console.log("Error while fetching user data", err.message);
      }
    }
  }, [userDetails]);

  return (
    <div>
      <div id="MyAccount_Head">
        <h3>Update My Account :</h3>
        <Link to={"/UpdatePassword"}>Update Password </Link>
      </div>
      <div id="MyAccount">
        <form>
          <div id="MyAccount_flex">
            <div>
              <label>Name:</label>
              <br></br>
              <input
                type="text"
                className="MyAccount_input"
                value={userDetails.name}
              />
              <br></br>
              <br></br>
              <label>E-mail</label>
              <br></br>
              <input type="email" className="MyAccount_input" />
              <br></br>
              <br></br>
              <label>Phone :</label>
              <br></br>
              <input type="tel" className="MyAccount_input" />
              <br></br>
              <br></br>
              <label>Address :</label>
              <br></br>
              <input type="text" className="MyAccount_input" />
              <br></br>
              <br></br>

              <button type="submit" id="MyAccount_btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default MyAccount;
