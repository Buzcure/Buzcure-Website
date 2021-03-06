import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`


*,
*:before,
*:after {
  margin:0;
  padding:0;
  box-sizing: border-box;
}


html{
  font-size: 62.5%;
}


body {
  font-size:1.3rem;
  color:#333333;

  @media only screen and (min-width: 1024px) {
    font-size:1.4rem;
  }
 
}





`




export default GlobalStyle