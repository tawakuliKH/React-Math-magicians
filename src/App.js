import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Quote />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
