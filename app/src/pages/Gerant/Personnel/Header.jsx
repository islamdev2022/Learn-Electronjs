import { useState } from "react";


const Header = () => {//possible an attribute to define where the header is used for search option
    const [searchTerm, setSearchTerm] = useState('');
const handleSearch = (e) => {
    e.preventDefault();
    // Handle the search logic here
    console.log(searchTerm);
  };
    return (  <div className="flex h-fit mt-10 items-center gap-64 ">
    <h1 className="text-3xl font-bold text-white bg-green-dark1 p-1 h-fit ">Laboratoire</h1>
    <div className="h-10 flex gap-1">
    <label htmlFor="username " className="text-green-dark1 font-bold p-2 bg-white rounded-s-md">Rechercher  </label>
    <input type="text" placeholder="id, nom ,... " className="p-4 font-bold rounded-e-md w-96 outline-none" value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}/>
    <img src="assets/chercher copy.png" alt="" className="w-8 h-10 bg-transparent relative right-10 hover:cursor-pointer" onClick={handleSearch}/>
    <img src="assets/notification copy (1).png" alt="notification" className='size-8 mt-1' />
    <img src="assets/parametres-gear copy.png" alt="paramater" className="ml-8 mt-1 hover:cursor-pointer size-8" />
    </div>
    
    </div>  );
}
 
export default Header;