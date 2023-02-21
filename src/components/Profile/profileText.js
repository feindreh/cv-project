import React,{ Component } from "react";


class ProfileText extends Component{
  constructor(){
    super();
  }

  render(){
    if(this.props.edit){
        return(
            <div>{this.props.text}</div>
        )  
    }else{
        return(
            <input defaultValue={this.props.text}></input>
        )
    }

  }
        
  
}

export default ProfileText;