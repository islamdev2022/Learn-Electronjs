import { IoIosMan } from "react-icons/io";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { BiCommentAdd } from "react-icons/bi";
import { TbArrowsLeftRight } from "react-icons/tb";
import EditS from "../Gerant/Comptabilite/EditS";
import AlertModal from "../AlertModal";
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
    const [showAlertNT, setShowAlertNT] = useState(false);
    const [showAlertVA, setShowAlertVA] = useState(false);
    const handleClose = () => {
        setShowAlertNT(false);
        setShowAlertVA(false)
      };
    
      const handleContinue = () => {
        // Add logic to proceed with the action
        
      };


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
      <div className="flex flex-col items-center">
        <p className="text-2xl text-green font-bold relative top-3 ">List des Analyse</p>
      <div className="w-full flex mt-10">
        <div className="scrollbar-thumb-rounded-full bg-white h-[32rem] rounded-l-lg scrollbar-thumb-green-cyan overflow-y-scroll w-full">
          <table className="text-xl bg-gradient-to-t text-slate-600 font-semibold rounded-tl-lg w-full ">
            <thead>
              <tr className="h-10 sticky top-0 w-fit bg-green-cyan rounded-lg">
                <th className="w-1/12 rounded-tl-lg">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={toggleSelectAll}
                    className=" cursor-pointer"
                  />
                </th>
                <th className="w-2/12">Nom</th>
                <th className="w-2/12">Prenom</th>
                <th className="w-1/12">Age</th>
                <th className="w-1/12">id</th>
                <th className="w-2/12">Date</th>
                <th className="w-2/12">Action</th>
              </tr>
            </thead>
            <tbody>
              {rowData.map((row, index) => (
                <tr key={index} className="h-16 cursor-pointer hover:bg-slate-200 border-y" onClick={() => handleRowClick(row.N)}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row.N)}
                      onChange={() => handleRowClick(row.N)}
                    />
                  </td>
                    <td >{row.nom}</td>
                    <td >{row.QRCode}</td>
                    <td >{row.Quantite}</td>
                    <td></td>
                    <td></td>
                  <td>
                    <label htmlFor="" className="flex justify-evenly items-center h-full w-full">
                    <BiCommentAdd className=" cursor-pointer hover:bg-slate-300 size-8 p-1 rounded-2xl" />
                    <TbArrowsLeftRight className=" cursor-pointer hover:bg-slate-300 size-8 p-1 rounded-2xl" onClick={() => setShowAlertNT(true)}/>
                    <FaCheck className=" cursor-pointer hover:bg-slate-300 size-8 p-1 rounded-2xl" onClick={() => setShowAlertVA(true)}/>
                    {showAlertNT && <AlertModal option="nvtest" onClose={handleClose} onContinue={handleContinue} />}
                    {showAlertVA && <AlertModal option="valider" onClose={handleClose} onContinue={handleContinue} />}

                    </label>
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

