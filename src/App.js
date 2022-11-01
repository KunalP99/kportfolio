import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import On1Project from "./components/projects/On1Project";
import CvBuilder from "./components/projects/CvBuilder";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/css/main.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='app'>
        <Routes>
          <Route exact path='/kportfolio' element={<Home />}></Route>
          <Route path='/on1-project' element={<On1Project />}></Route>
          <Route path='/cv-builder' element={<CvBuilder />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
