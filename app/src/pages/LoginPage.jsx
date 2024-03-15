import React, { useState } from 'react';
import {Link } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the login logic
    console.log(username);
    console.log(password)
  };

  return (
    <div className="flex min-h-screen  bg-white"> 
      <div className="flex flex-col w-full md:flex-row"> 
      <img src="assets/logo logiciel.png" alt="" className='absolute w-10 -rotate-45 m-3'/>
     <img src="assets/background.jpg" width={500} alt=""  />
     <h1 className='text-white text-5xl absolute top-28 left-32'>Bienvenue !</h1>
     <img src="assets/logo.png" alt="" width={550} className='absolute m-36 ' />
        <div className="flex items-center justify-end w-full md:w-1/2 p-8">
          <div className="max-w-md w-full">
            <h1 className='text-4xl relative bottom-32'>Connectez-vous</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="mb-4">
              <label htmlFor="input" className="text-xs text-green font-semibold relative top-2 mr-72 bg-white px-1">
    Identifiant
  </label>
  <input 
    type="text" 
    placeholder="Write here..." 
    name="input" 
    className="p-4 text-xs border border-green rounded-sm bg-gray-200 focus:outline-none w-96 "
    onChange={(e) => setPassword(e.target.value)}
  />
              </div>
              <div className='mb-20'>
                <label className="text-xs text-green font-semibold relative top-2 mr-72 bg-white px-1" htmlFor="password">
                  Mot de passe
                </label>
                <input
                  className="p-4 text-xs border border-green rounded-sm bg-gray-200 focus:outline-none w-96"
                  id="password"
                  type="password"
                  placeholder="******************"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center mb-20">
                <Link to="/home"><button
                  className=" bg-green-dark1 text-lg text-white font-bold py-3 mt-6 rounded-lg w-44 focus:outline-none focus:shadow-outline"
                  type="submit">Se connecter</button>
                </Link>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
