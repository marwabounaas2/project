import { useState } from "react"

function Chaima()
{
const [ch,setch] =useState(
    {couleur:'black',
     taille:'16',police:'Arail'});
 const changer1 = () =>{setch(prev=>
    ({...prev,couleur:'red', taille:'20px'} ));};
const quitter =() => {setch(prev => 
    ({...prev,couleur:"black", taille:"16px"}));};



return(
    <div>
<p style={{color:ch.couleur,fontSize:ch.taille,fontFamily:ch.police}}
onMouseEnter={changer1}
onMouseLeave={quitter}>je change ma couleur et mon taiile</p>
    </div>
) ;


}
export default Chaima
