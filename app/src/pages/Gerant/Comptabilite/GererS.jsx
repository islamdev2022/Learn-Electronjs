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
    <div className="flex flex-col items-center">
      <p className="text-2xl text-green font-bold relative top-3 ">
        List des Salaires
      </p>
      <div className="w-full flex  mt-10">
        <div className="scrollbar-thumb-rounded-full bg-green h-[32rem] rounded-l-lg scrollbar-thumb-green-cyan overflow-y-scroll w-10/12">
          <table className="text-xl bg-gradient-to-t to-green-cyan1 from-green-dark1 text-white rounded-b-lg w-full ">
            <tbody>
            <tr className="h-10 sticky top-0 w-fit bg-green-cyan rounded-lg">
            <th className=" w-1/12 rounded-tl-lg">#</th>
                <th className="w-1/5">Nom Employe</th>
              <th className="w-1/5">Profession</th>
                <th className="w-1/5">Salaire</th>
                <th className="w-1/5">Action</th>
              </tr>

              {rowData.map((row) => (
                <tr
                  key={row.id}
                  className="h-16 cursor-pointer hover:bg-green-dark1 border-2"
                  onClick={() => handleRowClick(row)}
                >
                  <th>{row.N}</th>
                  <td>{row.nom}</td>
                  <td >{row.QRCode}</td>
                  <td>{row.Quantite}</td>
                  <td>
                    <label className="flex justify-center gap-6 items-center h-full w-full">
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
