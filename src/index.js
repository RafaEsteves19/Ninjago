import React from 'react';
import ReactDOM from 'react-dom/client'; // Importar o cliente para React 18
import App from './App';
import './index.css'; // Se você tiver um arquivo de estilos global

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
