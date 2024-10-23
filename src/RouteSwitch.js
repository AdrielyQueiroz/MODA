// src/RouteSwitch.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/App/index'

const RouteSwitch = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      {/* <Route path="/EdicaoDigital" element={<EdicaoDigital />} /> */}
    </Routes>
  );
};

export default RouteSwitch;





// rc/RouteSwitch.js
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home'; // Verifique se o caminho está correto
// import EdicaoDigital from './pages/EdicaoDigital';

// const RouteSwitch = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/EdicaoDigital" element={<EdicaoDigital />} />
//     </Routes>
//   );
// };

// export default RouteSwitch;

