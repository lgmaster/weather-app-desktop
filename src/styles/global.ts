import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }
  
  body {
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    width: 100%;
    height: 100vh;
    display: flex;
  }

  input, button {
    cursor: pointer;
  }

  #root {
    max-width: 580px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;