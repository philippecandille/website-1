import { createStore, applyMiddleware, compose } from 'redux';

import appReducer from './reducers';
import wpApi from './middlewares/wp-api';

let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()]
}

const wpApiMiddleware = applyMiddleware(wpApi);
const enhancers = compose(wpApiMiddleware, ...devTools);
const store = createStore(appReducer, enhancers);

export default store;
