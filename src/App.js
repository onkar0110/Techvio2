import './App.css';
import Navbar from './componets/Navbar';
// import TextForm from './componets/TextForm'
import About from './componets/About';
import Alert from './componets/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from './componets/Home';
import Footer from './componets/Footer'


function App() {
  const [mode,setMode] =useState('light');
  const [alert,setAlert] =useState(null);
  
   
  const showAlert=(message)=>{
    setAlert({
      msg:message,
      
    })
  }  


  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#495057";
      showAlert("Dark mode enabled")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode enabled")
    }
  }
  return (
   <>
    
    <Router>
    <Navbar title="Techvio" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            {/* <TextForm showAlert={showAlert} heading="Enter About Manunited" mode={mode}/> */}
          </Route>
          
            
    </Switch>  
    <Home/>
    
    </div>
    
  </Router>
  <Footer/>
  </>

  );
}


export default App;
