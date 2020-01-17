import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import Store from './Store/Store';

import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render( <Provider store={Store}> 
	<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
