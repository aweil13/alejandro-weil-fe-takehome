import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { store } from './store/store'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter> 
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);



