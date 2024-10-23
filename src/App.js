// src/App.js
import React from 'react';
import Index from './pages/App/index'
import { Link } from 'react-router-dom';
import Moda from '../images/moda.jpg'; // Certifique-se de que o caminho da imagem está correto

const App = () => {
  return (
    <div>
      <Index />
      {/* <nav className='flex space-x-20 justify-center bg-black h-16 text-slate-50'>                
        <Link to="/EdicaoDigital" className='mt-5 hover:text-gray-200'>Edição Digital</Link>
        <Link to="#" className='mt-5 hover:text-gray-200'>Moda</Link>
        <Link to="#" className='mt-5 hover:text-gray-200'>Beleza</Link>
        <Link to="#" className='mt-5 hover:text-gray-200'>Cultura</Link>
        <Link to="#" className='mt-5 hover:text-gray-200'>LifeStyle</Link>
        <Link to="#" className='mt-5 hover:text-gray-200'>Inspirações</Link>
        <Link to="#" className='mt-5 hover:text-gray-200'>Idade</Link>
      </nav>
      <div className='flex justify-center'>
        <img src={Moda} alt="Banner Moda" className='w-3/4 h-auto mt-10 object-cover hover:opacity-80'/>
        <h1 className='absolute text-zinc-900 font-bold text-5xl top-2/3 left-72 p-4'>Crie e personalize o seu melhor projeto</h1>
      </div>
    </div> */}
  );
};

{/* export default App; */}









{/* //   return (
//     <div>
//       <Home />
//       {/* <RouteSwitch /> */}
//     </div>
//   );
// };

// export default App;





// import './App.css';


// import Home from '../src/components/Home'
// function App() { */}
//   return (
//     <div className="App">
//       <Home />
    
//     </div>
//   );
// }

// export default App;
