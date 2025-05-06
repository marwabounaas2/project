import { Component } from "react";

class Phrase extends Component{
constructor()
{
    super()
    this.state ={
       text :''
        
    }



    transformer=() => {this.setState({text :this.state.text})}
    reinitialiser=()=>{this.setState({text :this.state.text})}  
}   
render(){
    return(
<div>
<h1>le courage n'est pas l'absence de peur,mais la capacite de vaincre ce qui fait peur:{this.state.text} </h1>
<button onClick={transformer.toUppercase()}>transformer</button>
<button onClick={reinitialiser.toLawrcase()}>reinitialiser</button>



</div>
    );
}


}
export default Phrase