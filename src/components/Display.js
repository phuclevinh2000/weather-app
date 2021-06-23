import React from 'react'
import Sunny from './Sunny'
import Rainy from './Rainy'
import Snowy from './Snowy'
import Cloudy from './Cloudy'

const Display = ({feelsLike, wind,humidity,
                  pressure, highTemp,
                  setQuery, query, 
                  search, name, 
                  country, dateBuilder, 
                  temp, weatherInfor}) => {

  const checkBackground = () => {
    // if(weather.main.temp > 16) return 'app warm'
    // else return 'app'
    const role = weatherInfor
    // console.log(role)
    switch(role) {
      case 'Clouds': 
        return <Cloudy />
      case 'Clear':
        return <Cloudy />
      case 'Rain':
        return <Rainy />
      case 'Snow':
        return <Snowy />
      case 'Sunny':
        return <Sunny />
      default:
        return <Cloudy />
    }
  }

  return (
  <main>
      <div className="search-box">
        <input 
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      {(typeof weatherInfor != "undefined") ? (
      <div>
        <div className="location-box">
          <div className="location">{name}, {country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(temp)}°c
          </div>
          <div className="weather">{weatherInfor}</div>
          {checkBackground()}
        </div>
        <div>
          <hr />
          <p className="summary">
            Today: {weatherInfor} currently. 
            It's {Math.round(temp)}°c; 
            the high today was forecase as {Math.round(highTemp)}°c
          </p>
        </div>
        <div>
            <hr />
            <table className="tableBot">
                <tr>
                    <td>Wind: {wind} m/s</td>
                    <td>Humidity: {humidity} %</td>
                </tr>
            </table>
            <hr />
            <table className="tableBot">
                <tr>
                    <td>Feels Like: {Math.round(feelsLike)}°c</td>
                    <td>Pressure: {pressure} hPa</td>
                </tr>
            </table>
            <hr />
        </div>
        <footer>Made By Phucle - phuclevinh2000@gmail.com</footer>
      </div>
      ) : ('')}
    </main>
  )
}

export default Display

