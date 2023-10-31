import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quote from './components/Quote';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
