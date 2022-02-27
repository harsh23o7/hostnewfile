import logo from "./QRSVG.svg";
import aurament_logo from "./aurament_logo.png";
import "./App.css";
import React from "react";
function App() {
  let [over, setOver] = React.useState(false);

  let buttonstyle = {
    backgroundColor: "",
  };

  if (over) {
    buttonstyle.width = "100%"
  } else {
    buttonstyle.width = "40%"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <div>
       <div class="container" onMouseOver={()=>setOver(true)} 
      onMouseOut={()=>setOver(false)}>
          <div class="status" style={buttonstyle}></div>
        </div>
        
        <p>Site Under Construction </p>
       </div>
       <img src={aurament_logo} className='aurament_logo' alt="logo" />
      
      </header>
    </div>
  );
}

export default App;
