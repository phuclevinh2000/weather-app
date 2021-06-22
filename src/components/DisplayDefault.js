import React from 'react'
import Snowy from './Snowy'

const DisplayDefault = ({setQuery,query, search, dateBuilder}) => {
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
            <div className="location-box">
                <div className="location">Antarctica</div>
                <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
                <div className="temp">
                    -56°c
                </div>
                <div className="weather">Clouds</div>
            </div>
            <Snowy />
            <div>
                <hr />
                <p  className="summary">
                    Today: Snowy currently. 
                    It's -56°c; 
                    the high today was forecase as -50°c.
                </p>
            </div>
            <div>
                <hr />
                <table className="tableBot">
                    <tr>
                        <td>Wind: 11 m/s</td>
                        <td>Humidity: 0 %</td>
                    </tr>
                </table>
                <hr />
                <table className="tableBot">
                    <tr>
                        <td>Feels Like: -60°c</td>
                        <td>Pressure: 1014 hPa</td>
                    </tr>
                </table>
                <hr />
            </div>
            <footer>Made By Phucle - phuclevinh2000@gmail.com</footer>
        </main>
    )
}

export default DisplayDefault
