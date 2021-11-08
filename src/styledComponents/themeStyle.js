import { createGlobalStyle } from 'styled-components';

// export const lightTheme = {
//   body: '#E2E2E2',
//   text: '#363537',
//   toggleBorder: '#FFF',
//   gradient: 'linear-gradient(#39598A, #79D7ED)',
// };

// export const darkTheme = {
//   body: '#363537',
//   text: '#FAFAFA',
//   toggleBorder: '#6B8096',
//   gradient: 'linear-gradient(#091236, #1E215D)',
// };

import theme from 'styled-theming';

//essai styled-theming
export const backgroundColor = theme('theme', {
  light: '#E2E2E2',
  dark: '#363537',
});

export const textColor = theme('theme', {
  light: '#FAFAFA',
  dark: '#363537',
});
//

export const GlobalStyles = createGlobalStyle`
   body {
    background: ${({ theme }) => theme};
    color: ${({ theme }) => theme};
    display: flex;
    flex-direction: row;
    height: 100vh;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  
    background-color: ${backgroundColor};
  color: ${textColor};
  }`;
