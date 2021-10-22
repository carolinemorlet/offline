import React, { useRef, useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import ThemeAction from '../redux/actions/ThemeAction';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './useDarkMode';
import {
  MenuTheme,
  CloseMenuTheme,
  CustomizeButton,
  ModeList,
  ContainerMenuTheme,
  Btn,
} from '../styledComponents/styled';
import {
  darkTheme,
  GlobalStyles,
  lightTheme,
} from '../styledComponents/themeStyle';

const color_settings = [
  {
    id: 'blue',
    name: 'Blue',
    background: 'blue-color',
    class: 'theme-color-blue',
  },
  {
    id: 'red',
    name: 'Red',
    background: 'red-color',
    class: 'theme-color-red',
  },
  {
    id: 'cyan',
    name: 'Cyan',
    background: 'cyan-color',
    class: 'theme-color-cyan',
  },
  {
    id: 'green',
    name: 'Green',
    background: 'green-color',
    class: 'theme-color-green',
  },
  {
    id: 'orange',
    name: 'Orange',
    background: 'orange-color',
    class: 'theme-color-orange',
  },
];

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener('mousedown', (e) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle('active');
    } else {
      // user click outside toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove('active');
      }
    }
  });
};

const ThemeMenu = () => {
  const [currMode, switchTheme] = useDarkMode();
  const menu_ref = useRef(null);
  const menu_toggle_ref = useRef(null);
  const [currColor, setcurrColor] = useState('blue');

  clickOutsideRef(menu_ref, menu_toggle_ref);

  const setActiveMenu = () => menu_ref.current.classList.add('active');

  const closeMenu = () => menu_ref.current.classList.remove('active');

  const dispatch = useDispatch();

  // const setMode = (mode) => {
  //   setcurrMode(mode.id);
  //   localStorage.setItem('theme', mode.class);
  //   dispatch(ThemeAction.setMode(mode.class));
  // };

  const setColor = (color) => {
    setcurrColor(color.id);
    localStorage.setItem('colorMode', color.class);
    dispatch(ThemeAction.setColor(color.class));
  };

  useEffect(() => {
    const colorClass = color_settings.find(
      (e) => e.class === localStorage.getItem('colorMode', 'light')
    );

    if (colorClass !== undefined) setcurrColor(colorClass.id);
  }, []);

  // const themeClass = mode_settings.find(
  //   (e) => e.class === localStorage.getItem('themeMode', 'theme-mode-light')
  // );

  return (
    <ThemeProvider theme={currMode === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ContainerMenuTheme>
        <CustomizeButton ref={menu_toggle_ref} onClick={() => setActiveMenu()}>
          <i className="fa-solid fa-palette"></i>
        </CustomizeButton>
        <MenuTheme ref={menu_ref} className="active">
          <h4>Theme settings</h4>
          <CloseMenuTheme onClick={() => closeMenu()}>
            <i className="fa-solid fa-xmark"></i>
          </CloseMenuTheme>
          <div className="select">
            <span>Choose mode</span>
            <h4>{currMode === 'light' ? 'lightTheme' : 'darkTheme'}</h4>
            <Btn theme={currMode} switchTheme={switchTheme}></Btn>
          </div>
          <div className="theme-menu__select">
            <span>Choose color</span>
            <ModeList>
              {color_settings.map((item, index) => (
                <li key={index} onClick={() => setColor(item)}>
                  <div
                    className={`mode-list__color ${item.background} ${
                      item.id === currColor ? 'active' : ''
                    }`}
                  >
                    <i className="bx bx-check"></i>
                  </div>
                  <span>{item.name}</span>
                </li>
              ))}
            </ModeList>
          </div>
        </MenuTheme>
      </ContainerMenuTheme>
    </ThemeProvider>
  );
};

export default ThemeMenu;
