import React,{ Component } from "react";

class SingleEd extends Component{
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

    unEdit(){
      
      const newObj = {
        year:document.querySelector(`.ed-${this.props.edu.id} .year`).value,
        name:document.querySelector(`.ed-${this.props.edu.id} .name`).value,
        education:document.querySelector(`.ed-${this.props.edu.id} .university`).value,
        id:this.props.edu.id,
      }

      this.props.edit(newObj)

      this.setState({
        edit:false
      })
    }
    
  

  
    render(){

      const { year,name,university,id} = this.props.edu;
      const del = this.props.del

        if(this.state.edit ===false){
          return(
            <div className={`ed-${id} singleEd`}>
              <div>Year {year}</div>
              <div>{name}</div>
              <div>{university}</div>
              <button type="button" onClick={del}>Delete</button>
              <button type="button" onClick={this.edit}>Edit</button>
            </div> 
          )  
        }else{
          return(
            <div className={`ed-${id} singleEd`}>
              <div>Year <input className="year" type="text"defaultValue={year}></input></div>
              <div>What did you study?<input type="text" className="name" defaultValue={name}></input></div>
              <div>University:<input type="text" className="university" defaultValue={university}></input></div>
              <button type="button" onClick={del}>Delete</button>
              <button type="button" onClick={this.unEdit}>Save</button>
            </div> 
          )
        }
              
         
    }
          
    
  }
  
  export default SingleEd;