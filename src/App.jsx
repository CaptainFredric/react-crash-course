import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'


function App() {

  return (
    <div>
      <Router>
        <nav>
        
          <a href="/">Home</a>
       <a href="/about">About</a>
<a href="/contact">Contact</a>

        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  ); 
}

export default App;
