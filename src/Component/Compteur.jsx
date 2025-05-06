import { Component } from "react"

class Compteur extends Component
{
    constructor(){
        super();
        this.state ={
            compt :0
        };
       
    }
    incrementer =() =>{ this.setState({ compt :this.state.compt +2
        });
    };
    
    render(){
    return(
        <div>
    
        <h1>la valeur du Compteur est:{this.state.compt} </h1>
        <button onClick={this.incrementer}>ok</button>




        </div>
    );
}
}
export default Compteur
