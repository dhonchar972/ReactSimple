import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/baseReducer";

// @deprecated
// We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
)