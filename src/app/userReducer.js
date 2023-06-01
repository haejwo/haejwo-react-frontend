const initialState = {
    user: {
      id: null,
      email: null,
      username: null,
      bankName: null,
      accountNumber: null,
      role: null,
      category: null,
      businessfile: false,
    },
  };
  
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
    case 'SAVE_BANKNAME':
      return {
        ...state,
        user: {
          ...state.user,
          bankName: action.payload,
        },
      };
    case 'SAVE_ACCOUNTNUMBER':
      return {
        ...state,
        user: {
          ...state.user,
          accountNumber: action.payload,
        },
      };
    case 'SAVE_ROLE':
      return {
        ...state,
        user: {
          ...state.user,
          role: action.payload,
        },
      };
    case 'SAVE_CATEGORY':
      return {
        ...state,
        user: {
          ...state.user,
          category: action.payload,
        },
      };
    case 'SAVE_BusinessFile':
      return {
        ...state,
        user: {
          ...state.user,
          businessfile: action.payload,
        },
      };    
    default:
      return state;
  }
}

export default userReducer;