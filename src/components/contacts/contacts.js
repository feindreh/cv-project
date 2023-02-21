import React,{ Component } from "react";


class Contacts extends Component{
  constructor(){
    super();
    this.state = {
        number:"123-456-789",
        mail:"exam@ple.com",
        home:"Dummy Street, CA",
        edit:false,
    }
    this.edit = this.edit.bind(this)
    this.save = this.save.bind(this)
  }

  edit(){
    this.setState({
        edit: true
    })
  }

  save(){
    this.setState({
        number:document.querySelector("#contacts .contacts-number").value,
        mail:document.querySelector("#contacts .contacts-mail").value,
        home:document.querySelector("#contacts .contacts-home").value,
        edit:false,
    })
  }

  render(){
    const {number,mail,home,edit} = this.state
    if(edit === false){
        return(
            <div id="contacts">
                <div>{number}</div>
                <div>{mail}</div>
                <div>{home}</div>
                <button type="button" onClick={this.edit}>Edit</button>
            </div>
        )
    }else{
        return(
            <div id="contacts">
                <div>Number: <input type="text" className="contacts-number"defaultValue={number}></input></div>
                <div>Mail: <input type="text" className="contacts-mail"defaultValue={mail}></input></div>
                <div>Home: <input type="text" className="contacts-home"defaultValue={home}></input></div>
                <button type="button" onClick={this.save}>Save</button>
            </div>
        )
    }
    }
  
}

export default Contacts;