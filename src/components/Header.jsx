import { FiMenu } from 'react-icons/fi'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="Cabinet Dentaire Smile" className="logo-img" style={{ height: '80px' }} />
                </Link>

                <nav>
                    <ul className="nav-list">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Accueil</NavLink></li>
                        <li><NavLink to="/apropos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>A Propos</NavLink></li>
                        <li><NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Service</NavLink></li>
                        <li><NavLink to="/actualites" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Actualités</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contacts</NavLink></li>
                    </ul>
                </nav>

                <Link to="/appointment" className="header-cta">Prendre un rendez-vous</Link>

                <button className="mobile-menu-btn" aria-label="Menu">
                    <FiMenu />
                </button>
            </div>
        </header>
    )
}

export default Header
