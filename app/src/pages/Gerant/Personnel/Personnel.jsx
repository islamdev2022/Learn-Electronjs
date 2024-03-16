import React, { useState } from 'react';
import Suprimer from './Suprimer';
import Afficher from './Afficher';
import AM from './AM';
import Header from './Header';
const Personnel = () => {


  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => {
    setShowAlert(false);
  };
    
    const [activeItem, setActiveItem] = useState(null);

  

  const renderComponent = () => {
    switch (activeItem) {
      case 'item1':
        return <Afficher/>
      case 'item2':
        return <AM option="Ajouter" />;
      case 'item3':
        return <AM option="Modifier" id={2}/>;
      case 'item4':
        return <Suprimer />;
      default:
        return <Afficher></Afficher>;
    }
  };
    return ( 
    <div className="flex bg-gray-light">
        <div className="w-1/5 bg-gradient-to-t from-green-cyan1 to-green-dark1 h-screen rounded-e-2xl">
             <div className="">
            <div className=" h-48  flex justify-center ">
            <div className="mt-6">
            <img src="assets/compte.png" alt="profile" className="w-28 h-28 "/>
            <h1 className="font-bold text-white">GERANT</h1>
            </div>
            </div>
            
       <div className=" h-[417px] mt-2 flex-col justify-center">
        <hr className='bg-white h-1'/>
        <h1 className='text-2xl font-bold text-white underline pt-3'>Personnel</h1>
        <ul className="pt-5">
             <li className={`flex items-center w-60 px-3 float-right gap-5 mb-2 py-1 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg ${activeItem === 'item1' ? 'bg-green-cyan' : ''}`} onClick={() => setActiveItem('item1')}>
            <img src="assets/lanalyse-des-donnees copy.png" alt="afficher" className="w-10"/>
            <h1 className="font-bold text-white text-xl">AFFICHER</h1>
        </li>
        <li className={`flex items-center w-60 px-3 float-right gap-5 py-1 mb-2 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg ${activeItem === 'item2' ? 'bg-green-cyan' : ''}`} onClick={() => setActiveItem('item2')}>            
        <img src="assets/ajouter-un-utilisateur copy.png" alt="ajouter" className="w-10"/>
            <h1 className="font-bold text-white text-xl">AJOUTER</h1>
        </li>
        <li className={`flex items-center w-60 px-3 float-right gap-5 py-1 mb-2 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg ${activeItem === 'item3' ? 'bg-green-cyan' : ''}`} onClick={() => setActiveItem('item3')}>            
        <img src="assets/editer copy.png" alt="modifier" className="w-10"/>
            <h1 className="font-bold text-white text-xl">MODIFIER</h1>
        </li>
        <li className={`flex items-center w-60 px-3 float-right gap-5 py-1 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg ${activeItem === 'item4' ? 'bg-green-cyan' : ''}`} onClick={() => {setActiveItem('item4') }}>            
        <img src="assets/supprimer copy.png" alt="supprimer" className="w-10"/>
            <h1 className="font-bold text-white text-xl">SUPPRIMER</h1>
        </li>
        </ul>
       
       </div>
       <hr className='bg-white h-1'/>
       <div className="  flex justify-center mt-2 rounded-ee-2xl items-center ">
        <div className=" py-3">
            <img src="assets/logo logiciel.png" alt="logo"  className="w-16 -rotate-45 ml-2 mb-2"/>
            <p className="text-white font-bold">Version 1.0</p>
        </div>
        
       </div>
        </div> 
        </div> 
        <div className="w-2 h-screen ml-2 bg-green-dark1"></div>
        <div className="table h-fit mx-auto">
            <Header></Header>
        <div className="w-[1100px] h-fit p-4">
        {/* Render the active component */}
        {renderComponent()}
      </div>

        </div>
       
       
      
 </div> );
}
 
export default Personnel;