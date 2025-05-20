/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import Titre from './Component/Titre';
import Titre1 from './Component/Titre1';
import Entate from './Component/entate';
import Paragraphe from './Component/paragraphe';
import Peidedepage from './Component/Peidedepage';
import Compteur from './Component/Compteur';
//import Texte from './Component/Texte';
//import Message from './Component/Message';
//import Phrase from './Component/Phrase';
import Compteur1 from './Component/Compteur1';
import Phrase from './Component/Phrase';
import Compteur2 from './Component/Compteur2';

/*function App() {
  const calculatesum=() =>{
    const num1=parseFloat(document.getElementById("num1").value)|| 0;
    const num2=parseFloat(document.getElementById("num2").value)|| 0;
    document.getElementById("result").textContent =`Resultat: ${num1 +num2}`;
  };
  /*
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
    
   return(
   <div>
   <h1>calculateur de somme</h1>
   <input type="number" id="num1" placeholder="nombre 1"/>
   <input type="number" id="num2" placeholder="nombre 2"/>
   <button onClick={calculatesum}>calculer</button>
   <p id="result">Resultat: </p>

   
   </div>);
}

export default App
*/
//return (<div> <Titre1/><Titre/><Entate/><Paragraphe/><Peidedepage/></div>)
 //<Texte/>
 //<Message/>
/*
function App() 
{

  return(
    <div>
      
      <Compteur1/>
     
    </div>
  )                     


}
export default App
*/
import './App.css'
import Chaima from "./Component/Chaima"
import Compteur2 from "./Component/Compteur2"
import Bouton from './Component/Fonctoin'
import Produit from './Component/objet'
import Paragraphe1 from './Component/Paragraphe1'
import Paragraphe2 from "./Component/Paragraphe2"
import Message from "./Component/Props"
import Animal from './Component/Tableau'
import Utilisateur from "./Component/Utilisateur"
import logo from "./assets/téléchargement (1).jpg"
function App()
{ 
  const Animaux=["chien", "chat", "lapin"]
  const Style={color:'green', fontSize:'40px'}
  return(
    <div>
<Compteur2/>  
<Paragraphe2/>
<Bouton click={()=>alert("ok")}/>
<Utilisateur/>
<Chaima/>
<Message contenu="liste  produit"/>
<Bouton click={()=>alert("bounjour")}/>
<Message contenu="chaimaa"/>
<Produit informatoin={{nom:"sucre", prix:"15.45"}}NomStyle={Style}/>

<Animal items={Animaux}/>
<Bouton click={()=>alert("bien")}/>
<Paragraphe1/>
<img src={logo} alt='logo' className='image'/>
<img src='https://www.google.com/search?sca_esv=5d08914562322349&sxsrf=AHTn8zpTxN7QP4cqmpAYrL0hgDcmejYZaA:1747565356731&q=fleur&udm=2&fbs=ABzOT_BnMAgCWdhr5zilP5f1cnRvJ3SHQcDVxkdpDyHwlRhdNfno-ClRh0PKqyvFYyTkfIfJOoyi6rL2ScSJ67dNoiLlma6nffqoENgGX1Qo-QK1HPX2oWOr5ms0ecMruv-VEIFXyp4YV37Mzp-n6QnEniiDleB6-tq2rXhjs1CN1nE5h2Mytv-WdWYNhIN9xkrWk8ZuX7LKxpJ_z0tWPI9UFRsEN3T7Yg&sa=X&ved=2ahUKEwjF-byi7KyNAxWcU0EAHeNML-gQtKgLegQIFBAB&biw=1536&bih=730&dpr=1.25#vhid=SK4TKCSsWrIkmM&vssid=mosaic' alt='fleur' className='image'/>

</div>
  )
}

export default App










