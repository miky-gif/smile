import { FiActivity, FiSmile, FiShield, FiStar, FiHeart, FiUser } from 'react-icons/fi'

function Services() {
    const services = [
        {
            icon: <FiActivity />,
            title: 'Consultation & diagnostic',
            description: 'Examen complet de votre santé bucco-dentaire avec des équipements de pointe.'
        },
        {
            icon: <FiSmile />,
            title: 'Orthodontie',
            description: 'Appareils dentaires et aligneurs invisibles pour corriger votre dentition.'
        },
        {
            icon: <FiShield />,
            title: 'implantologie',
            description: 'Implants dentaires durables pour remplacer les dents manquantes.'
        },
        {
            icon: <FiStar />,
            title: 'Esthétique dentaire',
            description: 'Blanchiment et facettes pour un sourire éclatant et harmonieux.'
        },
        {
            icon: <FiHeart />,
            title: 'Soins & Paradontologie',
            description: 'Nettoyage, détartrage et traitement des caries pour une hygiène optimale.'
        },
        {
            icon: <FiUser />,
            title: 'odontologie pédiatrique.',
            description: 'Approche douce et rassurante pour les soins dentaires des plus jeunes.'
        }
    ]

    return (
        <section className="services-refined" id="services">
            <div className="container">
                <div className="services-header-refined">
                    <h4 className="services-subtitle-refined">Services bucco dentaires</h4>
                    <h2 className="services-title-refined">Nous prenons soin de chaque aspect de votre sourire</h2>
                    <p className="services-description-refined">
                        De la prévention aux soins spécialisés, notre clinique propose une prise en charge complète pour répondre à tous vos besoins.
                    </p>
                </div>

                <div className="services-grid-refined">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card-refined"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="service-icon-refined">{service.icon}</div>
                            <h3 className="service-card-title-refined">{service.title}</h3>
                            <p className="service-card-text-refined">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="services-footer-refined">
                    <a href="#contact" className="btn-services">Voire tout les services</a>
                </div>
            </div>
        </section>
    )
}

export default Services
