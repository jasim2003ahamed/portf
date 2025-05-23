import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import About from './component/About';
import Projects from './component/Projects';
import Resume from './component/Resume';
import Contact from './component/Contact';
import Education from './component/Education';
import Languages from './component/Languages';

function App() {
  return (
    <div className="App" >
        <Header />
        <Hero />
        <About />
        <Education />
        <Languages />
        <Projects />
        <Resume />
        <Contact />
    </div>
  );
}

export default App;
