import React from "react";
import "./RoomCard.css";
const RoomCard = (props) => {
  return (
    <div id="container">
      <div class="card">
        <img
          src={`${process.env.REACT_APP_ASSET_URL}/img/rooms/${props.images[0]}`}
          alt={`${props.images[0]}`}
        />
        <div class="card__details">
          <span class="tag">{props.room_type}</span>

          {/* <span class="tag">Shared</span> */}

          <div class="name">{props.title} </div>

          <p>
            <span>{props.city} </span>&#9679;<span> {props.state} </span>&#9679;
            <span>{props.zip} </span>
          </p>

          <span style={{ fontSize: "20px", color: "black" }}>
            ₹{props.rent}
          </span>
          <span style={{ color: "darkgrey" }}>/month</span>

          <div className="tagtop">
            {props.utilities_included === "Yes" && (
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
            )}

            {props.pets_allowed === "Yes" && (
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
            )}
          </div>

          <button style={{ marginTop: "30px" }}>Get Details</button>
        </div>
      </div>
    </div>
  );
};
export default RoomCard;
