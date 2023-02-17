// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import Alert from "./components/Alert";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {

  const[alert , setAlert] = useState(null);
  const[mode , setMode] = useState('light');

  const toggleMode = ()=>{
      if (mode==='light') {
        setMode('dark')
        document.body.style.backgroundColor ='rgb(17 52 86)'
        document.body.style.color ='white'
        // let x=document.getElementsByTagName('textarea')
        // x.style.backgroundColor='#92989c'
      }
      else
      {
        setMode('light')
        document.body.style.backgroundColor ='white'
        document.body.style.color ='black' 
        
      }
    }

  const showalert =(message , type)=>{
      setAlert({
        msg : message,
        type : type
      })

      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

    return (
    <>
    <Router>
      <Navbar title="TextUtils" about="AboutUs" mode={mode} toggleMode ={toggleMode}/>
      <Alert alert ={alert}/>
      {/* <Navbar/>  */}
      
      <div className="container my-3"> 
      <Routes>
        <Route path="/" element={<TextForms heading="Enter your text here" showalert={showalert} mode={mode}/>}/> 
        {/* <Route path="/about" element={<About />}/> */}
      </Routes>          
      </div>
    </Router>
    </>
  );
}

export default App;
