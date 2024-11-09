import React  from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navigation from './components/Navigation'
import HeroSection from "./components/heroSection";

function App(){
  return(
    <Router>
      <Navigation/>
      {/* <HeroSection/> */}
      <Routes>
      <Route path="/" element={<HeroSection/>}/>
      </Routes>
    </Router>
  )
}
export default App;