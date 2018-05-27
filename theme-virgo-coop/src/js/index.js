import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'

import App from 'Components/App';
import 'Styles/index.scss';

const node = document.getElementById('root');

render(<App />, node);
