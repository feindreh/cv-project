import React,{ Component } from "react";
import picture from "./foto.jpg"

class Header extends Component{
    constructor(props){
      super(props);
      this.state={
        first:"First Name",
        last:"Last Name",
        job:"Job",
        edit:false,
      }
      this.upEdit = this.upEdit.bind(this)
      this.saveEdit = this.saveEdit.bind(this)
    }
    upEdit(){
        this.setState({
            edit: this.state.edit===false
        })
    }
   saveEdit(){
        this.setState({
            first:document.querySelector("#header .header-first").value,
            last:document.querySelector("#header .header-last").value,
            job:document.querySelector("#header .header-job").value,
            edit:this.state.edit===false,
        })
    }



    render(){
        const {first,last,job,edit} = this.state   
        if(edit === false){
            return(
                <div id="header">
                    <img src={picture}></img>
                    <div>{last}</div>
                    <div>{first}</div>
                    <div>{job}</div>
                    <button type="button" onClick={this.upEdit}>Edit</button>
                </div>
            )
        }else{
            return(
                <div id="header">
                    <img src={picture}></img>
                    <div><input type="text" className="header-last"defaultValue={last}></input></div>
                    <div><input type="text" className="header-first"defaultValue={first}></input></div>
                    <div><input type="text" className="header-job"defaultValue={job}></input></div>
                    <button type="button" onClick={this.saveEdit}>Save</button>
                </div>
            )
        }   
    }
}
  
export default Header;