const initialState = {
  value: false,
};

export function toggle(state = initialState, action) {
  switch (action.type) {
    case 'TESTTOGLE':
      return { ...state, value: action.payload };
    default:
      return state;
  }
}
