import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <Link to="/" className="nav-menu"> Quote</Link>
    <Link to="/calculator" className="nav-menu"> Calculator</Link>
  </div>
);
export default Navbar;
