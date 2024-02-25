import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // have to have access to the city
    // make an api call
    // uodate the weather UI
    let apiKey = "8161b4309ee03faae957729ba7104797";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="App" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a city..."
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}



// import React from "react";
// import axios from "axios";
// // import Loader from "react-loader-spinner";
// // import { Audio } from "react-loader-spinner";

// export default function Weather(props) {
//   function handleResponse(response) {
//     alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
//   }
//   let apiKey = "8161b4309ee03faae957729ba7104797";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
//   axios.get(apiUrl).then(handleResponse);

//   // return (
//   //   // <Loader
//   //   // type="Puff"
//   //   // color="#00BFFF"
//   //   // height={100}
//   //   // width={100}
//   //   // timeout={3000} //3 secs
//   //   // />
//   //   <Audio
//   //     height="80"
//   //     width="80"
//   //     radius="9"
//   //     color="hotpink"
//   //     ariaLabel="loading"
//   //     wrapperStyle
//   //     wrapperClass
//   //   />
//   // );
// }
