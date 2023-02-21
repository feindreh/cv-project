import React,{ Component } from "react";
import SingleSkills from "./singleSkill";


class Skills extends Component{
  constructor(){
    super();
    this.state = {
        skills:[],
    }
    this.newSkill = this.newSkill.bind(this)
    this.deleteSkill = this.deleteSkill.bind(this)
  }

  id=0

  newSkill(){
    const newObj = {
        text:document.querySelector("#skills input").value,
        id:this.id
    }
    this.id++
    this.setState({
        skills: [...this.state.skills,newObj]
    })
  }

  deleteSkill(id){
    this.setState({
        skills:[...this.state.skills.filter((skill)=>{return skill.id !== id})]
    })
  }


  render(){


        return(
            <div id="skills">
                {this.state.skills.map((skill)=>{
                    return <SingleSkills text = {skill.text} key = {skill.id} del={()=>{this.deleteSkill(skill.id)}}/>
                })}
                <input type="text" defaultValue={"New Skill"}></input>
                <button type="button" onClick={this.newSkill}>New Skill</button>
            </div>
        )

    
  }
  
}

export default Skills;