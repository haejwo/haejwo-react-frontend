import { createStore } from 'redux';

// 초기 상태 정의
const initialState = {
    move: {
        content: null,
        date: null,
        time: null,
        size_type: null,
        packing_type: null,
        customer_support: false,
        start_info: null,
        end_info: null,
        luggage_info: null,
    },
};

// 리듀서 정의
function moveReducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_SIZE_TYPE':
      return {
        ...state,
        move: {
          ...state.move,
          size_type: action.payload,
        },
      };
    case 'SAVE_PACKING_TYPE':
      return {
        ...state,
        move: {
          ...state.move,
          packing_type: action.payload,
        },
      };
    case 'SAVE_SUPPORT':
      return {
        ...state,
        move: {
          ...state.move,
          customer_support: action.payload,
        },
      };
    case 'SAVE_DATE':
      return {
        ...state,
        move: {
          ...state.move,
          date: action.payload,
        },
      };
    case 'SAVE_TIME':
      return {
        ...state,
        move: {
          ...state.move,
          time: action.payload,
        },
      };
    case 'SAVE_START':
      return {
        ...state,
        move: {
          ...state.move,
          start_info: action.payload,
        },
      };
    case 'SAVE_END':
      return {
        ...state,
        move: {
          ...state.move,
          end_info: action.payload,
        },
      };
      case 'SAVE_LUGGAGE':
    return {
      ...state,
      move: {
        ...state.move,
        luggage_info: action.payload,
      },
    };    
    default:
      return state;
  }
}

// 스토어 생성
const movestore = createStore(moveReducer);

export default movestore;