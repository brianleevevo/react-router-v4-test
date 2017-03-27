import { Link } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = location =>
  <div id="header">
    <div id="logo">
      LOGO
    </div>
    <nav id="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </div>

export default AppHeader;
