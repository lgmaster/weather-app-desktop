import React from 'react';

import { Title, Subtitle, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Title>Choose a City</Title>
      <Subtitle>Select a city or country to see the weather</Subtitle>

      <Form>
        <input type="text" placeholder="Name of city"/>
        <button>Add the city</button>
      </Form>
    </>
  )
}

export default Dashboard;