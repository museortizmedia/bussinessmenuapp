import React, { useState, useEffect } from 'react';

const Footer = ({ isHome }) => {
  const [isFooterVisible, setIsFooterVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (isHome) {
        setIsFooterVisible(true);
        return;
      }

      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const isAtBottom = (currentScrollTop + windowHeight) >= (documentHeight - 100); // Ajustar el umbral según sea necesario

      setIsFooterVisible(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]); // Depend on `isHome`

  return (
    <footer className={`fixed bottom-0 left-0 w-full h-[5vh] bg-gray-800 flex items-center justify-center text-white shadow-md z-50 transition-transform duration-300 ${isFooterVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-sm">
          © 2024 Business Menu App. Todos los derechos reservados.
        </div>
        <div className="space-x-4">
          <a href="/terms" className="hover:text-gray-400">Términos</a>
          <a href="/privacy" className="hover:text-gray-400">Privacidad</a>
          <a href="/contact" className="hover:text-gray-400">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
