import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/globalStyles';
import GlobalFont from './asset/fonts/font';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    {/*<GlobalFont />*/}
    <App />
  </BrowserRouter>,
);
