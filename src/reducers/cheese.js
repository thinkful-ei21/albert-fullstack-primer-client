const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

export default function cheeseReducer(state = initialState, action) {
  if (action.type === 'FETCH_CHEESE_REQUEST') {
    return {
      ...state,
      loading: true
    };
  } else if (action.type === 'FETCH_CHEESE_SUCCESS') {
    return {
      ...state,
      cheeses: action.cheeses,
      loading: false
    };
  } else if (action.type === 'FETCH_CHEESE_FAILURE') {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
  return state;
};
