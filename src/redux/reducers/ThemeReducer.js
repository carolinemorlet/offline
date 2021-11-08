const ThemeReducer = (state = { darkThemeenabled: false }, action) => {
  switch (action.type) {
    case 'SET_MODE':
      return {
        ...state,
        darkThemeenabled: !state.darkThemeenabled,
        mode: action.payload,
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};

export default ThemeReducer;
