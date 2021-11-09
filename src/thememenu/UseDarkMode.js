// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { ThemeProvider } from 'styled-components';

// export const useDarkMode = () => {
//   const [currMode, setcurrMode] = useState('light');

//   let DarkThemeProvider = ({ children }) => {
//     const darkThemeenabled = useSelector(
//       (state) => state.themeReducer.darkThemeenabled || localStorage.getItem('theme')
//     );

//     return (
//       <ThemeProvider theme={{ theme: darkThemeenabled ? 'dark' : 'light' }}>
//         {children}
//       </ThemeProvider>
//     );
//   };

//   useEffect(() => {
//     const localTheme = localStorage.getItem('theme');
//     if (localTheme) {
//       setcurrMode(localTheme);
//     } else {
//       setcurrMode('light');
//       localStorage.setItem('theme', 'light');
//     }
//   }, []);
//   return [DarkThemeProvider, currMode];
// };

// let ChoiceColor = ({ children }) => {
//   const colorMode =
//     useSelector((state) => state.ChoiceColor.colorMode.mode) ||
//     localStorage.getItem('colorMode');

//   return (
//     <ThemeProvider theme={{ theme: currMode ? 'dark' : 'light' }}>
//       {children}
//     </ThemeProvider>
//   );
// };

// const switchTheme = () => {
//   if (currMode === 'light') {
//     localStorage.setItem('theme', 'dark');
//     setcurrMode('dark');
//   } else {
//     localStorage.setItem('theme', 'light');
//     setcurrMode('light');
//   }
// };
