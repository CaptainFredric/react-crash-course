import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'


function App() {

  return (
    <div>
   <Router>
      <nav>

        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element = {<About />}/>
      <Route path="/contact" element = {<Contact />} />
    </Routes>
   </Router>
    </div>
  ); 
}

export default App;
