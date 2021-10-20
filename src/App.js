import { useSelector } from 'react-redux';
import './App.css';
import Grid from './Grid';
import Home from './Home';
import ThemeMenu from './thememenu/ThemeMenu';

function App() {
	let themeReducer =
		useSelector((state) => state.ThemeReducer.mode) ||
		localStorage.getItem('themeMode');
	let colorMode =
		useSelector((state) => state.ThemeReducer.color) ||
		localStorage.getItem('colorMode');

	return (
		<div
			className='App'
			style={{
				backgroundColor:
					themeReducer === 'theme-mode-dark' ? '#3d3838' : 'white',
			}}
		>
			<ThemeMenu />
			{/* <Home /> */}
			<Grid themeReducer={themeReducer} colorMode={colorMode} />
		</div>
	);
}

export default App;
