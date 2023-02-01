import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Insurrance from "./components/Insurrance";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FAB from "./components/Fab";

const App = () => {


return (
    <>
      <NavBar/>
      <Header/>
      <FAB/>
      <About/>
      <Insurrance/>
      <Carousel />
      <Contact/>
      <Footer/>
    </>
)

}

export default App;