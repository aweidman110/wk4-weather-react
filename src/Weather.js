import React from "react";
import axios from "axios";
// import Loader from "react-loader-spinner";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
  }
  let apiKey = "8161b4309ee03faae957729ba7104797";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    // <Loader
    // type="Puff"
    // color="#00BFFF"
    // height={100}
    // width={100}
    // timeout={3000} //3 secs
    // />
    <Audio
      height="80"
      width="80"
      radius="9"
      color="hotpink"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
