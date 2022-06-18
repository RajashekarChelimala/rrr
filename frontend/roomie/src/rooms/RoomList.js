import React from "react";
import RoomCard from "./RoomCard";
const RoomList = (props) => {
  if (props.items.length === 0) {
    return <h1>No Rooms !</h1>;
  }
  return (
    <ul>
      {props.items.map((room) => (
        <RoomCard
          key={room.id}
          id={room.id}
          title={room.title}
          room_type={room.room_type}
          building_type={room.building_type}
          utilities_included={room.utilities_included}
          pets_allowed={room.pets_allowed}
          rent={room.rent}
          village={room.village}
          city={room.city}
          state={room.state}
          zip={room.zip}
          country={room.country}
          description={room.description}
          first_date_available={room.first_date_available}
          email={room.email}
          phone={room.phone}
          images={room.images}
          creator={room.creator}
        />
      ))}
    </ul>
  );
};
export default RoomList;
