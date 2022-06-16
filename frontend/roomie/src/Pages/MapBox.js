import { useState } from "react";
const MapBox = (props) => {
  const [iframeUrl, setIframeUrl] = useState(
    `https://maps.google.com/maps?q=${props.address}&amp;z=10&amp;output=embed&amp;language=es&amp;show=false`
  );
  // https://maps.google.com/maps?q=akaram&amp;z=10&amp;output=embed&amp;language=es
  console.log(iframeUrl);

  if ("geolocation" in navigator) {
    // check if geolocation is supported/enabled on current browser
    navigator.geolocation.getCurrentPosition(
      function success(position) {
        // for when getting location is a success
        console.log(
          "latitude",
          position.coords.latitude,
          "longitude",
          position.coords.longitude
        );
      },
      function error(error_message) {
        // for when getting location results in an error
        console.error(
          "An error has occured while retrieving location",
          error_message
        );
      }
    );
  } else {
    // geolocation is not supported
    // get your location some other way
    console.log("geolocation is not enabled on this browser");
  }

  return (
    <>
      <iframe
        width="100%"
        height="550"
        frameborder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDsb5YruYB5OMn5bgP_Jn3F0d3bfHqKIdc&origin=${props.origin}&destination=${props.destination}`}
        // allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        title="te"
      ></iframe>
      <iframe
        width="100%"
        height="550"
        frameborder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDsb5YruYB5OMn5bgP_Jn3F0d3bfHqKIdc&q=${props.address}`}
        // allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        title="te"
      ></iframe>
      <iframe
        src="https://maps.google.com/maps?q=akaram&amp;z=10&amp;output=embed&amp;language=es"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Map"
      />
      <iframe
        src="https://maps.google.com/maps?q=akaram&amp;z=10&amp;output=embed&amp;language=es"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Map"
      />
    </>
  );
};
export default MapBox;
