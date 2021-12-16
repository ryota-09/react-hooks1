import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FragProvider } from './components/providers/FragProvider'

ReactDOM.render(
  <React.StrictMode>
    <FragProvider>
      <App />
    </FragProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
