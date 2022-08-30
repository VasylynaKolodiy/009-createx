import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} exact />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
