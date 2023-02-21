import React,{ Component } from "react";
import SingleXp from "./singleXp";
import "./experience.css"





class Experience extends Component{
  constructor(){
    super();
    this.state = {
        xp:[]
    }
    this.newXp = this.newXp.bind(this)
    this.XpFactory = this.XpFactory.bind(this)
    this.deleteXp = this.deleteXp.bind(this)
    this.editXp = this.editXp.bind(this)
  }

  id=0

  XpFactory = (start,end,name,company,text,) => {
    this.id++
    return {start,end,name,company,text,id:this.id}
  }
  newXp(){
    this.setState({
      xp: [...this.state.xp,this.XpFactory()]
    })
  }
  deleteXp(Id){
    this.setState({
      xp:this.state.xp.filter((xp) => xp.id !== Id)
    })
  }
  editXp(obj){
    const searchID = obj.id
    this.setState({
      xp: [...this.state.xp.filter((xp)=> xp.id !== searchID),obj]
    })
  }

  render(){
        return(
            <div id="experience">
                <div>Work Experience</div>
                <button type="button" onClick={this.newXp}>New Experience</button>
                {this.state.xp.map((xp)=>{
                  return <SingleXp  exp={xp} key={xp.id} edit={this.editXp} del={()=>{this.deleteXp(xp.id)}}/>
                })}
            </div>
        )  
  }
        
  
}

export default Experience;