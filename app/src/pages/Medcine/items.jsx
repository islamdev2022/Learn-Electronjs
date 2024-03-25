const Items = ({nom,ND,NU}) => {
    return ( 
    <div className="w-fit py-3 h-56 bg-white rounded-xl">
        <div className="flex flex-col  items-center w-full">
            <div className="py-2">
                <img src="/assets/compte.png" alt="test" className="w-10 table mx-auto"/>
                <p>{nom}</p>
            </div>
            <hr className="text-slate-500 w-full "/>
            <div className="py-2">
                <p>Disponible</p>
                <p>{ND}</p>
            </div>
            
<hr className="text-slate-500 w-44 "/>
            <div className="py-2">
                <p>Utilisee</p>
                <p>{NU}</p>
            </div>
        </div>
    </div> );
}
 
export default Items;
