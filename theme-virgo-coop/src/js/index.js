import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'

import '../styles/index.scss';

const App = () => (
  <div className="virgo">Hello Virgo :)</div>
);

const node = document.getElementById('root');

render(<App />, node);
