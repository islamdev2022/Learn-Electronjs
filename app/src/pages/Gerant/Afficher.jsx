import { IoIosMan } from "react-icons/io";
import { useState } from "react";

const Afficher = ({onRowSelect,choice}) => {

  const rowData = [
    { N: 1, nom: 'Nom1', QRCode: 'Pre1' ,Quantite:'Bio' },
    //Ndd more objects foQRCodeachQuantite
    { N: 2, nom: 'Nom2', QRCode: 'Pre2' ,Quantite:"bio" },
    { N: 3, nom: 'Nom3', QRCode: 'Pre3' ,Quantite:"med"},
    { N: 4, nom: 'Nom4', QRCode: 'Pre4' ,Quantite:"resp"},
    { N: 5, nom: 'Nom5', QRCode: 'Pre5' ,Quantite:"inferm"},
    { N: 6, nom: 'Nom6', QRCode: 'Pre6' ,Quantite:"bio"},
    { N: 7, nom: 'Nom7', QRCode: 'Pre7' ,Quantite:"sdfs"}, 
    { N: 8, nom: 'Nom8', QRCode: 'Pre8' ,Quantite:"xwcw"},
    { N: 9, nom: 'Nom9', QRCode: 'Pre9' ,Quantite:"xwcw"},
  ];
  

    const [selectedRows, setSelectedRows] = useState([]);

    const handleRowClick = (row) => {
      const isSelected = selectedRows.includes(row.N);
      if (isSelected) {
        const newSelectedRows = selectedRows.filter(N => N!== row.N);
        setSelectedRows(newSelectedRows);
        onRowSelect(null, newSelectedRows.length); // No row is considered selected
      } else {
        const newSelectedRows = [...selectedRows, row.N];
        setSelectedRows(newSelectedRows);
        onRowSelect(row.N, newSelectedRows.length); // Pass the new length of selectedRows
        console.log(`Details: Nom: ${row.nom}, Pre: ${row.Quantite}, Id: ${row.N}`);
      }
      console.log(selectedRows.length);
    };
    

  return (
  
    <div className="flex flex-col ">
    {choice==="Stock" && <>
    <p className="text-2xl text-green font-bold relative top-3 ">List des Produit</p>
    <div className="w-full flex mt-12">
      
      <div className="scrollbar-thumb-rounded-full h-[32rem] rounded-l-lg scrollbar-thumb-green-cyan overflow-y-scroll w-10/12">
        <table className="text-xl bg-gradient-to-t to-green-cyan1 from-green-dark1 text-white rounded-b-lg w-full ">
          <tbody>
          <tr className="h-10 sticky top-0 w-fit bg-green-cyan rounded-lg">
              <th className=" w-1/12 rounded-tl-lg">#</th>
              <th className="w-1/5">Nom Produit</th>
              <th className="w-1/5">Qr Code</th>
              <th className="w-1/5">Quantite</th>
              <th className="w-1/5">Select</th>
            </tr>

            {rowData.map((row) => (
  <tr 
    key={row.id} 
    className="h-16 cursor-pointer hover:bg-green-dark1 border-2" 
    onClick={() => handleRowClick(row)}
  >
    <th >{row.N}</th>
    <td >{row.nom}</td>
    <td >{row.QRCode}</td>
    <td >{row.Quantite}</td>
    <td>
      <label className="flex justify-center items-center h-full w-full">
        <input
          type="checkbox"
          checked={selectedRows.includes(row.N)}
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



    </div></>}
    {choice==="Personnel" && <><p className="text-2xl text-green font-bold relative top-3 ">List des Utilisateurs</p>
    <div className="w-full flex gap-4 mt-12">
      
      <div className="scrollbar-thumb-rounded-full bg-green h-[32rem] rounded-l-lg scrollbar-thumb-green-cyan overflow-y-scroll w-full">
        <table className="text-xl bg-gradient-to-t to-green-cyan1 from-green-dark1 text-white rounded-b-lg w-full">
          <tbody>
            <tr className="h-10 sticky top-0 w-fit bg-green-cyan rounded-lg ">
              <th className="w-1/12 rounded-tl-lg">ID</th>
              <th className="w-1/5">Nom</th>
              <th className="w-1/5">Prenom</th>
              <th className="w-1/5">Role</th>
              <th className="w-1/5">Select</th>
            </tr>

            {rowData.map((row) => (
  <tr 
    key={row.id} 
    className="h-16 cursor-pointer hover:bg-green-dark1 border-2" 
    onClick={() => handleRowClick(row)}
  >
    <th >{row.N}</th>
    <td >{row.nom}</td>
    <td>{row.pre}</td>
    <td >{row.role}</td>
    <td>
      <label className="flex justify-center items-center h-full w-full">
        <input
          type="checkbox"
          checked={selectedRows.includes(row.N)}
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

<div className="flex flex-col relative  gap-3">
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
    <p className="text-white font-bold"><span>N°</span> Utilisateurs</p>
    </div>
    </div>
</div>

    </div></>}
    
    </div>
     );
}

export default Afficher;