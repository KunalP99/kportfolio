import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import On1Project from "./components/projects/On1Project";
import CvBuilder from "./components/projects/CvBuilder";
import WeatherProject from "./components/projects/WeatherApp";
import LibraryApp from "./components/projects/LibraryApp";
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
          <Route path='/weather-app' element={<WeatherProject />}></Route>
          <Route path='/library-app' element={<LibraryApp />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
