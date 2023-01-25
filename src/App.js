// Component imports
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Links from "./components/Links";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



function App() {
  return (
    <>
      <div className="w-full flex flex-col justify-start items-center bg-slate-900 text-[#CCD6F6] ">
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Links />
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
