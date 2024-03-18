import { useState } from "react";
import AlertModal from "../../AlertModal";

const Header = ({option}) => {//possible an attribute to define where the header is used for search option
    const [searchTerm, setSearchTerm] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    // if (option==="personnel"){
        const handleSearch = (e) => {
    e.preventDefault();
    // Handle the search logic for personnel here (personel data base table)
    console.log(searchTerm);
  };
    // }else if (option==="stock"){

    // // }


  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => {
    setShowAlert(false);
  };

  const handleContinue = () => {
    // Add logic to proceed with the action
    
  };


    return (  <div className="flex h-fit mt-10 ml-4 items-center gap-[240px] w-fit">
    <h1 className="text-3xl font-bold text-white bg-green-dark1 p-1 h-fit rounded-sm ">Laboratoire</h1>
    <div className="h-10 flex gap-1">
    <label htmlFor="username " className="text-green-dark1 font-bold p-2 bg-white rounded-s-md">Rechercher  </label>
    <input type="text" placeholder="id, nom ... " className="p-4 font-bold rounded-e-md w-96 outline-none" value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}/>
    <img src="assets/chercher copy.png" alt="" className="w-8 h-10 bg-transparent relative right-10 hover:cursor-pointer" onClick={handleSearch}/>
    <img src="assets/notification copy (1).png" alt="notification" className='size-8 mt-1 ml-[30px]' />
    <div className="relative">
      <img
        src="assets/parametres-gear copy.png"
        alt="parameter"
        className="ml-8 mt-1 hover:cursor-pointer size-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
       {isHovered && (
        <button
          className="absolute right-0 top-10 bg-green-dark1 text-white px-4 py-2 rounded-md"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setShowAlert(true)}
        >
          Deconexion
        </button>
        
      )} {showAlert && <AlertModal onClose={handleClose} onContinue={handleContinue} />}
    </div>

    </div>
    
    </div>  );
}
 
export default Header;