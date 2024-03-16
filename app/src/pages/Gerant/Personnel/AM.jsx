import { useState } from "react";

const AM = ({option}) => {
   
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
    
  <form className="flex p-4 h-[550px] bg-zinc-200 rounded-lg justify-around ">
    <div className="flex flex-col gap-10 w-1/3">
        <div>
            <label htmlFor="text" className="flex ">Nom</label>
        <input className="border p-2 mr-2 rounded-md w-4/5 flex justify-start" type="text" placeholder="Nom" />
        </div>
        {option ==='Ajouter' && <div>
        <label htmlFor="text" className="flex">Id</label>
         <div className="flex">
                <input className="border p-2 mr-2 rounded-md w-1/3 justify-start text-center" type="text" placeholder="ID" value={randomNumber}
        onChange={(e) => setRandomNumber(e.target.value)}/>
                <button className="bg-green text-white font-bold p-2 rounded-sm" onClick={generateRandomNumber}>Generer</button>
            </div>
       </div>}
       
           
            <div>
                <label htmlFor="text" className="flex ">Sexe</label>
         <select className="border p-2 rounded-md flex ">
    <option value="Homme">Homme</option>
    <option value="Femme">Femme</option>
  </select>
  
            </div>
            <div className="flex gap-10">
                {option==="Ajouter" && <button type="submit" className=" p-2 bg-green rounded-sm text-white font-bold w-1/3 mt-32">Ajouter</button> } 
                {option==="Modifier" && <button type="submit" className=" p-2 bg-green rounded-sm text-white font-bold w-1/3 mt-32">Modifier</button> } 

                <button type="reset" className=" p-2 bg-white rounded-sm text-green font-bold w-1/3 mt-32">Anuller</button>
            </div>
            

    </div>
    
    <div className="flex flex-col gap-10 w-1/3">
        <div>
            <label htmlFor="text" className="flex ">Prenom</label>
    <input className="border p-2 mr-2 rounded-md w-4/5 flex justify-start" type="text" placeholder="Prénom" />
        </div>
    <div>
        <label htmlFor="text" className="flex ">Mot de passe</label>
    <input className="border p-2 mr-2 rounded-md flex justify-start w-4/5" type="password" placeholder="Mot de passe" />
    </div>
    <div>
        <label htmlFor="text" className="flex">Specialitee</label>
    <select className="border p-2 rounded-md flex">
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