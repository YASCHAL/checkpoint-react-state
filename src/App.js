import React, { Component, useState } from "react";
import "./App.css";
import Profile from "./Profile";



class App extends Component {
 
  state = {
    showProfile :  false
  }
  
  render() {
   
    

    
    return (
      <div className="App">
        
        <button
              onClick={() => {this.setState({
              showProfile: !this.state.showProfile
              });
            }}
          >
              {this.state.showProfile ? "hide" : "show"}
            </button>
            {this.state.showProfile && <Profile />}
     
     
      </div>
    );
  }
}

export default App;
