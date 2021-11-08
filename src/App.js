// import { useSelector } from 'react-redux';
// import { ThemeProvider } from 'styled-components';
// import { ThemeProvider } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Grid from './Grid';
// import Home from './Home';
// import { darkTheme, lightTheme } from './styledComponents/themeStyle';
import ThemeMenu from './thememenu/ThemeMenu';
import { useDarkMode } from './thememenu/useDarkMode';

function App() {
  const { DarkThemeProvider, ChoiceColor } = useDarkMode();
  // const [currMode] = useDarkMode();

  // let themeReducer =
  //   useSelector((state) => state.ThemeReducer.mode) ||
  //   localStorage.getItem('theme');
  // let colorMode =
  //   useSelector((state) => state.ThemeReducer.color) ||
  //   localStorage.getItem('colorMode');

  return (
    <ThemeProvider theme={{ theme: 'light' }}>
      <div
        className="App"
        // style={{
        //   backgroundColor: ThemeReducer === currMode ? 'light' : 'dark',
        // }}
      >
        <ThemeMenu theme={DarkThemeProvider} />
        {/* <Home /> */}
        <Grid colorMode={ChoiceColor} />
      </div>
    </ThemeProvider>
  );
}

export default App;

{
  /* <ThemeProvider theme = {{theme : darkThemeenabled ? "dark" : "light"}}></ThemeProvider> */
}
