import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Application from "./components/Application/Application";
import Services from "./pages/Services/Services";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} exact />
        <Route path="/services" element={<Services/>} exact />
      </Routes>
      <Application/>
      <Footer/>
    </div>
  );
}

export default App;
