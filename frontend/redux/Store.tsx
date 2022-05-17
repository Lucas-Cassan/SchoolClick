import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer/user.reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";

const rootReducer = combineReducers({ userReducer });

export const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);
