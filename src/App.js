import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./styles/css/main.css";

function App() {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
