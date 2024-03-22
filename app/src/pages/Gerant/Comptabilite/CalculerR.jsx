const CalculerR = () => {
    return ( 
    <div>
        <p className="text-2xl text-green font-bold p-3">Calculer le Revenu</p>
        <table className="mt-5 font-bold h-fit  w-full border">
            <tr className="flex items-center border ">
                <td className=" py-16 w-1/4 border text-2xl">La Boit de Paiment</td>
                <td className="flex items-center justify-evenly w-3/4"><p className="text-2xl">Montant Initial</p> <input type="number" className="w-4/12 rounded-lg p-4" placeholder="Saisir le montant intiial"/><button className=" bg-orange-400 text-white p-4 px-6 rounded-xl ">Valide</button></td>
            </tr>
            <tr className=" flex items-center border">
                <td className="p-8 py-20 w-1/4 border text-2xl">Paiment</td>
                <td className="flex w-3/4 justify-around ">
                    <div className="flex flex-col gap-4  justify-center text-xl"> <p>Nombre des tests</p><span className=" flex justify-center mx-auto w-16 h-10 items-center rounded-lg bg-orange-400 text-white  ">12</span></div>
                    <div className="flex flex-col gap-4  justify-center text-xl"><p>Montant total</p><span className=" flex justify-center mx-auto w-16 h-10 items-center rounded-lg bg-orange-400 text-white  ">12</span></div>
                    <div className="flex flex-col gap-4  justify-center text-xl"><p>Revenu</p><span className=" flex justify-center mx-auto w-16 h-10 items-center rounded-lg  ">200</span></div>
                </td>
            </tr>
            <tr className=" flex items-center border">
                <td className="p-8 py-16 w-1/4 border text-2xl">
                    <p>Temp</p>
                    <select name="" id="" className="rounded-xl p-1" >
                        <option value="">Ajourd'hui</option>
                        <option value="">7 jour</option>
                        <option value="">14 jour</option>
                        <option value="">1 mois</option>
                        <option value="">6 mois</option>
                        <option value="">1 ans</option>
                    </select>
                </td>
                <td className="flex w-3/4 justify-around ">
                    <div className="flex flex-col gap-4  justify-center text-xl"> <p>Nombre des tests</p><span className=" flex justify-center mx-auto w-16 h-10 items-center rounded-lg bg-orange-400 text-white  ">12</span></div>
                    <div className="flex flex-col gap-4  justify-center text-xl"><p>Montant total</p><span className=" flex justify-center mx-auto w-16 h-10 items-center rounded-lg bg-orange-400 text-white  ">12</span></div>
                    <div className="flex flex-col gap-4  justify-center text-xl"><button className=" flex justify-center w-24 h-10 items-center rounded-lg  bg-orange-400 text-white ">Calculer</button></div>
                </td>
            </tr>
        </table>
    </div> );
}
 
export default CalculerR;