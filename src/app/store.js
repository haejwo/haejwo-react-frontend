import { createStore } from 'redux';

// 초기 상태 정의
const initialState = {
  user: {
    id: null,
    email: null,
    username: null,
  },
};

// 리듀서 정의
function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SAVE_USERNAME':
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload,
        },
      };
    default:
      return state;
  }
}

// 스토어 생성
const store = createStore(userReducer);

export default store;