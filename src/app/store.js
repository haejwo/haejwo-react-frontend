import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';
import moveReducer from './moveReducer';

const rootReducer = combineReducers({
  user: userReducer,
  move: moveReducer,
});

const store = createStore(rootReducer);

export default store;