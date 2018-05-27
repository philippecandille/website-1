import { combineReducers } from 'redux';

import posts from './posts';

const appReducer = combineReducers({
  posts,
});

export default appReducer;
