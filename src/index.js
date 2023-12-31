import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store/configureStore';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
