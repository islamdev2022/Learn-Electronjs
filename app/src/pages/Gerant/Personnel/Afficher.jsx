import { IoIosMan } from "react-icons/io";
import { useState } from "react";
const Afficher = () => {

    const [selectedRows, setSelectedRows] = useState([]);

  // Function to handle row click and toggle selection
  const handleRowClick = (id) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      // Add the ID to the selected rows if it's not already selected
      newSelected = [...selectedRows, id];
    } else {
      // Remove the ID from the selected rows if it's already selected
      newSelected = selectedRows.filter((rowId) => rowId !== id);
    }

    setSelectedRows(newSelected);
  };

    return ( <>
    
    <div className="w-[1100px] h-full flex gap-10 mt-12">
<div className="  scrollbar-thumb-rounded-ful bg-green h-[500px] rounded-b-2xl scrollbar-thumb-green-cyan overflow-y-scroll w-5/6 ">
    <table className="text-xl  bg-green text-white rounded-b-lg w-full  ">
        
    <tr className="h-10 z-3 fixed w-[885px] bg-green-cyan rounded-t-xl top-28">
        <th className="w-20">#</th>
        <th className="w-[270px]">Nom</th>
        <th className="w-[420px]">Prenom</th>
        <th className="w-[118px]">Id</th>
        <th className="w-20">Select</th>
    </tr>
   
    <tr className="h-16">
        <th>#</th>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Id</th>
        <input
                  type="checkbox"
                  checked={selectedRows.includes(1)}
                  onChange={() => handleRowClick(1)}
                />
    </tr>
    <tr className="h-16">
        <th>#</th>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Id</th>
    </tr>
    <tr className="h-16">
        <th>#</th>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Id</th>
    </tr>
   
    <tr className="border h-16">
        <th>#</th>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Id</th>
    </tr>
   

</table>
</div>

<div className="flex flex-col relative bottom-9 gap-7">
    <div className="bg-green-cyan h-40 w-40 rounded-2xl flex justify-center items-center flex-col">
    <IoIosMan className=" size-20 text-white"/>
    <p className="text-white font-bold"><span>N°</span> Biologist</p>
    </div>
    <div>
    <div className="bg-green-cyan h-40 w-40 rounded-2xl flex justify-center items-center flex-col">
    <IoIosMan className=" size-20 text-white"/>
    <p className="text-white font-bold"><span>N°</span> Reciptionniste</p>
    </div>
    </div>
    <div>
    <div className="bg-green-cyan h-40 w-40 rounded-2xl flex justify-center items-center flex-col">
    <IoIosMan className=" size-20 text-white"/>
    <p className="text-white font-bold"><span>N°</span> Infirmier</p>
    </div>
    </div>
</div>

    </div>
    <div className="flex absolute bottom-8 right-72  ">
        <button
          className="bg-green-dark1 px-8 py-3 rounded-md text-white mr-2 font-bold"
        //   onClick={() => handleModifyClick()}
          disabled={selectedRows.length !== 1}
        >
          Modify
        </button>
        <button
          className="bg-green-dark1 px-8 py-3 rounded-md text-white font-bold"
        //   onClick={() => handleDeleteClick()}
          disabled={selectedRows.length === 0}
        >
          Delete
        </button>
    </div>
    
    </> );
}
 
export default Afficher;