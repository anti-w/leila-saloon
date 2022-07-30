import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {

    scroll-behavior: smooth;
}


body {
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.family.header};
}

h1 {
  font-size: 36px;
}

a:visited {
  color: inherit;
}

button {
    border-style: none;
    min-width: 100px;
    padding: 14px;
    text-align: center;
    background: transparent;
    border: 2px solid gray;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  }
`;
