import { useState, useEffect, useContext } from "react";

import "./MyRooms.css";
import RoomCard from "./RoomCard";
import { AuthContext } from "../context/auth-context";

const MyRooms = () => {
  const auth = useContext(AuthContext);

  const [loadedRooms, setLoadedRooms] = useState();

  useEffect(() => {
    const getRooms = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/rooms/rooms/${auth.userId}`
        );
        const responseData = await response.json();
        console.log("loadedRooms >> ", responseData.data.rooms);
        setLoadedRooms(responseData.data.rooms);
      } catch (err) {
        console.log("Error while retrieving");
      }
    };
    getRooms();
  }, [auth.userId]);

  return (
    <>
      {/* <PlaceList items={loadedPlaces} onDeletePlace={placeDeletedHandler} /> */}
    </>
  );
};

export default MyRooms;
