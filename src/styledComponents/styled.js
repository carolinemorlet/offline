import styled from 'styled-components';

// import theme from 'styled-theming';

import { createGlobalStyle } from 'styled-components';

// //essai styled-theming
// export const backgroundColor = theme('theme', {
//   light: '#E2E2E2',
//   dark: '#363537',
// });

// export const textColor = theme('theme', {
//   light: '#FAFAFA',
//   dark: '#363537',
// });
// //

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
  
  
  }`;

export const ContainerMenuTheme = styled.div`
  text-align: center;
`;

export const MenuTheme = styled.div`
  position: fixed;
  right: -300px;
  top: 0;
  width: 300px;
  height: 100vh;
  padding: 20px;
  z-index: 99;
  background-color: blue;
  box-shadow: var(--box-shadow);
  transition: right 0.5s var(--transition-cubic);

  .select {
    margin-top: 40px;
  }

  &.active {
    right: 0;
  }
`;

export const CustomizeButton = styled.button`
  padding: 15px;
  border: none;
  margin: 12px;
`;

export const CloseMenuTheme = styled.button`
  position: absolute;
  top: 17px;
  right: 20px;
  background-color: transparent;
  font-size: 1.5rem;
  border: none;
`;

export const ModeList = styled.ul`
  margin-top: 20px;
`;

export const Btn = styled.button`
  padding: 15px;
  border: none;
  margin: 12px;
`;

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

/* background-color: ${backgroundColor}; */
/* color: ${textColor}; */
