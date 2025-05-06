import { useState } from "react";

function Compteur2 ()
{
    const [compteur,setCompteur] = useState(5)
    const incrementer =()=>{setCompteur(comt => comt +1)};
        //setCompteur(compteur +3)}

    return(
        <div>
            <p>Compteur : {compteur}</p>
            <button onClick={incrementer}>inc</button>
        </div>
    );






}
export default Compteur2
