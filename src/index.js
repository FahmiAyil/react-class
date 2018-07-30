import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shopping from './components/shopping';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Shopping />, document.getElementById('root'));
registerServiceWorker();
