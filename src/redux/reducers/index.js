import { combineReducers } from "redux";

const geneticReducer = (genetic = null, action) => {
  if (action.type === "GENETIC") {
    return action.payload;
  }
  return genetic;
};

export default combineReducers({
  genetic: geneticReducer,
});
