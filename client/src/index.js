import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { globalCSS } from './assets/styles/globalStyle';
import App from './App';

injectGlobal`${globalCSS}`;

ReactDOM.render(<App />, document.getElementById('root'));

/* eslint no-undef: "off", no-unused-expressions: "off" */
