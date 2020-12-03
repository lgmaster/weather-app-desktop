import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
`;

export const CityWeather = styled.div`
  max-width: 390px;
  width: 100%;
  margin: 30px auto;
  padding: 20px 20px;
  background-color: #5527a1;
  border-radius: 20px;

  display: flex;
  align-items: center;

  div {    

    span {
      font-size: 10px;
      color: #ffd037;
    }

    h2 {
      color: #ffd037;
      margin-top: 30px;
    }
  }

  &>div:first-child {
    width: 40%;  
    
    p {
      color: #fff;
      font-weight: bold;
      font-size: 18px;
    }

    p:last-child {
      font-weight: 400;
      font-size: 12px;
    }
  }

  &>div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: flex-flex-start;
    align-items: flex-end;
    flex: 1;

    span:last-child {
      color: #fff;
    }
  }
`;

export const WeatherDays = styled.div`

  display: flex;
  justify-content: center;
  
  div {
    width: 60px;
    height: 101px;
    cursor: pointer;

    background-color: #7955e1;
    border-radius: 20px;
    margin: 0 10px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    p:first-child {
      color: #b3a7ee;
      font-size: 14px;
    }

    p:last-child {
      color: #fff;
      font-size: 26px;
      font-weight: 500;
    }
  }

  div.active {
    background-color: #ffd136;
    
    p {
      color: #3e1a78;
    }
  }
`;