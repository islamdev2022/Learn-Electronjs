import { IoIosMan } from "react-icons/io";
import { useState } from "react";
import Suprimer from "./Suprimer";
const Afficher = () => {

    const [selectedRows, setSelectedRows] = useState([]);

  const handleRowClick = (rowId) => {
    const isSelected = selectedRows.includes(rowId);
    if (isSelected) {
      setSelectedRows(selectedRows.filter(id => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };
 


  return (
    <>
    <div className="w-[1100px] flex gap-4 mt-12">
      <div className="scrollbar-thumb-rounded-full bg-green h-[500px] rounded-b-2xl scrollbar-thumb-green-cyan overflow-y-scroll w-5/6">
        <table className="text-xl bg-green text-white rounded-b-lg w-[900px]">
          <tbody>
            <tr className="h-10 fixed w-[901px] bg-green-cyan rounded-t-xl top-28">
              <th className="w-20">#</th>
              <th className="w-[250px]">Nom</th>
              <th className="w-[250px]">Pre</th>
              <th className="w-[200px]">Id</th>
              <th className="w-[120px]">Select</th>
            </tr>

            <tr className="h-16 cursor-pointer hover:bg-green-dark1" onClick={() => handleRowClick(1)}>
              <th className="w-20">#</th>
              <th className="w-[250px]">Nom</th>
              <th className="w-[250px]">Pre</th>
              <th className="w-[200px]">Id</th>
              <td>
                <label className="flex justify-center items-center h-full w-full">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(1)}
                    onChange={() => handleRowClick(1)}
                    className="h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none cursor-pointer"
                  />
                </label>
              </td>
            </tr>

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
    </>
     );
}

export default Afficher;