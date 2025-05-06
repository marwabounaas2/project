import { Component } from "react";

class Compteur1 extends Component
{
    constructor(){
        super();
        this.state ={
            compt :0
        };
       
    }
    incrementer =() =>{ this.setState({ compt :this.state.compt +2 });}
    decrementer =() => { this.setState({ compt :this.state.compt -2 });}
    reset =() => { this.setState({compt:0 });}


    render(){
    return(
       
    <div>
        <h1>la valeur du Compteur1 est:{this.state.compt} </h1>
        <button onClick={this.incrementer}>incrementer</button>
        <button onClick={this.decrementer}>decrementer</button>
   <button onClick={this.reset}>reset</button>

   </div>

        
    );
}
}
export default Compteur1



