const DEFAULT_STATE = {
  searchTerm: ''
};

// takes in state and action and returns updated state
// must be PURE FUNCTION. no side effects
// must handle default state
// action: object
const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
