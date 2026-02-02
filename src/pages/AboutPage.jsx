import About from '../components/About'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import { FiHeart, FiCheckCircle } from 'react-icons/fi'

function AboutPage() {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <div className="about-page-hero" data-aos="fade-in">
                <div className="about-page-hero-content">
                    <h4>À propos de Smile</h4>
                    <h1>Votre partenaire pour une santé dentaire optimale</h1>
                </div>
            </div>

            {/* Who We Are Section */}
            <section className="about-section-who">
                <div className="container">
                    <div className="about-who-grid">
                        <div className="about-who-text" data-aos="fade-right">
                            <h4>Qui sommes-nous ?</h4>
                            <h2>Une référence d'excellence en soins dentaires modernes</h2>
                            <p>
                                Fondé en 2015, le Cabinet Dentaire Smile est né d'une volonté claire : offrir des soins dentaires d'excellence, alliant rigueur médicale, innovation technologique et approche humaine. Dès ses débuts, le cabinet s'est donné pour mission de placer le patient au cœur de notre exercice, en proposant un espace où rigueur médicale, innovation technologique et approche bienveillante se rencontrent.
                            </p>
                        </div>
                        <div className="about-who-image" data-aos="fade-left">
                            <img src="https://images.unsplash.com/photo-1559839734-2b71f1536b1e?w=800&q=80" alt="Directeur du cabinet" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="choose-us-section">
                <div className="container">
                    <div className="choose-us-grid">
                        <div className="choose-us-image" data-aos="fade-right">
                            <img src="https://images.unsplash.com/photo-1581056770613-22c608051797?w=800&q=80" alt="Accueil cabinet" style={{ borderRadius: '20px' }} />
                        </div>
                        <div className="choose-us-text" data-aos="fade-left">
                            <h4>Pourquoi nous choisir ?</h4>
                            <h2>Une approche unique pour votre sourire</h2>

                            <div className="feature-item">
                                <div className="feature-icon"><FiHeart /></div>
                                <div className="feature-content">
                                    <h3>Soins personnalisés</h3>
                                    <p>Chaque patient est unique. Nous réalisons une évaluation complète afin de proposer des soins adaptés à vos besoins spécifiques et à vos attentes.</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon"><FiCheckCircle /></div>
                                <div className="feature-content">
                                    <h3>Expertise et professionnalisme</h3>
                                    <p>Notre équipe est composée de professionnels qualifiés et expérimentés, engagés à vous offrir des soins fiables et durables.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <Team />

            {/* Clinic Visit Section */}
            <section className="clinic-visit-section" data-aos="zoom-in">
                <div className="clinic-visit-content">
                    <h4>Visite de la clinique</h4>
                    <h2>Des installations modernes pour des soins d'exception</h2>
                    <p>Votre clinique dispose d'équipements de dernière génération et d'un environnement moderne, conçu pour garantir votre confort et un traitement agréable.</p>
                    <a href="#" className="btn-visit">Explorer la clinique</a>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* Split CTA Section */}
            <section className="about-cta-split">
                <div className="container">
                    <div className="cta-split-container">
                        <div className="cta-split-image" data-aos="fade-right">
                            <img src="https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=800&q=80" alt="Smile accueil" />
                        </div>
                        <div className="cta-split-content" data-aos="fade-left">
                            <h4>Appel à l'action</h4>
                            <h2>Prêt à découvrir la smile ?</h2>
                            <p>Ne tardez plus pour prendre soin de votre sourire. Contactez-nous dès aujourd'hui et bénéficiez de notre expertise professionnelle adaptée à vos besoins.</p>
                            <a href="/contact" className="btn-pill-refined">Prendre un rendez-vous</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage
