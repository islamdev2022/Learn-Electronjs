import { useState } from "react";
import Afficher from "./Afficher";

const Supprimer = (id) => {
  // State to control the visibility of the modal
  const [isVisible, setIsVisible] = useState(true);

  // Function to execute when the "Oui" button is clicked
  const handleConfirm = () => {
    console.log("The action for 'Oui' is executed");
    // Add your action here
    setIsVisible(false); // This will hide the modal after performing the action
  };

  // Function to hide the modal without performing any action
  const handleCancel = () => {
    setIsVisible(false);
    
  };

  // Do not render the component if it is not visible
  if (!isVisible) return null;

  return (
    <div className="fixed z-10 inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-8">Voulez-vous supprimer cet utilisateur ?</h2>
        <div className="flex justify-evenly">
          <button
            onClick={handleConfirm}
            className="bg-green-dark1 px-8 h-8 text-white rounded-lg font-bold"
          >
            Oui
          </button>
          <button
            onClick={<Afficher></Afficher>}
            className="bg-gray rounded-lg h-8 px-6 font-bold text-white"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default Supprimer;
