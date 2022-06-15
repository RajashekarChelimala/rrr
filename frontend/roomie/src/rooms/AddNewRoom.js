import React from "react";
import "./AddNewRoom.css";
const AddNewRoom = () => {
  return (
    <div>
      <h3 id="head">New Listing</h3>
      <div id="Upload">
        <br></br>
        <span id="imgUpload">images:</span>
        <br></br>
        <br></br>
        <input type="file" className="file" />
        <br></br>
        <br></br>
        <input type="file" className="file" />
        <br></br>
        <br></br>
        <input type="file" className="file" />
        <br></br>
        <br></br>
        <h5> Listing Information:</h5>
        <hr style={{ color: "orange" }}></hr>
        <label>Title:</label>
        <br></br>
        <br></br>
        <input type="text" className="inputUpload" />
        <br></br>
        <br></br>
        <div id="flex_div">
          <div id="f1">
            <label for="room">Room:</label>
            <br></br>
            <select name="room" id="room">
              <option value="Shared">Shared</option>
              <option value="Private">Private</option>
            </select>
          </div>
          <div id="f1">
            <label>Building Type:</label>
            <br></br>
            <select name="Building" id="building">
              <option value="Home">Home</option>
              <option value="Apartment">Apartment</option>
              <option value="Condo">Gated Community</option>
            </select>
          </div>
          <div id="f1">
            <label>Utilities Included?</label>
            <br></br>
            <input type="radio" id="Yes" name="Utilites" value="Yes" />
            <label for="Yes">Yes</label>
            <input type="radio" id="No" name="Utilites" value="No" />
            <label for="No">No</label>
          </div>
          <div id="f1">
            <label>Pets Allowed?</label>
            <br></br>
            <input type="radio" id="Yes1" name="Allowed" value="Yess" />
            <label for="Yes">Yes</label>
            <input type="radio" id="No1" name="Allowed" value="Noo" />
            <label for="No">No</label>
          </div>
        </div>
        <br></br>
        <br></br>
        <label>Rent:</label>
        <br></br>
        <br></br>
        <input type="number" className="inputUpload" />
        <br></br>
        <br></br>
        <label>Address:</label>
        <br></br>
        <br></br>
        <input type="text" className="inputUpload" />
        <br></br>
        <br></br>
        <label>City:</label>
        <br></br>
        <br></br>
        <input type="text" className="inputUpload" />
        <br></br>
        <br></br>
        <label>State:</label>
        <br></br>
        <br></br>
        <input type="text" className="inputUpload" />
        <br></br>
        <br></br>
        <label>Zip:</label>
        <br></br>
        <br></br>
        <input type="number" className="inputUpload" />
        <br></br>
        <br></br>
        <label>Contry:</label>
        <br></br>
        <br></br>
        <input type="text" className="inputUpload" />
        <br></br>
        <br></br>
        <label>Description about your space:</label>
        <br></br>
        <br></br>
        <input type="text" className="inputUpload" />
        <br></br>
        <br></br>
        <label>First Date Available:</label>
        <br></br>
        <br></br>
        <input type="Date" className="inputUpload" />
        <br></br>
        <br></br>
        <h5>Contact:</h5>
        <hr style={{ color: "orange" }}></hr>
        <label>E-mail:</label>
        <br></br>
        <br></br>
        <input type="email" className="inputUpload" />
        <br></br>
        <br></br>
        <label>Phone:</label>
        <br></br>
        <br></br>
        <input type="number" className="inputUpload" />
        <br></br>
        <br></br>
        <button className="SubmitUpload">Submit</button>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default AddNewRoom;
