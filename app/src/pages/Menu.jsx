import { useState } from 'react';
import Afficher from './Gerant/Personnel/Afficher';
import Modifier from './Gerant/Personnel/Modifier';
import Suprimer from './Gerant/Personnel/Suprimer';
import Ajouter from './Gerant/Personnel/Ajouter';
const Menu = () => {
    const [activeItem, setActiveItem] = useState(null);

  

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
        return <Afficher></Afficher>;
    }
  };
    return ( 
    <>
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
    </> );
}
 
export default Menu;