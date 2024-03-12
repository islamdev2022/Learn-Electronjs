import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the login logic
    console.log(username, password);
  };

  return (
    <div className="flex min-h-screen bg-gray-200">
      <div className="flex flex-col w-full md:flex-row">
        <div className="flex items-center justify-center w-full md:w-1/2 bg-green-600 p-8">
          <div className="max-w-xs">
            <h1 className="text-white text-4xl mb-2">Bienvenue !</h1>
            <div className="bg-white p-2 rounded-lg">
              {/* Placeholder for the logo or image */}
              <div className="bg-gray-300 h-24 w-24 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2 p-8">
          <div className="max-w-md w-full">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Identifiant
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Identifiant"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Mot de passe
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Se connecter
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
                  href="#"
                >
                  J'ai besoin d'aide pour accéder à mon compte?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
