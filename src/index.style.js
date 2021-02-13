import { createGlobalStyle } from "styled-components";


const CssBaseline = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  :root {
    --red: #FF3644;
    --blue: #274BE9;
    --black2: #000932;
    --gray: #CCD0D7;
  }

  p {
    color: var(---black2);
  }
`

export default CssBaseline;
