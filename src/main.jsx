import React from 'react';
import ReactDOM from 'react-dom/client';
import moment from 'moment';

moment.locale('pt-br');

import { MyThemeProvider } from './styles/MyThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider />
  </React.StrictMode>,
);
