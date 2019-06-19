import { FETCHING, SUCCESS, FAILURE } /* we need our action types here*/ from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING: 
      return {
        ...state,
        isFetching: true,
      }
    case SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false
      }
    case FAILURE:
      return {
        ...state,
        isFetching: false,
        error: 'Error getting data'
      }
    default:
      return state;
  }
};
