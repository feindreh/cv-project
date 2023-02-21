import React,{ Component } from "react";
import Profile from "./components/Profile/profile"
import Experience from "./components/experience/experience";
import Education from "./components/education/education";
import Header from "./components/Header/header";
import Contacts from "./components/contacts/contacts";


class App extends Component{
  constructor(){
    super();
  }


  render(){
    return(
    <div>
      <Profile/>
      <Experience/>
      <Education/>
      <Header/>
      <Contacts/>
    </div>
    )
  }
  
}

export default App;
