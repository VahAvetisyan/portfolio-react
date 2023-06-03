import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Skills from './components/Skills';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='skills' element={<Skills />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='*' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
