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
    <div className="flex min-h-screen bg-gradient-to-t from-green-cyan1 to-green-dark1  bg-gray"> 
      <div className="flex flex-col w-full md:flex-row "> 
      <img src="assets/logo logiciel.png" alt="" className='absolute w-10 -rotate-45 m-3'/>
     {/* <img src="assets/background.jpg" width={500} alt=""  /> */}
     <div className=' w-1/3'></div>
     <h1 className='text-white text-5xl absolute top-28 left-32'>Bienvenue !</h1>
     <img src="assets/logo.svg" alt="" width={600} className='absolute mt-24 ml-32 ' />
        <div className="flex items-center justify-center  w-2/3 bg-white rounded-s-2xl  p-8">
          <div className="max-w-md w-full">
            <h1 className='text-4xl relative bottom-28'>Connectez-vous</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="mb-4">
              <label htmlFor="input" className="text-sm text-green font-semibold relative top-2 mr-72 bg-white px-1">
    Identifiant
  </label>
  <input 
    type="text" 
    placeholder="Write here..." 
    name="input" 
    className="p-5 text-xs border border-green rounded-sm bg-gray-200 focus:outline-none w-[410px] "
    onChange={(e) => setPassword(e.target.value)}
  />
              </div>
              <div className='mb-20'>
                <label className="text-sm text-green font-semibold relative top-2 mr-72 bg-white px-1" htmlFor="password">
                  Mot de passe
                </label>
                <input
                  className="p-5 text-xs border border-green rounded-sm bg-gray-200 focus:outline-none w-[410px]"
                  id="password"
                  type="password"
                  placeholder="******************"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center mb-20">
                <Link to="/home"><button
                  className=" bg-green-dark1 text-lg text-white font-bold py-3 mt-10 rounded-lg w-44 focus:outline-none focus:shadow-outline"
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
