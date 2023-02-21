import React,{ Component } from "react";

class SingleXp extends Component{
    constructor(props){
      super(props);
    }
  
    
  

  
    render(){

      const { start,end,name,company,text} = this.props.exp;
      const del = this.props.del

          return(
              <div className="xp">
               <div>ID:{this.props.exp.id}</div>
               <div>Start {start} - End {end}</div>
               <div>{name}</div>
               <div>Company:{company}</div>
               <div>{text}</div>
               <button type="button" onClick={del}>Delete</button>
              </div>
          )  
    }
          
    
  }
  
  export default SingleXp;