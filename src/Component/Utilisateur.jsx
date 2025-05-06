import { useState } from "react"

function Utilisateur()
{
const [user, setUser] =useState({nom: '', prenom:'', age:''});
const changer=(e)=>{
    const {name,value} = e.target 
    setUser({...user, [name]: value });
}
return(
    <div>
       nom: <input type="text" name="nom" onChange={changer}/><br></br>
       prenom: <input type="text" name="prenom" onChange={changer}/><br></br>
       age; <input type="text" name="age" onDoubleClick={changer}/>
        <p>l'Utilisateur est: {user.nom} , {user.prenom} , {user.age}</p>
    </div>
)





}
export default Utilisateur
