import { useState } from "react";

const EditS = ({id}) => {
const initialState={}
const [formData,setFormData]=useState({
  Nom:'',
  prenom:'',
  id:'',
  mdb:'',
  spec:'',
})
const handleReset = () => {
  setFormData(initialState);
};
// Function to update state on input change
const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({
      ...formData,
      [name]: value,
  });
};
// Function to handle form submission
const handleSubmit = (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  
    console.log('Form data modified:', formData); 
  
  // Log the form data to the console
  // You can also handle form data submission to a server here
};
    
    return (
    <div className="flex flex-col  ">
  
  
      <p className="text-2xl text-green font-bold p-3">Modification de Salaire</p>
    
  <form className="flex mt-4 p-4 h-4/5 bg-zinc-200 rounded-lg justify-around " onSubmit={handleSubmit} onReset={handleReset}>
    <div className="flex flex-col gap-10 w-1/3">
        <div>
            <label htmlFor="text" className="flex ">Nom</label>
        <input className="border p-2 mr-2 rounded-md w-4/5 flex justify-start" type="text" placeholder="Nom" name="Nom" value={formData.Nom} onChange={handleChange}/>
        </div>
        <div>
        <label htmlFor="text" className="flex">Id</label>
         <div className="flex">
                <input className="border p-2 mr-2 rounded-md w-1/3 justify-start text-center" type="text" value={id} disabled/>
                <p className="hidden">{formData.id=id}</p>
            </div>
       </div>
            <div className="flex gap-10 mt-28">
                 <button type="submit" className=" p-2 bg-green rounded-sm text-white font-bold w-1/3 mt-32">Modifier</button> 

                <button type="reset" className=" p-2 bg-white rounded-sm text-green font-bold w-1/3 mt-32">Anuller</button>
            </div>
            

    </div>
    
    <div className="flex flex-col gap-10 w-1/3">
        <div>
            <label htmlFor="" className="flex">Profession</label>
        <select className="border p-2 rounded-md flex" name="spec" value={formData.spec} onChange={handleChange}>
    <option value="Agent">Agent</option>
    <option value="Biologiste">Biologiste</option>
    <option value="Médecin">Médecin</option>
    <option value="Infermier(e)">Infermier(e)</option>
  </select>
        </div>
    <div>
        <label htmlFor="text" className="flex">Salaire</label>
    <input className="border p-2 mr-2 rounded-md flex justify-start w-4/5" type="number" placeholder="$" name="mdb" value={formData.mdb} onChange={handleChange} />
    </div>
   
    
    </div>
    
  </form>
  
        </div>
);}

export default EditS;