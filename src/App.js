import React,{ Component } from "react";
import Profile from "./components/Profile/profile"
import Experience from "./components/experience/experience";
import Education from "./components/education/education";

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
    </div>
    )
  }
  
}

export default App;
