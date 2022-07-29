import React from 'react';
import ReactDOM from 'react-dom/client';

import { MyThemeProvider } from './styles/MyThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider />
  </React.StrictMode>,
);
