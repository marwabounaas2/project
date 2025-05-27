import { useState } from "react"

function Afficher()
{
const [text, setText] =useState('');
const [message, setMessage] =useState('');
const click = () => {
    if (text.length >3){
        setMessage(`vous avez saisir: ${text}`);
    }
    else {
        setMessage(`Erreur : le message doit contenir au moins 3 caracteres.`);
    }
}
const Changer=(e)=>{setText(e.target.value)}
return(
    <div>
        <h3>test rendu if else</h3>
        <input type="text" value={text} onChange={Changer} placeholder="saisire un message"/>
        <button onClick={click}>envoyer</button>
        <p>{message}</p>
    </div>
);
}
export default Afficher