import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Application from "./components/Application/Application";
import Servicespage from "./pages/Servicespage/Servicespage";
import Servicesdetailpage from "./pages/Servicespage/Servicesdetailpage/Servicesdetailpage";
import Workpage from "./pages/Workpage/Workpage";
import Workdetailpage from "./pages/Workpage/Workdetailpage/Workdetailpage";
import Aboutuspage from "./pages/Aboutuspage/Aboutuspage";
import Availables from "./pages/Aboutuspage/Availables/Availables";
import Newspage from "./pages/Newspage/Newspage";
import Newsdetailpage from "./pages/Newspage/Newsdetailpage/Newsdetailpage";
import Contactspage from "./pages/Contactspage/Contactspage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} exact />
        <Route path="/services" element={<Servicespage/>} exact />
        <Route path="/services/:title" element={<Servicesdetailpage/>} exact />
        <Route path="/work" element={<Workpage/>} exact />
        <Route path="/work/:title" element={<Workdetailpage/>} exact />
        <Route path="/about-us" element={<Aboutuspage/>} exact />
        <Route path="/about-us/:title" element={<Availables/>} exact />
        <Route path="/news" element={<Newspage/>} exact />
        <Route path="/news/:title" element={<Newsdetailpage/>} exact />
        <Route path="/contacts" element={<Contactspage/>} exact />
      </Routes>

      <Application/>
      <Footer/>




    </div>



  );
}

export default App;
