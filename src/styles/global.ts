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
  }

  input, button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;