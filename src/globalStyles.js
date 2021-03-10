import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    font-family: Avenir, sans-serif;
    padding: 0;
    margin: 0;
    outline: none;
  }

  body,
  select,
  button {
    color: #464646;
  }

  #root {
    width: 90%;
    max-width: 950px;
    margin: 0 auto;
  }
  
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: rgba(0, 0, 0, .1);
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .4);
  }
`
