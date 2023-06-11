import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';
import moveReducer from './moveReducer';
import flowerReducer from './flowerReducer';

const rootReducer = combineReducers({
  user: userReducer,
  move: moveReducer,
  flower: flowerReducer,
});

const store = createStore(rootReducer);

export default store;