import React, { useState } from 'react';
import Ajouter from './Ajouter';
import Modifier from './Modifier';
import Suprimer from './Suprimer';
import Afficher from './Afficher';
const Personnel = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeItem, setActiveItem] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle the search logic here
    console.log(searchTerm);
  };

  const renderComponent = () => {
    switch (activeItem) {
      case 'item1':
        return <Afficher />;
      case 'item2':
        return <Ajouter />;
      case 'item3':
        return <Modifier />;
      case 'item4':
        return <Suprimer />;
      default:
        return <div>Select an item</div>;
    }
  };
    return ( 
    <div className="flex bg-gray-light">
        <div className="w-1/5">
             <div className="">
            <div className=" h-48 bg-green-dark1 flex justify-center rounded-se-2xl">
            <div className="mt-6">
            <img src="assets/compte.png" alt="profile" className="w-28 h-28 "/>
            <h1 className="font-bold text-white">GERANT</h1>
            </div>
            </div>
       <div className=" h-[417px] bg-green-dark1 mt-2 flex-col justify-center">
        <h1 className='text-2xl font-bold text-white underline pt-3'>Personnel</h1>
        <ul className="pt-5">
             <li className="flex items-center w-60 px-3 float-right gap-5 mb-2 py-1 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg" onClick={() => setActiveItem('item1')}>
            <img src="assets/lanalyse-des-donnees copy.png" alt="afficher" className="w-10"/>
            <h1 className="font-bold text-white text-xl">AFFICHER</h1>
        </li>
        <li className="flex items-center w-60 px-3 float-right gap-5 py-1 mb-2 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg" onClick={() => setActiveItem('item2')}>
            <img src="assets/ajouter-un-utilisateur copy.png" alt="ajouter" className="w-10"/>
            <h1 className="font-bold text-white text-xl">AJOUTER</h1>
        </li>
        <li className="flex items-center w-60 px-3 float-right gap-5 py-1 mb-2 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg" onClick={() => setActiveItem('item3')}>
            <img src="assets/editer copy.png" alt="modifier" className="w-10"/>
            <h1 className="font-bold text-white text-xl">MODIFIER</h1>
        </li>
        <li className="flex items-center w-60 px-3 float-right gap-5 py-1  hover:bg-green-cyan hover:cursor-pointer rounded-s-lg" onClick={() => setActiveItem('item4')}>
            <img src="assets/supprimer copy.png" alt="supprimer" className="w-10"/>
            <h1 className="font-bold text-white text-xl">SUPPRIMER</h1>
        </li>
        </ul>
       
       </div>
       <div className=" h-fit bg-green-dark1 flex justify-center mt-2 rounded-ee-2xl items-center ">
        <div className=" py-3">
            <img src="assets/logo logiciel.png" alt="logo"  className="w-16 -rotate-45 ml-2 mb-2"/>
            <p className="text-white font-bold">Version 1.0</p>
        </div>
        
       </div>
        </div> 
        </div> 
        <div className="w-2 h-screen bg-green-dark1 ml-2"></div>
        <div className="table  h-fit mx-auto">
             <div className="flex h-fit mt-10 items-center gap-64 ">
        <h1 className="text-3xl font-bold text-white bg-green-dark1 p-1 h-fit ">Laboratoire</h1>
        <div className="h-10 flex gap-1">
        <label htmlFor="username " className="text-green-dark1 font-bold p-2 bg-white rounded-s-md">Rechercher  </label>
        <input type="text" placeholder="id, nom ,... " className="p-4 font-bold rounded-e-md w-96 outline-none" value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <img src="assets/chercher copy.png" alt="" className="w-8 h-10 bg-transparent relative right-10 hover:cursor-pointer" onClick={handleSearch}/>
        <img src="assets/notification copy (1).png" alt="notification" className='size-8 mt-1' />
        <img src="assets/parametres-gear copy.png" alt="paramater" className="ml-8 mt-1 hover:cursor-pointer size-8" />
        </div>
        
        </div> 
        <div className="w-full p-4">
        {/* Render the active component */}
        {renderComponent()}
      </div>

        </div>
       
       
      
 </div> );
}
 
export default Personnel;