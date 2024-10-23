// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RouteSwitch from './RouteSwitch'; // Apenas RouteSwitch

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RouteSwitch />  {/* Mantenha apenas as rotas aqui */}
  </BrowserRouter>
);








// src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import './index.css'; // ou './App.css'
// import RouteSwitch from './RouteSwitch';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//     <RouteSwitch />
//   </BrowserRouter>
// );

