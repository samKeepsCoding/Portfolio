// Component imports
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";


function App() {
  return (
    <>
      <div className="w-full flex flex-col justify-start items-center bg-slate-900 text-[#CCD6F6] ">
        <Hero/>
        <About/>
        <Skills/>
      </div>
    </>
  );
}

export default App;
