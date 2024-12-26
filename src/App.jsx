import { Router, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './Home'
import About from './About'
import Header from './Header'
import Footer from './Footer'
import Services from './Services'

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
