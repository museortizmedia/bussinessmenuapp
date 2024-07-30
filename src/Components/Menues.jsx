import React from 'react';

const MenuEditable = ({ username }) => {
  return (
    <div className='h-[500hv] bg-pink-100'>
      <h1>Bienvenido, {username}</h1>
      {/* Renderizar el menú personalizado del usuario */}
      <p>Este es tu menú personalizado.</p>
    </div>
  );
};

const MenuNormal = ({ username }) => {
  return (
    <div className='h-[500vh] bg-pink-100'>
      <h1>Perfil de {username}</h1>
      {/* Mostrar el menú público del usuario */}
      <p>Este es el menú público del usuario.</p>
    </div>
  );
};

export { MenuEditable, MenuNormal };
