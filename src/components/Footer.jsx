import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer-refined">
            <div className="container">
                <div className="footer-grid-refined">
                    <div className="footer-brand-refined">
                        <Link to="/" className="footer-logo-link">
                            <img src="/logo.png" alt="Cabinet Dentaire Smile" className="footer-logo-img" />
                        </Link>
                        <p className="footer-description-refined">
                            Votre cabinet dentaire de confiance. Des soins d'exception dans un environnement luxueux et bienveillant pour redonner vie à votre sourire.
                        </p>
                        <div className="social-links-refined">
                            <a href="#" className="social-link-refined" aria-label="Facebook"><FiFacebook /></a>
                            <a href="#" className="social-link-refined" aria-label="Instagram"><FiInstagram /></a>
                            <a href="#" className="social-link-refined" aria-label="Twitter"><FiTwitter /></a>
                            <a href="#" className="social-link-refined" aria-label="LinkedIn"><FiLinkedin /></a>
                        </div>
                    </div>

                    <div className="footer-column-refined">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/apropos">À propos</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Prendre RDV</Link></li>
                            <li><Link to="/actualites">Actualités</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column-refined">
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/services">Consultation</Link></li>
                            <li><Link to="/services">Orthodontie</Link></li>
                            <li><Link to="/services">Implantologie</Link></li>
                            <li><Link to="/services">Esthétique</Link></li>
                            <li><Link to="/services">Périodontie</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column-refined">
                        <h4>Contact & Acces</h4>
                        <ul className="footer-contact-list-refined">
                            <li><FiPhone /> <span>01 23 45 67 89</span></li>
                            <li><FiMail /> <span>contact@smile.fr</span></li>
                            <li><FiMapPin /> <span>123 Rue de la Santé, Paris</span></li>
                            <li><FiClock /> <span>Lun - Ven: 09h - 19h</span></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom-refined">
                    <p>© 2026 Cabinet Dentaire Smile. Tous droits réservés. Créé avec passion pour votre sourire.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
