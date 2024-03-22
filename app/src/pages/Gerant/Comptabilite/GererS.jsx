import { IoIosMan } from "react-icons/io";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditS from "./EditS";
const GererS = ({ onRowSelect }) => {
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

  const handleRowClick = (row) => {
    const isSelected = selectedRows.includes(row.N);
    if (isSelected) {
      const newSelectedRows = selectedRows.filter((N) => N !== row.N);
      setSelectedRows(newSelectedRows);
      onRowSelect(null, newSelectedRows.length); // No row is considered selected
    } else {
      const newSelectedRows = [...selectedRows, row.N];
      setSelectedRows(newSelectedRows);
      onRowSelect(row.N, newSelectedRows.length); // Pass the new length of selectedRows
      console.log(
        `Details: Nom: ${row.nom}, Pre: ${row.Quantite}, Id: ${row.N}`
      );
    }
    console.log(selectedRows.length);
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
      <p className="text-2xl text-green font-bold relative top-3 ">
        List des Salaires
      </p>
      <div className="w-[1100px] flex  mt-16">
        <div className="scrollbar-thumb-rounded-full bg-green h-[500px] rounded-b-lg scrollbar-thumb-green-cyan overflow-y-scroll w-5/6">
          <table className="text-xl bg-gradient-to-t to-green-cyan1 from-green-dark1 text-white rounded-b-lg w-[900px] ">
            <tbody>
              <tr className="h-10 fixed w-[901.5px] bg-green-cyan rounded-t-lg top-[157PX]">
                <th className="w-20">#</th>
                <th className="w-[250px]">Nom Employe</th>
                <th className="w-[250px]">Profession</th>
                <th className="w-[200px]">Salaire</th>
                <th className="w-[120px]">Action</th>
              </tr>

              {rowData.map((row) => (
                <tr
                  key={row.id}
                  className="h-16 cursor-pointer hover:bg-green-dark1 border-2"
                  onClick={() => handleRowClick(row)}
                >
                  <th className="w-20 border-2">{row.N}</th>
                  <td className="w-[250px] border-2">{row.nom}</td>
                  <td className="w-[250px] border-2">{row.QRCode}</td>
                  <td className="w-[200px] border-2">{row.Quantite}</td>
                  <td>
                    <label className="flex justify-evenly items-center h-full w-full">
                      <FaEdit
                        className=" cursor-pointer"
                        onClick={() => handleEdit(row.N)}
                      />
                      <MdDelete
                        className=" cursor-pointer"
                        onClick={ ()=> handleDelete(row.N)}
                      />
                    </label>
                  </td>
                </tr>
              ))}
              {/* Other table rows */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GererS;
