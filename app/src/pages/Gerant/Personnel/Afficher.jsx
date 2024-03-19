import { IoIosMan } from "react-icons/io";
import { useState } from "react";
import Suprimer from "./Suprimer";
const Afficher = () => {

  const rowData = [
    { id: 1, nom: 'Nom1', pre: 'Pre1' },
    // Add more objects for each row
    { id: 2, nom: 'Nom2', pre: 'Pre2' },
    { id: 3, nom: 'Nom3', pre: 'Pre3' },
    { id: 4, nom: 'Nom4', pre: 'Pre4' },
    { id: 5, nom: 'Nom5', pre: 'Pre5' },
    { id: 6, nom: 'Nom6', pre: 'Pre6' },
    { id: 7, nom: 'Nom7', pre: 'Pre7' }, 
    { id: 8, nom: 'Nom8', pre: 'Pre8' },
    { id: 9, nom: 'Nom9', pre: 'Pre9' },
  ];
  

    const [selectedRows, setSelectedRows] = useState([]);

    const handleRowClick = (row) => {
      const isSelected = selectedRows.includes(row.id);
      if (isSelected) {
        setSelectedRows(selectedRows.filter(id => id !== row.id));
      } else {
        setSelectedRows([...selectedRows, row.id]);
        console.log(`Details: Nom: ${row.nom}, Pre: ${row.pre}, Id: ${row.id}`);
      }
    };
    

  return (
    <div className="flex flex-col">
    <p className="text-2xl text-green font-bold relative top-3 ">List des Employee</p>
    <div className="w-[1100px] flex gap-4 mt-16">
      
      <div className="scrollbar-thumb-rounded-full bg-green h-[500px] rounded-b-lg scrollbar-thumb-green-cyan overflow-y-scroll w-5/6">
        <table className="text-xl bg-gradient-to-t to-green-cyan1 from-green-dark1 text-white rounded-b-lg w-[900px]">
          <tbody>
            <tr className="h-10 fixed w-[901.5px] bg-green-cyan rounded-t-lg top-[157PX]">
              <th className="w-20">#</th>
              <th className="w-[250px]">Nom</th>
              <th className="w-[250px]">Pre</th>
              <th className="w-[200px]">Id</th>
              <th className="w-[120px]">Select</th>
            </tr>

            {rowData.map((row) => (
  <tr 
    key={row.id} 
    className="h-16 cursor-pointer hover:bg-green-dark1" 
    onClick={() => handleRowClick(row)}
  >
    <th className="w-20">#</th>
    <td className="w-[250px]">{row.nom}</td>
    <td className="w-[250px]">{row.pre}</td>
    <td className="w-[200px]">{row.id}</td>
    <td>
      <label className="flex justify-center items-center h-full w-full">
        <input
          type="checkbox"
          checked={selectedRows.includes(row.id)}
          onChange={() => handleRowClick(row)}
          className="h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none cursor-pointer"
        />
      </label>
    </td>
  </tr>
))}


            {/* Other table rows */}
          </tbody>
        </table>
</div>

<div className="flex flex-col relative bottom-4 gap-4">
    <div className="bg-green-cyan h-40 w-40 rounded-2xl flex justify-center items-center flex-col">
    <IoIosMan className=" size-20 text-white"/>
    <p className="text-white font-bold"><span>N°</span> Biologist</p>
    </div>
    <div>
    <div className="bg-green h-40 w-40 rounded-2xl flex justify-center items-center flex-col">
    <IoIosMan className=" size-20 text-white"/>
    <p className="text-white font-bold"><span>N°</span> Reciptionniste</p>
    </div>
    </div>
    <div>
    <div className="bg-green-dark1 h-40 w-40 rounded-2xl flex justify-center items-center flex-col">
    <IoIosMan className=" size-20 text-white"/>
    <p className="text-white font-bold"><span>N°</span> Employee</p>
    </div>
    </div>
</div>

    </div>
    </div>
     );
}

export default Afficher;