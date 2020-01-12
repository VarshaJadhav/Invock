import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from './reducers';

const middlewares = applyMiddleware(ReduxThunk);

const store = createStore(reducers, middlewares);

export default store;
