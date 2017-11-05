import { SET_SEARCH_TERM } from './actions';

const DEFAULT_STATE = {
  searchTerm: ''
};

const setSearchTerm = (state, action) =>
  // do not modify the original state!! return a new state.
  // does a shallow check and will assume nothing changed if same object
  Object.assign({}, state, { searchTerm: action.payload });

// takes in state and action and returns updated state
// must be PURE FUNCTION. no side effects
// must handle default state
// action: object
const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    default:
      return state;
  }
};

export default rootReducer;
