import { IoIosMan } from "react-icons/io";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditS from "../Gerant/Comptabilite/EditS";

const Resultats = ({ onRowSelect }) => {
    const rowData = [
      { N: 1, nom: "Nom1", QRCode: "Pre1", Quantite: "Bio" },
      //Ndd more objects foQRCodeachQuantite
      { N: 2, nom: "Nom2", QRCode: "Pre2", Quantite: "bio" },
      { N: 3, nom: "Nom3", QRCode: "Pre3", Quantite: "med" },
      { N: 4, nom: "Nom4", QRCode: "Pre4", Quantite: "resp" },
      { N: 5, nom: "Nom5", QRCode: "Pre5", Quantite: "inferm" },
      { N: 6, nom: "Nom6", QRCode: "Pre6", Quantite: "bio" },
      { N: 7, nom: "Nom7", QRCode: "Pre7", Quantite: "sdfs" },
      { N: 8, nom: "Nom8", QRCode: "Pre8", Quantite: "xwcw" },
      { N: 9, nom: "Nom9", QRCode: "Pre9", Quantite: "xwcw" },
    ];
  
    const [editMode, setEditMode] = useState({ active: false, rowId: null });
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const toggleSelectAll = () => {
        if (selectAll) {
          setSelectedRows([]);
        } else {
          setSelectedRows(rowData.map((row) => row.N));
        }
        setSelectAll(!selectAll);
      };

      const handleRowClick = (N) => {
        const newSelectedRows = selectedRows.includes(N)
          ? selectedRows.filter((id) => id !== N)
          : [...selectedRows, N];
    
        setSelectedRows(newSelectedRows);
        setSelectAll(newSelectedRows.length === rowData.length);
      };

    const handleDelete = (id) => {};
    const handleEdit = (id) => {
      setEditMode({ active: true, rowId: id });
    };
  
    if (editMode.active) {
      return (
        <EditS
          id={editMode.rowId}
          exitEditMode={() => setEditMode({ active: false, rowId: null })}
        />
      );
    }
  
    return (
      <div className="flex flex-col">
        <p className="text-2xl text-green font-bold relative top-3 ">List des Analyse</p>
      <div className="w-[1100px] flex mt-16">
        <div className="scrollbar-thumb-rounded-full bg-white h-[500px] rounded-b-lg scrollbar-thumb-green-cyan overflow-y-scroll w-5/6">
          <table className="text-xl bg-gradient-to-t text-slate-500 font-semibold rounded-b-lg w-[900px] ">
            <thead>
              <tr className="h-10 fixed w-[901.5px] bg-green-cyan rounded-t-lg top-[157px]">
                <th className="w-20">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="w-[250px]">Nom Employe</th>
                <th className="w-[250px]">Profession</th>
                <th className="w-[200px]">Salaire</th>
                <th className="w-[120px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {rowData.map((row, index) => (
                <tr key={index} className="h-16 cursor-pointer hover:bg-slate-200 border-2" onClick={() => handleRowClick(row.N)}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row.N)}
                      onChange={() => handleRowClick(row.N)}
                    />
                  </td>
                    <td className="w-[250px] border-2">{row.nom}</td>
                    <td className="w-[250px] border-2">{row.QRCode}</td>
                    <td className="w-[200px] border-2">{row.Quantite}</td>
                  <td>
                    <label htmlFor="" className="flex justify-evenly items-center h-full w-full">
                    <FaEdit    className=" cursor-pointer" onClick={() => setEditMode({ active: true, rowId: row.N })} />
                    <MdDelete   className=" cursor-pointer" onClick={() => {/* handleDelete function */}} /></label>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
  };
 export default  Resultats;

// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "../../components/ui/Table"
  
// const Resultat = () => {
//     return ( <>
//     <Table>
//   <TableCaption>A list of your recent invoices.</TableCaption>
//   <TableHeader>
//     <TableRow>
//       <TableHead className="w-[100px]">Invoice</TableHead>
//       <TableHead>Status</TableHead>
//       <TableHead>Method</TableHead>
//       <TableHead className="text-right">Amount</TableHead>
//     </TableRow>
//   </TableHeader>
//   <TableBody>
//     <TableRow>
//       <TableCell className="font-medium">INV001</TableCell>
//       <TableCell>Paid</TableCell>
//       <TableCell>Credit Card</TableCell>
//       <TableCell className="text-right">$250.00</TableCell>
//     </TableRow>
//   </TableBody>
// </Table>

//     </> );
// }
 
// export default Resultat;