import React, { useRef, useState, useEffect } from 'react';

import './thememenu.css';

import { useDispatch, useSelector, connect } from 'react-redux';

import ThemeAction from '../redux/actions/ThemeAction';

import {
  GlobalStyles,
  MenuTheme,
  CloseMenuTheme,
  CustomizeButton,
  ContainerMenuTheme,
} from '../styledComponents/styled';

const mode_settings = [
  {
    id: 'light',
    name: 'Light',
    background: 'light-background',
    class: 'theme-mode-light',
  },
  {
    id: 'dark',
    name: 'Dark',
    background: 'dark-background',
    class: 'theme-mode-dark',
  },
];

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

const ThemeMenu = ({ toggle }) => {
  const menu_ref = useRef(null);
  const menu_toggle_ref = useRef(null);

  clickOutsideRef(menu_ref, menu_toggle_ref);

  const setActiveMenu = () => menu_ref.current.classList.add('active');

  const closeMenu = () => menu_ref.current.classList.remove('active');

  const [currMode, setcurrMode] = useState('light');

  const [currColor, setcurrColor] = useState('blue');

  const dispatch = useDispatch();
  const to = useSelector((state) => state.toggle.value);
  const setMode = (mode) => {
    setcurrMode(mode.id);
    localStorage.setItem('themeMode', mode.class);
    // dispatch(ThemeAction.setMode(mode.class));
    alert('hello');
    dispatch({ type: 'TESTTOGLE', payload: !toggle.value });
  };

  const setColor = (color) => {
    setcurrColor(color.id);
    localStorage.setItem('colorMode', color.class);
    dispatch(ThemeAction.setColor(color.class));
    // alert('hello');
    // dispatch({ type: 'TESTTOGLE', payload: !toggle.value });
  };

  useEffect(() => {
    console.log(toggle);
    const themeClass = mode_settings.find(
      (e) => e.class === localStorage.getItem('themeMode', 'theme-mode-light')
    );

    const colorClass = color_settings.find(
      (e) => e.class === localStorage.getItem('colorMode', 'theme-mode-light')
    );

    if (themeClass !== undefined) setcurrMode(themeClass.id);

    if (colorClass !== undefined) setcurrColor(colorClass.id);
  }, [toggle.value]);

  return (
    <div style={{ textAlign: 'center' }}>
      <GlobalStyles />
      <ContainerMenuTheme>
        <CustomizeButton
          ref={menu_toggle_ref}
          className="my-btn"
          onClick={() => setActiveMenu()}
        >
          <i className="fa-solid fa-palette"></i>
          {'  '} Customize
        </CustomizeButton>
        <MenuTheme ref={menu_ref} className="theme-menu">
          <h4 style={{ color: toggle.value ? 'red' : 'blue' }}>
            Theme settings
          </h4>
          <CloseMenuTheme onClick={() => closeMenu()}>
            <i className="fa-solid fa-xmark"></i>
          </CloseMenuTheme>
          <div className="select">
            <span>Choose mode</span>
            <ul className="mode-list">
              {mode_settings.map((item, index) => (
                <li key={index} onClick={() => setMode(item)}>
                  <div
                    className={`mode-list__color ${item.background} ${
                      item.id === currMode ? 'active' : ''
                    }`}
                  >
                    <i className="bx bx-check"></i>
                  </div>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="theme-menu__select">
            <span>Choose color</span>
            <ul className="mode-list">
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
            </ul>
          </div>
        </MenuTheme>
      </ContainerMenuTheme>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    toggle: state.toggle,
  };
};
export default connect(mapStateToProps)(ThemeMenu);
