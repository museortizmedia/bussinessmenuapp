import React from 'react';

const HomePage = () => {
  return (

    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Bienvenido a Business Menu App</h1>
        <p className="mt-4 text-lg text-gray-700">Crea un menú digital para tu negocio de forma gratuita</p>
      </div>
      <main className="mt-8 px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800">Cómo funciona</h2>
          <ol className="mt-4 text-gray-600 list-decimal list-inside space-y-2">
            <li>Crea una cuenta y accede a tu panel de control.</li>
            <li>Define cómo quieres que luzca tu menú: añade productos, precios, y enlaces.</li>
            <li>Obtén tu menú personalizado y compártelo con un enlace o un código QR.</li>
          </ol>
          <div className="mt-6 flex justify-center">
            <a href="/register" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700">
              ¡Empieza Ahora!
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
