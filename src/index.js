import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18 için güncellenmiş import
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store/configureStore';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore();

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
