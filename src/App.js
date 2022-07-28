
import './App.css';
import About from './components/about';
import Navbar from './components/Navbar';
import Textform from './components/textform';

import React, { useState } from 'react'
import Alert from './components/Alert';
import Ending from './components/scroll';
function App() {

  const [alert, setalert] = useState(null);

  
  const showalert = (message  , type) =>{
      setalert({
        msg : message,
        typ : type

      })
      setTimeout(()=>{
        setalert(null)
      },2000)
  }
  const [mode, setMode] = useState('light')//wheather dark mode is enable ornot
 const togglemode =() =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "#14476E"
      showalert("Dark mode has been enable","success")
    }
    
    else{
      setMode('light');
      document.body.style.backgroundColor = "white"
      showalert("Light mode has been enable","success")
    }
  }
  return (
<>
<Navbar title="ADicore" text="About" mode={mode} togglemode={togglemode}/>
{/* <Navbar/> */}
<Alert Alert={alert}/>

<div className="container my-3" >
<Textform showalert={showalert}heading="Text Manipulator" mode={mode}/>
</div>

{/* <div className="conatainer my-3">
<About/>    
</div> */}
<Ending/>
</>
  ) 
}

export default App;
