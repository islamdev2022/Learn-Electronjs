import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const AlertModal = ({ onClose, onContinue }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-white p-6 rounded-3xl shadow-lg w-96">
        <h2 className="text-lg font-bold mb-8">Voulez-vous deconnecter ?</h2>
        
        <div className="flex justify-evenly">
        <Link to="/"><button onClick={onContinue} className="bg-green-900 px-8 h-8 text-white rounded-3xl font-bold">
            Oui
          </button>
          </Link>
          <button onClick={onClose} className="bg-gray-400 rounded-3xl h-8 px-6 font-bold text-white">
            Annuler
          </button>
          
        </div>
      </div>
    </div>
  );
};
const Home = () => {

    const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => {
    setShowAlert(false);
  };

  const handleContinue = () => {
    // Add logic to proceed with the action
    
  };
    return (
         <div>
<div className="h-20 bg-green-800 rounded-b-3xl fixed w-full">
    <img src="assets/logo logiciel.png" alt="" className="absolute w-12 m-5  -rotate-45 " />
      <h1 className="text-3xl text-white p-5">Bienvenue dans votre platforme</h1>
</div>
       <div className="">
        <div className=" flex justify-evenly h-screen items-center  ">
            <div className="flex items-center justify-center h-48 w-40 bg-green-900 rounded-lg hover:cursor-pointer">
                <div><img src="assets/en-stock.png" width={100} alt="" className=""/>
            <h1 className=" text-white font-bold mt-3">Stock</h1>
                    </div> 
            
            </div>
             <div className=" flex items-center justify-center h-48 w-40 bg-green-900 rounded-lg hover:cursor-pointer">
                <div> <img src="assets/comptabilite.png" width={100} alt="" className="ml-1"/>
            <h1 className=" text-white font-bold mt-3">Comptabilitee</h1>
            </div> 
           
            </div>
            <Link to="/Personnel">
            <div className=" flex items-center justify-center h-48 w-40 bg-green-900 rounded-lg hover:cursor-pointer"> 
            <div>
                 <img src="assets/personnel.png" width={100} alt="" className=""/>
            <h1 className=" text-white font-bold mt-3">Personnel</h1>
            </div>
           
            </div></Link>
            
           <button className="absolute bottom-32 bg-green-800 w-40 text-white h-10 rounded-xl font-bold" onClick={() => setShowAlert(true)} > Deconnexion</button>
           {showAlert && <AlertModal onClose={handleClose} onContinue={handleContinue} />}
        </div>
         
       </div>
    </div> );
}
 
export default Home;