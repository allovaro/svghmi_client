import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

// eslint-disable-next-line import/prefer-default-export
export { store };
