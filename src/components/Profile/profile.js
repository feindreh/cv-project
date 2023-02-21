import React,{ Component } from "react";
import ProfileText from "./profileText";
import "./profile.css"

class Profile extends Component{
  constructor(){
    super();
    this.state = {
        text : "Your text here",
        edit:false
    }
    this.updateText = this.updateText.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  updateText(e){
    const newText = e.target.previousSibling.value
    this.setState({
      text: newText,
    })
    this.toggleEdit()
  }

  toggleEdit(){
    this.setState({
        edit: this.state.edit? false : true
    })
  }


  render(){
    if(this.state.edit === false){
      return(
        <div id="profile">
            <div>Profile</div>
            <div>{this.state.text}</div>
            <button type="button" onClick={this.toggleEdit}>Edit</button>
        </div>
        )  
    }else{
      return(
        <div id="profile">
            <div>Profile</div>
            <textarea defaultValue={this.state.text}></textarea>
            <button type="button" onClick={this.updateText}>Save</button>
        </div>
      )
    }
        
    }
  
}

export default Profile;