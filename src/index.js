import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shopping from './components/shopping';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import logger from "redux-logger";

// React
import "material-components-web/dist/material-components-web.min.css";

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <Shopping />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
