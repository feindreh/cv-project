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
    this.sortXp = this.sortXp.bind(this)
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
  sortXp(){
    this.setState({
      xp: this.state.xp.sort((a,b)=>{return (a.start - b.start)})
    })
  }

  render(){
        return(
            <div id="experience">
                <div>Work Experience</div>
                <button type="button" onClick={this.sortXp}>Sort</button>
                <button type="button" onClick={this.newXp}>New Experience</button>
                {this.state.xp.reverse().map((xp)=>{
                  return <SingleXp  exp={xp} key={xp.id} edit={this.editXp} del={()=>{this.deleteXp(xp.id)}}/>
                })}
            </div>
        )  
  }
        
  
}

export default Experience;