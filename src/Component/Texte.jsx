import { Component } from "react";

class Texte extends Component
{
    constructor(){
        super()
    
        this.state ={
            Texte :''
        }
    }


changer =(e) => {this.setState({Texte:e.target.value,})}

render() {
    return(
        <div>
<input type="Texte" value={this.state.value}onChange={this.changer}/>
<p>vous avez saisir: {this.state.Texte}</p>
        </div>
    )}

}
export default Texte