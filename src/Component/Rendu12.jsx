import { useState } from "react";

function Afficher12()
{
const [text, setText] =useState('')
const [valide, setValide] =useState(false);
const click = () =>{
    setValide(text.length > 3); 
};
const Changer=(e) => {setText(e.target.value)}
return (
    <div>
        <h3>test operateur ternaire</h3>
        <input type="text" value={text} onChange={Changer} placeholder="saisire un message"/>
        <button onClick={click}>envoyer</button>
        {valide !== null && (
            <p>{valide ? `vous avez saisir : ${text}`: `Erreur : le message doit contenir plus .`};</p>

        )
        }
    </div>
)
}
export default Afficher12


