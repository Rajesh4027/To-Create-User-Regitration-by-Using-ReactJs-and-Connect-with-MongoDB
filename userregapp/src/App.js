import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Contact from "./Pages/Contact"
import BlogPage from "./Pages/BlogPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/blog" element={<BlogPage />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
