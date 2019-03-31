import { createStore, applyMiddleware } from "redux";
import reducer from "./state/reducer";
import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(promiseMiddleware(thunk)));
export default store;
