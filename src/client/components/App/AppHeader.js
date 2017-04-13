import { Link } from 'react-router-dom';
import Login from './Login';
import './AppHeader.css';

const AppHeader = location =>
  <div id="header">
    <nav id="nav">
      <div id="logo">
        LIFT
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <Login />
  </div>

export default AppHeader;
