import { useState } from "react";

const AM = ({option,id}) => {
const initialState={}
const [formData,setFormData]=useState({
  Nom:'',
  prenom:'',
  id:'',
  mdb:'',
  spec:'',
  sexe:""
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
  if (option ==="Ajouter"){
    console.log('Form data submitted:', formData); 
  }else if (option ==="Modifier"){
    console.log('Form data modified:', formData); 
  }
  // Log the form data to the console
  // You can also handle form data submission to a server here
};
   
        const [randomNumber, setRandomNumber] = useState('');

  const generateRandomNumber = () => {
    const min = 1000;
    const max = 10000;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(randomNum);
  }
    
    return (
    <div className="flex flex-col  ">
        {option==="Ajouter" && <p className="text-2xl text-green font-bold p-3">Ajouter un Nouveau utilisateur</p>}
        {option==="Modifier" && <p className="text-2xl text-green font-bold p-3">Modification</p>}
    
  <form className="flex p-4 h-[550px] bg-zinc-200 rounded-lg justify-around " onSubmit={handleSubmit} onReset={handleReset}>
    <div className="flex flex-col gap-10 w-1/3">
        <div>
            <label htmlFor="text" className="flex ">Nom</label>
        <input className="border p-2 mr-2 rounded-md w-4/5 flex justify-start" type="text" placeholder="Nom" name="Nom" value={formData.Nom} onChange={handleChange}/>
        </div>
        {option ==='Ajouter' && <div>
        <label htmlFor="text" className="flex">Id</label>
         <div className="flex">
                <input className="border p-2 mr-2 rounded-md w-1/3 justify-start text-center" type="text" placeholder="ID" value={randomNumber}
       disabled/>
                <button className="bg-green text-white font-bold p-2 rounded-sm" onClick={generateRandomNumber} type="button">Generer</button>
                <p className="hidden">{formData.id=randomNumber}</p>
            </div>
       </div>}
       {option ==='Modifier'&& <div>
        <label htmlFor="text" className="flex">Id</label>
         <div className="flex">
                <input className="border p-2 mr-2 rounded-md w-1/3 justify-start text-center" type="text" value={id} disabled/>
                <p className="hidden">{formData.id=id}</p>
            </div>
       </div>}
       
           
            <div>
                <label htmlFor="text" className="flex ">Sexe</label>
         <select className="border p-2 rounded-md flex " name="sexe" value={formData.sexe} onChange={handleChange}>
    <option value="Homme">Homme</option>
    <option value="Femme">Femme</option>
  </select>
  
            </div>
            <div className="flex gap-10">
                {option==="Ajouter" && <button type="submit" className=" p-2 bg-green rounded-sm text-white font-bold w-1/3 mt-32" >Ajouter</button> } 
                {option==="Modifier" && <button type="submit" className=" p-2 bg-green rounded-sm text-white font-bold w-1/3 mt-32">Modifier</button> } 

                <button type="reset" className=" p-2 bg-white rounded-sm text-green font-bold w-1/3 mt-32">Anuller</button>
            </div>
            

    </div>
    
    <div className="flex flex-col gap-10 w-1/3">
        <div>
            <label htmlFor="text" className="flex ">Prenom</label>
    <input className="border p-2 mr-2 rounded-md w-4/5 flex justify-start" type="text" placeholder="Prénom" name="prenom" value={formData.prenom} onChange={handleChange}/>
        </div>
    <div>
        <label htmlFor="text" className="flex">Mot de passe</label>
    <input className="border p-2 mr-2 rounded-md flex justify-start w-4/5" type="password" placeholder="Mot de passe" name="mdb" value={formData.mdb} onChange={handleChange} />
    </div>
    <div>
        <label htmlFor="text" className="flex" >Specialitee</label>
    <select className="border p-2 rounded-md flex" name="spec" value={formData.spec} onChange={handleChange}>
    <option value="Agent">Agent</option>
    <option value="Biologiste">Biologiste</option>
    <option value="Médecin">Médecin</option>
    <option value="Infermier(e)">Infermier(e)</option>
  </select>
    </div>
    
    </div>
    
  </form></div>
);}

export default AM;