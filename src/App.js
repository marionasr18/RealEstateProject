import React from "react";
import './app.css'
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import ContactUs from "./contactUs/ContactUs";
import PropertiesComp from "./propertiesFolder/PropertiesComp";
import Counter from "./Counter";
import EnhancedContacUs from "./contactUs/EnhancedContacUs";
function App() {
  return (

    <Routes>
       <Route path='/' element={<Header />}> 
        {/* <div className="container"> */}
        <Route path="/ContactUs" element={<EnhancedContacUs />} />
        {/* <Route path="/UsefulInformation" element={<ContactUs />} /> */}
        <Route path="/Home" element={<Home />} />
         <Route path="/Counter" element={<Counter />} /> 
        <Route path="/Properties" element={<PropertiesComp />} />
       </Route> 
       
     </Routes>
  );
}

export default App;
