import { Component } from "react";

class Message extends Component{
constructor()
{
    super()
    this.state={
        color: 'red',
        fonSize: '16px'
    }
}
changer1=()=>{this.setState({color:'blue', fonSize:'20px'
})}
changer2=()=>{this.setState({color:'red',
    fonSize: '16px'
})}
render(){
    const {color,fonSize}=this.state;
    return(
        <p style={{color: color, fontSize:fonSize}} 
        onMouseEnter={this.changer1}
        onMouseLeave={this.changer2}>
             changer mon style en survolant la souris</p>
    )
}
}
export default Message
