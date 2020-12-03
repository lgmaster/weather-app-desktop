import styled from 'styled-components';

export const Title = styled.h1`
  color: #3e1a78;
  font-size: 56px;
  text-align: center;
`;

export const Subtitle = styled.h5`
  color: #8275a9;
  font-weight: 300;
  font-size: 16px;
  text-align: center;
`;

export const Form = styled.form`
  max-width: 400px;
  margin: 55px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 100%;
    padding: 20px 28px;
    color: #3e1a78;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-bottom: 1px solid #c8bdec;
    margin-bottom: 20px;

    &::placeholder {
      color: #3e1a78;
    }
  }

  button {
    width: 100%;
    padding: 20px 28px;
    color: #3e1a78;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 20px;
    background-color: #ffd545;
    transition: background-color .5s;

    &:hover {
      background-color: #7a54e2;
      color: #fff;
    }
  }
`;