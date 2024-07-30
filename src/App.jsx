import React, { useState, useEffect } from 'react';
import './App.css';
import { Navigate } from './navigate';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Menu from './Pages/Menu';

function App() {
  const [currentPage, setCurrentPage] = useState('/');
  const [userId, setUserId] = useState(null); // Estado para manejar el ID del usuario

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const pathSegments = path.split('/').filter(segment => segment); // Obtiene los segmentos de la ruta
      const queryParams = new URLSearchParams(window.location.search);
      const user = queryParams.get('user');

      if (pathSegments.length === 0 || pathSegments[0] === '') {
        setCurrentPage('/');
        setUserId(null);
      } else if (['login', 'register'].includes(pathSegments[0])) {
        setCurrentPage(`/${pathSegments[0]}`);
        setUserId(null);
      } else {
        setCurrentPage('/menu'); // Rutas desconocidas se redirigen al menú
        setUserId(pathSegments[0]); // El primer segmento se usa como userId
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const pages = {
    '/': <HomePage Navigate={Navigate} />,
    '/login': <Login Navigate={Navigate} />,
    '/register': <Register Navigate={Navigate} />,
  };

  // Determinar el componente a renderizar
  const PageComponent = pages[currentPage] || <Menu username={userId} />;

  return (
    <div className="flex flex-col min-h-screen">
      <Header Navigate={Navigate} isHome={currentPage=='/'||currentPage=='/login'||currentPage=='/register'} />
      <main className="flex-grow mt-[10vh] mb-[10vh]">
        {PageComponent}
      </main>
      <Footer isHome={currentPage=='/'||currentPage=='/login'||currentPage=='/register'}/>
    </div>
  );
}

export default App;
