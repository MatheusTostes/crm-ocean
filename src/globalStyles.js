import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;600;700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    color: #353535;
    font-family: 'Poppins', sans-serif;
    
    /* GAMBIARRA */
    /* overflow-x: hidden;  */

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`

export default GlobalStyle;