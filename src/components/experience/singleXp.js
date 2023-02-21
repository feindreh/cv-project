import React,{ Component } from "react";

class SingleXp extends Component{
    constructor(props){
      super(props);
      this.state={
        edit:false
      }
      this.edit = this.edit.bind(this)
      this.unEdit = this.unEdit.bind(this)
    }
    
    edit(){
      this.setState({
        edit:true
      })
    }

    unEdit(e){
      // this.setState({
      //   edit:false
      // })
      const newObj = {
        start:document.querySelector(`.xp-${this.props.exp.id} .start`).value,
        end:document.querySelector(`.xp-${this.props.exp.id} .end`).value,
        name:document.querySelector(`.xp-${this.props.exp.id} .name`).value,
        company:document.querySelector(`.xp-${this.props.exp.id} .company`).value,
        text:document.querySelector(`.xp-${this.props.exp.id} .text`).value,
      }
     console.log(newObj)
      
    }
    
  

  
    render(){

      const { start,end,name,company,text,id} = this.props.exp;
      const del = this.props.del

        if(this.state.edit ===false){
          return(
            <div className={`xp-${id}`}>
              <div>Start {start} - End {end}</div>
              <div>{name}</div>
              <div>Company:{company}</div>
              <div>{text}</div>
              <button type="button" onClick={del}>Delete</button>
              <button type="button" onClick={this.edit}>Edit</button>
            </div> 
          )  
        }else{
          return(
            <div className={`xp-${id}`}>
              <div>Start <input className="start" type="text"defaultValue={start}></input>- End <input type="text" className="end"defaultValue={end}></input></div>
              <div>What did you do?(Headline)<input type="text" className="name" defaultValue={name}></input></div>
              <div>Company:<input type="text" className="company" defaultValue={company}></input></div>
              <div><textarea placeholder="What did you do?(Text)" className="text" defaultValue={text}></textarea></div>
              <button type="button" onClick={del}>Delete</button>
              <button type="button" onClick={this.unEdit}>Save</button>
            </div> 
          )
        }
              
         
    }
          
    
  }
  
  export default SingleXp;