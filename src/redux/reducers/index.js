import ThemeReducer from './ThemeReducer';
import { combineReducers, createStore } from 'redux';
import { toggle } from './test';
const store = createStore(
  combineReducers({
    ThemeReducer: ThemeReducer,
    toggle: toggle,
  })
);
// const rootReducer = combineReducers({ThemeReducer : ThemeReducer})

// export default rootReducer
export default store;
