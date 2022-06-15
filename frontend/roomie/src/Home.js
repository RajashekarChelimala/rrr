import React from "react";
import cityscapes from "../src/assets/images/cityscapes.png";
import "./Home.css";

const Home = (props) => {
  return (
    <React.Fragment>
      <div className="home-info">
        <div className="home-text">
          <h1>Find Your New Place with roomie!</h1>
          <p>
            Easy as making friends, with roomie you can look for many rooms
            available across the country.
          </p>
          <br></br>
          <br></br>
          <input
            type="text"
            placeholder="Enter a City "
            id="autocomplete"
          ></input>
          {/* <p id="details"></p> */}
          <button> Search</button>
          <br></br>
          <br></br>
          <i>All Available Rooms</i>
        </div>
        <img src={cityscapes} id="homeimg" alt="sd" />
      </div>
    </React.Fragment>
  );
};
export default Home;
