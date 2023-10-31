import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <div className="title">
      Math Magicians
    </div>
    <div className="nav-links">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/calculator" className="nav-item">Calculator</Link>
      <Link to="/quote" className="nav-item">Quote</Link>
    </div>
  </div>
);
export default Navbar;
