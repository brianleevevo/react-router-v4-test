import { Link } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = () =>
  <div id="header">
    <div id="logo">
      LOGO
    </div>
    <nav id="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
    </nav>
  </div>

export default AppHeader;
