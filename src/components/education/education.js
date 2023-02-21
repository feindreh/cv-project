import React,{ Component } from "react";
import SingleEd from "./singleEd";
import "./education.css"





class Education extends Component{
  constructor(){
    super();
    this.state = {
        ed:[]
    }
    this.newEd = this.newEd.bind(this)
    this.EdFactory = this.EdFactory.bind(this)
    this.deleteEd = this.deleteEd.bind(this)
    this.editEd = this.editEd.bind(this)
    this.sortEd = this.sortEd.bind(this)
  }

  id=0

  EdFactory = (year,name,university,) => {
    this.id++
    return {year,name,university,id:this.id}
  }
  newEd(){
    this.setState({
      ed: [...this.state.ed,this.EdFactory()]
    })
  }
  deleteEd(Id){
    this.setState({
      ed:this.state.ed.filter((ed) => ed.id !== Id)
    })
  }
  editEd(obj){
    const searchID = obj.id
    this.setState({
      ed: [...this.state.ed.filter((ed)=> ed.id !== searchID),obj]
    })
  }
  sortEd(){
    this.setState({
      ed: this.state.ed.sort((a,b)=>{return (a.year - b.year)})
    })
  }

  render(){
        return(
            <div id="education">
                <div>Education</div>
                <button type="button" onClick={this.sortEd}>Sort</button>
                <button type="button" onClick={this.newEd}>New Education</button>
                {this.state.ed.reverse().map((ed)=>{
                  return <SingleEd  edu={ed} key={ed.id} edit={this.editEd} del={()=>{this.deleteEd(ed.id)}}/>
                })}
            </div>
        )  
  }
        
  
}

export default Education;