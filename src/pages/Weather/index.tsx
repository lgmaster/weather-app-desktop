import React from 'react';
import { IconContext } from 'react-icons';

// eslint-disable-next-line
import { WiDaySunny, WiCloudy } from 'react-icons/wi';

import { Title, CityWeather, WeatherDays } from './styles';

const Weather: React.FC = () => {
  return (
    <>
      <Title>Madrid</Title>
      <CityWeather>
        <div>
          <div>
            <p>Madrid</p>
            <span>Wed 16 July 3:45 pm</span>
          </div>
          <div>
            <h2>30°C</h2>
            <p>Sunny day</p>
          </div>
        </div>
        <div>
          <IconContext.Provider value={{ color: "#ffcf36" }}>
            <WiDaySunny size={120} />
          </IconContext.Provider>
          <span>Tomorrow 25°C / 28°C</span>
        </div>
      </CityWeather>
      <WeatherDays>
        <div>
          <p>Wed</p>
          <p>16</p>
        </div>
        <div>
          <p>Wed</p>
          <p>16</p>
        </div>
        <div className="active">
          <p>Wed</p>
          <p>16</p>
        </div>
        <div>
          <p>Wed</p>
          <p>16</p>
        </div>
        <div>
          <p>Wed</p>
          <p>16</p>
        </div>
      </WeatherDays>
    </>
  )
}

export default Weather;