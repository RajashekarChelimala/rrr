import React from "react";
import "./RoomCard.css";
const RoomCard = () => {
  return (
    <div id="container">
      <div class="card">
        <img src="https://picsum.photos/200/300" alt="imgRoom" />

        <div class="card__details">
          <span class="tag">Private</span>

          {/* <span class="tag">Shared</span> */}

          <div class="name">Title Goes Here </div>

          <p>
            <span>NEWYORK </span>&#9679;<span> NY </span>&#9679;
            <span> 567567 </span>
          </p>

          <span style={{ fontSize: "20px", color: "black" }}>₹100</span>
          <span style={{ color: "darkgrey" }}>/month</span>

          <div className="tagtop">
            <span
              class="tag"
              style={{
                marginTop: "50px",
                backgroundColor: "rgba(254,252,191)",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Utilities Included
            </span>
            <span
              class="tag"
              style={{
                marginTop: "30px",
                backgroundColor: "rgba(254,252,191)",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Pets Allowed
            </span>
          </div>

          <button style={{ marginTop: "30px" }}>Get Details</button>
        </div>
      </div>
    </div>
  );
};
export default RoomCard;
