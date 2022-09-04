import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Application from "./components/Application/Application";
import Servicespage from "./pages/Servicespage/Servicespage";
import Servicesdetailpage from "./pages/Servicespage/Servicesdetailpage/Servicesdetailpage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} exact />
        <Route path="/services" element={<Servicespage/>} exact />
        <Route path="/services/:title" element={<Servicesdetailpage/>} exact />
      </Routes>
      <Application/>
      <Footer/>
    </div>
  );
}

export default App;
