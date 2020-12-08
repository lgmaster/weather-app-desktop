import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import config from '../../auth/config';
import { apiSearchCondition } from '../../services/api';

import { IconContext } from 'react-icons';

// eslint-disable-next-line
import { WiDaySunny, WiCloudy } from 'react-icons/wi';

import { Title, CityWeather } from './styles';

interface stateType {
  key: string;
  city: string;
}

interface Temperatures {
  weatherText: string;
  weatherIcon: number;
  weatherImage: string;
  Temperature: {
    Metric: {
      Value: number;
      Unit: string;
    }
  },
  date: string
}

const Weather: React.FC = () => {
  const { state } = useLocation<stateType>();
  const [temperatures, setTemperatures] = useState<Temperatures[]>([]);

  useEffect(() => {
    apiSearchCondition.get(`${state.key}?apikey=${config.apiKey}`).then(response => {
      const { WeatherText, Temperature, WeatherIcon, LocalObservationDateTime } = response.data[0];

      const WeatherImage = `https://www.accuweather.com/images/weathericons/${WeatherIcon}.svg`;

      const nowDate = new Date(LocalObservationDateTime).toDateString();
      
      setTemperatures([{weatherText: WeatherText, weatherImage: WeatherImage, Temperature, weatherIcon: WeatherIcon, date: nowDate}]);
    })

  }, [state.key]);

  return (
    <>
      <Title>{state.city.toUpperCase()}</Title>
      <CityWeather>
        
          
            <div>
              <div>
                <p>{state.city.toUpperCase()}</p>
                <span>{temperatures.map(temperature => temperature.date)}</span>
              </div>
              <div>
              {temperatures.map(temperature => (<h2>{temperature.Temperature.Metric.Value}°{temperature.Temperature.Metric.Unit}</h2>))}
              {temperatures.map(temperature => (<p>{temperature.weatherText} day</p>))}
              </div>
            </div>
            <div>
              <IconContext.Provider value={{ color: "#ffcf36" }}>
                {temperatures.map(temperature => (<img width={120} src={temperature.weatherImage} alt={temperature.weatherText}/>))}                
              </IconContext.Provider>
            </div>
        
       
      </CityWeather>
      
    </>
  )
}

export default Weather;