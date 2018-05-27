import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'

import App from 'src/components/App';
import 'styles';

const node = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, node);
});
