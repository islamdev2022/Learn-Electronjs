import { useState } from "react";
const Items = ({option,nom,ND,NU}) => {
    function signalerM (){
        option="signalerM"
    }
const [SMessage,setSMessage]=useState(false)
    return ( 
    <div className="w-fit py-3 h-56 bg-white rounded-xl">
        <div className="flex flex-col  items-center w-44">
            <div className="py-2">
                <img src="/assets/compte.png" alt="test" className="w-10 table mx-auto"/>
                <p>{nom}</p>
            </div>
            <hr className="text-slate-500 w-44 "/>

        {option ==="p" && <>
        <div className="py-2">
                <p>Disponible</p>
                <p>{ND}</p>
            </div>
            
            <hr className="text-slate-500 w-44 "/>
            <div className="py-2">
                <p>Utilisee</p>
                <p>{NU}</p>
            </div>
        </>}
        {option ==="declarer" && 
        <>
        <div className="py-2 font-semibold">
                <p>Produit Utiliser <br /> par jour</p>
                <br />
                <input type="number" name="" id="" className="border w-36 text-center"/>
            </div>
        </>
        }
        {option ==="signaler" && !SMessage &&
        <>
        <div className="py-2 font-semibold">
           
                <p>Nombre Disponible</p>
                <p className=" text-2xl">{ND}</p>
            </div>
             <br />
           <button className=" bg-green-cyan text-white rounded-lg px-3 font-semibold" onClick ={setSMessage}>Signaler</button>
        </>
        }
        {SMessage && 
        <div className="flex h-28 items-center">
            <p className="font-semibold">Commande envoyée !</p>        
        </div>
        }
        </div>
    </div> );
}
 
export default Items;
