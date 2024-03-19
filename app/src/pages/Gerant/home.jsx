import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AlertModal from '../AlertModal';
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
<div className="h-20 bg-green-dark1 rounded-b-2xl fixed w-full">
    <img src="assets/logo logiciel.png" alt="" className="absolute w-12 m-5  -rotate-45 " />
      <h1 className="text-3xl text-white p-5">Bienvenue dans votre platforme</h1>
</div>
       <div className="">
        <div className=" flex justify-center gap-16 h-screen items-center  ">
            <div className="flex items-center justify-center h-64 w-56 bg-green-dark1 rounded-2xl hover:cursor-pointer">
                <div><img src="assets/en-stock.png" width={100} alt="" className=""/>
            <h1 className=" text-white text-lg font-bold mt-10">Stock</h1>
                    </div> 
            
            </div>
            <Link to="comptabilite">
             <div className=" flex items-center justify-center h-64 w-56 bg-green-dark1 rounded-2xl hover:cursor-pointer">
                <div> <img src="assets/comptabilite.png" width={100} alt="" className=" table mx-auto"/>
            <h1 className=" text-white text-lg font-bold mt-10">Comptabilitee</h1>
            </div> 
           
            </div>
            </Link>
            
            <Link to="/Personnel">
            <div className=" flex items-center justify-center h-64 w-56 bg-green-dark1 rounded-2xl hover:cursor-pointer"> 
            <div>
                 <img src="assets/personnel.png" width={100} alt="" className=""/>
            <h1 className=" text-white text-lg font-bold mt-10">Personnel</h1>
            </div>
           
            </div></Link>
            
           <button className="absolute bottom-24 bg-green-dark1 w-48 text-white h-12 rounded-lg font-bold" onClick={() => setShowAlert(true)} > Deconnexion</button>
           {showAlert && <AlertModal onClose={handleClose} onContinue={handleContinue} />}
        </div>
         
       </div>
    </div> );
}
 
export default Home;