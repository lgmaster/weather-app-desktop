import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import config from '../../auth/config';
import { apiSearchCity } from '../../services/api';

import { Title, Subtitle, Form } from './styles';

const Dashboard: React.FC = () => {
  const [city, setCity] = useState('');

  const history = useHistory();

  async function handleSearchCity(event: FormEvent<HTMLFormElement>) {

    event.preventDefault();

    const response = await apiSearchCity.get(`search?apikey=${config.apiKey}&q=${city}`);
    
    const {Key} = response.data[0]; 

    history.push("/weather", {key: Key, city});
  }


  return (
    <>
      <Title>Choose a City</Title>
      <Subtitle>Select a city or country to see the weather</Subtitle>

      <Form onSubmit={handleSearchCity}>
        <input type="text" placeholder="Name of city" onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Add the city</button>
      </Form>
    </>
  )
}

export default Dashboard;