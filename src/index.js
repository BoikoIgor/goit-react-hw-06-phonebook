import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    main: '#212121',
    second: 'mediumseagreen',
    accent: 'orangered',
    error: 'red',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/goit-react-hw-06-phonebook">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
