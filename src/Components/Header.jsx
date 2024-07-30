import React, { useState, useEffect } from 'react';
import { auth } from '../Firebase/firebase-config';
import { signOut } from 'firebase/auth';

const Header = ({ Navigate, isHome }) => {
  const [user, setUser] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  let lastScrollTop = 0;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!isHome) {
      const handleScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const isAtTop = currentScrollTop <= 0; // Detect if at the top of the page

        // Show header only when at the top of the page
        setIsHeaderVisible(isAtTop);
      };

      window.addEventListener('scroll', handleScroll);

      // Cleanup the event listener on unmount
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Always show header on home page
      setIsHeaderVisible(true);
    }
  }, [isHome]);

  const handleLogout = () => {
    signOut(auth).then(() => {
      Navigate('/');
    }).catch((error) => {
      console.error("Error signing out: ", error);
    });
  };

  return (
    <header className={`fixed top-0 left-0 w-full h-[5vh] bg-blue-500 flex items-center justify-center shadow-md z-50 transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-white text-2xl font-bold">
          <a href="/" onClick={(e) => { e.preventDefault(); Navigate('/'); }}>Business Menu App</a>
        </div>
        <nav className="space-x-4">
          <a href="/" className="text-white hover:text-gray-300" onClick={(e) => { e.preventDefault(); Navigate('/'); }}>Inicio</a>
          {user ? (
            <>
              <span className="text-white">Bienvenido, {user.displayName}</span>
              <button onClick={handleLogout} className="text-white hover:text-gray-300">Cerrar Sesión</button>
            </>
          ) : (
            <>
              <a href="/login" className="text-white hover:text-gray-300" onClick={(e) => { e.preventDefault(); Navigate('/login'); }}>Iniciar Sesión</a>
              <a href="/register" className="text-white hover:text-gray-300" onClick={(e) => { e.preventDefault(); Navigate('/register'); }}>Crear Cuenta</a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
