const initialState = {
    content: null,
    date: null,
    time: null,
    size_type: null,
    start_info: null,
    end_info: null,
};

function flowerReducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_SIZE_TYPE':
      return {
        ...state,
        size_type: action.payload,
      };
    case 'SAVE_DATE':
      return {
        ...state,
        date: action.payload,
      };
    case 'SAVE_TIME':
      return {
        ...state,
        time: action.payload,
      };
    case 'SAVE_START':
      return {
        ...state,
        start_info: action.payload,
      };
    case 'SAVE_END':
      return {
        ...state,
        end_info: action.payload,
      };
    case 'SAVE_LUGGAGE':
    return {
      ...state,
      move: {
        ...state.move,
        luggage_info: action.payload,
      },
    };    
    case 'SAVE_MEMO':
    return {
      ...state,
      content: action.payload,
    };    
    default:
      return state;
  }
}

export default flowerReducer;