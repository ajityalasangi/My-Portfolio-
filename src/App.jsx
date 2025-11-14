import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';

import { Routes, Route } from 'react-router-dom';

function App(){
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/projects" element={<Projects/>}/>
         
        </Routes>
      </main>
    </>
  )
}

export default App;