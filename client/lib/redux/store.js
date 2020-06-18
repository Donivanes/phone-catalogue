import { createStore } from "redux";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "USE_PHONES":
      return state.phones;

    case "SET_PHONES":
      return { ...state, phones: action.phones };
  }
  return state;
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
