const AlertModalDelete = ({onClose, onDelete }) => {
    return (
      <div className="fixed z-10 inset-0 bg-black bg-opacity-60 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-lg font-bold mb-8">Voulez-vous suprimer ce utilisateur ?</h2>
          
          <div className="flex justify-evenly">
         <button onClick={onDelete} className="bg-green-dark1 px-8 h-8 text-white rounded-lg font-bold">
              Oui
            </button>
            
            <button onClick={onClose} className="bg-gray rounded-lg h-8 px-6 font-bold text-white">
              Annuler
            </button>
            
          </div>
        </div>
      </div>
    );
  };
 
export default AlertModalDelete;