import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Resultats from './Resultats';
import { IoArrowBackSharp } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
import { FaDropbox } from "react-icons/fa";
import Header from '../Header';
const Medcine = () => {


  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => {
    setShowAlert(false);
  };
    
    const [activeItem, setActiveItem] = useState('item1');

  // Add state to track the selected row and its ID
const [selectedRowId, setSelectedRowId] = useState(null);
const [selectedDetails,setSelectedDetails]= useState(null)
const [selectedRowCount, setSelectedRowCount] = useState(0)

// Define a callback function to update the selected row ID
const handleRowSelection = (id ,count) => {
  setSelectedRowId(id);
  setSelectedRowCount(count);
};

  const renderComponent = () => {
    switch (activeItem) {
      case 'item1':
        return <Resultats></Resultats>
      case 'item2':
        return 
      case 'item3':
        return 
      case 'item4':
        return 
      default:
        return <Resultats></Resultats>
    }
  };
    return ( 
    <div className="flex bg-gray-light">
        <div className="w-1/5 bg-gradient-to-t from-green-cyan1 to-green-dark1 h-screen rounded-e-2xl">
       <Link to='/home'> <IoArrowBackSharp className="text-white text-3xl m-2 absolute"/></Link>
             <div className="h-screen">
            <div className=" h-1/4  flex justify-center ">
            <div className="mt-6">
            <img src="assets/compte.png" alt="profile" className="w-28 h-28 "/>
            <h1 className="font-bold text-white">Medcine</h1>
            
            </div>
            </div>
            
       <div className=" h-2/4  flex-col justify-center">
        <hr className='bg-white h-1'/>
        <ul className="pt-5">
             <li className={`flex items-center w-60 px-3 float-right gap-5 mb-2 py-2 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg 
             ${activeItem === 'item1' ? 'bg-green-cyan' : ''}`} onClick={() => setActiveItem('item1')}>
            <GrNotes className='w-10 text-white size-7' />
            <h1 className="font-bold text-white text-xl">Resultats</h1>
        </li>
        <li className={`flex items-center w-60 px-3 float-right gap-5 py-2 mb-2 hover:bg-green-cyan hover:cursor-pointer rounded-s-lg 
        ${activeItem === 'item2' ? 'bg-green-cyan' : ''}`} onClick={() => setActiveItem('item2')}>            
        <FaDropbox className='w-10 text-white size-7'/>
            <h1 className="font-bold text-white text-xl">Produits</h1>
        </li>
        
           </ul>
       
       </div>
       <hr className='bg-white h-1'/>
       <div className=" h-1/4 flex justify-center rounded-ee-2xl items-center ">
        <div className=" py-3">
            <img src="assets/logo logiciel.png" alt="logo"  className="w-16 -rotate-45 ml-2 mb-2"/>
            <p className="text-white font-bold">Version 1.0</p>
        </div>
        
       </div>
        </div> 
        </div> 
        <div className="w-2 h-screen ml-2 bg-green-dark1"></div>
        <div className="table h-screen mx-auto ">
            <Header choice="comptabilite"></Header>
        <div className="w-[1100px] px-4 pt-4 ">
        {/* Render the active component */}
        {renderComponent()}
      </div>

        </div>
       
       
      
 </div> );
}
 
export default Medcine;