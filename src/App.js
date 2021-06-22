import React, { useState} from 'react';
import Display from './components/Display';
import './App.css'
import DisplayDefault from './components/DisplayDefault';


const api = {
  key: "e0740b6eb2b7296d7d96130328216c3d",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState();

  const search = evt => {
    // console.log("hihihi")
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          console.log(result);
          setWeather(result);
          setQuery('');
          
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  const checkBackground = () => {
    // if(weather.main.temp > 16) return 'app warm'
    // else return 'app'
    const cod = weather.message
    // console.log(cod) 
    
    if(cod=== "city not found") return 'app cloudy'
    else {
    const role = weather.weather[0].main
    // console.log(role)
    switch(role) {
      case 'Clouds': 
        return 'app cloudy'
      case 'Clear':
        return 'app clear'
      case 'Rain':
        return 'app rainy'
      default:
        return 'app rainy'
    }}
  }

  if(!weather) return (
    <div className="app snowy" >
      <DisplayDefault 
        setQuery = {setQuery}
        query = {query}
        search = {search}
        dateBuilder = {dateBuilder}
      />
    </div>
  )
  else if(weather.message === "city not found") return (
    <div className="app snowy" >
      <DisplayDefault 
        setQuery = {setQuery}
        query = {query}
        search = {search}
        dateBuilder = {dateBuilder}
      />
    </div>
  )
  else return (
    <div className={checkBackground()} >
      {/* {console.log(weather.main)} */}
        <Display 
          key = {weather.sys.country}
          setQuery = {setQuery}
          query = {query}
          search = {search}
          name = {weather.name}
          country = {weather.sys.country}
          dateBuilder = {dateBuilder}
          temp = {weather.main.temp}
          weatherInfor = {weather.weather[0].main}
          highTemp = {weather.main.temp_max}
          wind = {weather.wind.speed}
          humidity = {weather.main.humidity}
          feelsLike = {weather.main.feels_like}
          pressure = {weather.main.pressure}
        />
    </div> 
  );
}

export default App;