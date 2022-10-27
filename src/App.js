import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import "./styles/css/main.css";

function App() {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;
