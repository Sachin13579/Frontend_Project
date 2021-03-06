import { createStore, applyMiddleware } from "redux";
import { productReducer } from "./Product/reducer";
import thunk from "redux-thunk";
const store = createStore(productReducer, applyMiddleware(thunk));

export { store };
