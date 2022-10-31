import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import On1Project from "./components/projects/On1Project";
import Footer from "./components/Footer";
import "./styles/css/main.css";

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route exact path='/kportfolio' element={<Home />}></Route>
          <Route path='/on1-project' element={<On1Project />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
