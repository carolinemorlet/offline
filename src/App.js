import { useSelector } from 'react-redux';
import './App.css';
import Grid from './Grid';
import Home from './Home';
import { darkTheme, lightTheme } from './styledComponents/themeStyle';
import ThemeMenu from './thememenu/ThemeMenu';
import { useDarkMode } from './thememenu/useDarkMode';

function App() {
  const [currMode] = useDarkMode();

  let themeReducer =
    useSelector((state) => state.ThemeReducer.mode) ||
    localStorage.getItem('theme');
  let colorMode =
    useSelector((state) => state.ThemeReducer.color) ||
    localStorage.getItem('colorMode');

  return (
    <div
      className="App"
      style={{
        backgroundColor: themeReducer === currMode ? darkTheme : lightTheme,
      }}
    >
      <ThemeMenu />
      {/* <Home /> */}
      <Grid themeReducer={themeReducer} colorMode={colorMode} />
    </div>
  );
}

export default App;
