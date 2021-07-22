import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { bikesReducer } from '../reducers/bikesReducer';
import { loadingReducer } from '../reducers/loadingReducer';
import { paginateReducer } from '../reducers/paginateReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const composeEnhancers = compose;

const reducers = combineReducers({
  bikes: bikesReducer,
  loader: loadingReducer,
  page: paginateReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);