import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from 'src/store';
import App from 'src/components/App';
import { fetchContent } from 'src/store/ducks/wp-api/actions';
import 'styles';

const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);
const node = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  render(rootComponent, node);
  store.dispatch(fetchContent());
});
