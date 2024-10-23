// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <nav className='flex space-x-20 justify-center bg-black h-16 text-slate-50'>
          <Link to="/EdicaoDigital" className='mt-5 hover:text-gray-200'>Edição Digital</Link>
          {/* Outros links */}
        </nav>
      </div>
      <div className='flex justify-center'>
        {/* <img src={Moda} alt="Banner Moda" className='w-3/4 h-auto mt-10 object-cover hover:opacity-80'/> */}
        <h1 className='absolute text-zinc-900 font-bold text-5xl top-2/3 left-72 p-4'>Crie e personalize o seu melhor projeto</h1>
      </div>
    </div>
  )
}

export default Home;








// import React from 'react'
// import Moda from '../images/moda.jpg'

// // importando navegação
// import {Link} from 'react-router-dom'

// const Home = () => {
//   // const navigate = useNavigate();

//   // const handleNavigateToEdicaoDigital = () => {
//   //   navigate('/EdicaoDigital');  // Corrigido para navegação correta
//   // };


//   return (
//     <div>
//         <div>
//             <nav className='flex space-x-20 justify-center bg-black h-16 text-slate-50'>
//                 <Link to="/EdicaoDigital" className='mt-5 hover:text-gray-200'>Edição Digital</Link>
//                 <a href="#" className='mt-5 hover:text-gray-200'>Moda</a>
//                 <a href="#" className='mt-5 hover:text-gray-200'>Beleza</a>
//                 <a href="#" className='mt-5 hover:text-gray-200'>Cultura</a>
//                 <a href="#" className='mt-5 hover:text-gray-200'>LifeStyle</a>
//                 <a href="#" className='mt-5 hover:text-gray-200'>Inspirações</a>
//                 <a href="#" className='mt-5 hover:text-gray-200'>Idade</a>
//             </nav>
//         </div>
//         <div className='flex justify-center'>
//             <img src={Moda} alt="Banner Moda" className='w-3/4 h-auto mt-10 object-cover hover:opacity-80'/>
//             <h1 className='absolute text-zinc-900 font-bold text-5xl top-2/3 left-72 p-4'>Crie e personalize o seu melhor projeto</h1>
//         </div>
//     </div>
//   )
// }

// export default Home
