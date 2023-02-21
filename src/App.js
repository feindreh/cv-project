import React,{ Component } from "react";
import Profile from "./components/Profile/profile"
import Experience from "./components/experience/experience";

class App extends Component{
  constructor(){
    super();
  }


  render(){
    return(
    <div>
      <Profile/>
      <Experience/>
    </div>
    )
  }
  
}

export default App;
