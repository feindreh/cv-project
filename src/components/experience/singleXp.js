import React,{ Component } from "react";

class SingleXp extends Component{
    constructor(props){
      super(props);
    }
  
    
  

  
    render(){

      const { start,end,name,company,text } = this.props;


          return(
              <div className="xp">
               <div>Start {start} - End {end}</div>
               <div>{name}</div>
               <div>Company:{company}</div>
               <div>{text}</div>
              </div>
          )  
    }
          
    
  }
  
  export default SingleXp;