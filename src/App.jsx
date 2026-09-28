import Navbar from "./Components/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects/>
        <Contact />
        <Footer />
      </main>
      
    </div>
  );
}

export default App;