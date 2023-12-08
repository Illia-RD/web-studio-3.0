import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  /* Додаткові глобальні стилі тут */
body {
  min-width:428px;
  font-family: 'Roboto', sans-serif;
  background-color: #ffffff;
  
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
a {
  text-decoration: none;
}
ul,
ol {
  padding: 0;
  margin: 0;
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}

`;

export default GlobalStyles;
