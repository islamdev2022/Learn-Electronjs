import React, { useState } from 'react';
const Personnel = () => {
    const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle the search logic here
    console.log(searchTerm);
  };
    return ( 
    <div className="flex bg-gray-100">
        <div className="">
             <div className="">
            <div className="w-72 h-40 bg-green-800 flex justify-center rounded-se-3xl">
            <div className="h-fit">
            <img src="assets/compte.png" alt="profile" className="w-28 h-28 "/>
            <h1 className="font-bold text-white">GERANT</h1>
            </div>
            </div>
       <div className="w-72 h-96 bg-green-800 mt-1 flex-col justify-center">
        <ul className="">
             <li className="flex items-center w-60 px-3 float-right gap-5 mt-5  hover:bg-green-400 hover:cursor-pointer rounded-s-xl">
            <img src="assets/lanalyse-des-donnees copy.png" alt="afficher" className="w-10"/>
            <h1 className="font-bold text-white text-xl">AFFICHER</h1>
        </li>
        <li className="flex items-center w-60 px-3 float-right gap-5 mt-5  hover:bg-green-400 hover:cursor-pointer rounded-s-xl">
            <img src="assets/ajouter-un-utilisateur copy.png" alt="ajouter" className="w-10"/>
            <h1 className="font-bold text-white text-xl">AJOUTER</h1>
        </li>
        <li className="flex items-center w-60 px-3 float-right gap-5 mt-5  hover:bg-green-400 hover:cursor-pointer rounded-s-xl">
            <img src="assets/editer copy.png" alt="modifier" className="w-9"/>
            <h1 className="font-bold text-white text-xl">MODIFIER</h1>
        </li>
        <li className="flex items-center w-60 px-3 float-right gap-5 mt-5  hover:bg-green-400 hover:cursor-pointer rounded-s-xl">
            <img src="assets/supprimer copy.png" alt="supprimer" className="w-10"/>
            <h1 className="font-bold text-white text-xl">SUPPRIMER</h1>
        </li>
        </ul>
       
       </div>
       <div className="w-72 h-48 bg-green-800 flex justify-center mt-1 rounded-ee-3xl items-center ">
        <div className="">
            <img src="assets/logo logiciel.png" alt="logo"  className="w-16 -rotate-45 ml-2 mb-2"/>
            <p className="text-white font-bold">Version 1.0</p>
        </div>
        
       </div>
        </div> 
        </div> 
        <div className="w-2 h-screen bg-green-800 ml-2"></div>
        <div className="table h-fit mx-auto">
             <div className="flex h-fit mt-10 items-center gap-40 ">
        <h1 className="text-3xl font-bold text-white bg-green-800 h-fit ">Laboratoire</h1>
        <div className="h-10 flex gap-1">
        <label htmlFor="username " className="text-green-800 font-bold p-2 bg-white rounded-s-xl">Rechercher  </label>
        <input type="text" placeholder="id, nom ,... " className="p-4 font-bold rounded-e-xl w-96 outline-none" value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <img src="assets/chercher copy.png" alt="" className="w-8 h-10 bg-transparent relative right-10 hover:cursor-pointer" onClick={handleSearch}/>
        <img src="assets/notification copy (1).png" alt="notification" />
        <img src="assets/parametres-gear copy.png" alt="paramater" className="ml-10 hover:cursor-pointer" />
        </div>
        </div>
        </div>
       
       
       
 </div> );
}
 
export default Personnel;