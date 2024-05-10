import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-navbar">
    <div className="header-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="header-img"
        />
        <h1 className="header-title">Wave</h1>
      </div>
      <ul className="navbar-list-container">
        <Link to="/" className="nav-list">
          Home
        </Link>
        <Link to="/about" className="nav-list">
          About
        </Link>
        <Link to="/contact" className="nav-list">
          Contact
        </Link>
      </ul>
    </div>
  </nav>
)

export default Header
