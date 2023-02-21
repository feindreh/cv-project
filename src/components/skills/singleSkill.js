import React,{ Component } from "react";


class SingleSkills extends Component{
  constructor(){
    super();
  }



  render(){
    const {text,del} = this.props
    return(
        <div>
            <div>{text}</div>
            <button type="text" onClick={del}>Delete</button>
        </div>
    )
  }
  
}

export default SingleSkills;