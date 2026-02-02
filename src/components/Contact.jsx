import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'

function Contact() {
    return (
        <section className="contact-refined" id="contact">
            <div className="container">
                <div className="contact-header-refined">
                    <h4 className="contact-subtitle-refined">Contact</h4>
                    <h2 className="contact-title-refined">Nous vous répondrons dès que possible</h2>
                </div>

                <div className="contact-container-refined">
                    <form className="contact-form-refined" data-aos="flip-left">
                        <h3 className="form-title-refined">Envoyez-nous un message</h3>
                        <div className="form-grid-refined">
                            <div className="form-group-refined">
                                <label htmlFor="name">Nom complet</label>
                                <input type="text" id="name" placeholder="Votre nom" />
                            </div>
                            <div className="form-group-refined">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="votre@email.com" />
                            </div>
                        </div>
                        <div className="form-group-refined">
                            <label htmlFor="phone">Téléphone</label>
                            <input type="tel" id="phone" placeholder="06 12 34 56 78" />
                        </div>
                        <div className="form-group-refined">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" placeholder="Décrivez votre demande..."></textarea>
                        </div>
                        <button type="submit" className="btn-contact-refined">
                            Envoyer le message
                        </button>
                    </form>

                    <div className="contact-info-refined" data-aos="fade-left">
                        <h3 className="info-title-refined">Nos coordonnées</h3>
                        <p>N'hésitez pas à nous contacter pour toute question ou pour prendre rendez-vous.</p>

                        <div className="contact-details-refined">
                            <div className="contact-item-refined">
                                <div className="contact-icon-refined"><FiPhone /></div>
                                <div className="contact-text-refined">
                                    <strong>Téléphone</strong>
                                    <span>01 23 45 67 89</span>
                                </div>
                            </div>
                            <div className="contact-item-refined">
                                <div className="contact-icon-refined"><FiMail /></div>
                                <div className="contact-text-refined">
                                    <strong>Email</strong>
                                    <span>contact@smile.fr</span>
                                </div>
                            </div>
                            <div className="contact-item-refined">
                                <div className="contact-icon-refined"><FiMapPin /></div>
                                <div className="contact-text-refined">
                                    <strong>Adresse</strong>
                                    <span>123 Rue de la Santé, Paris</span>
                                </div>
                            </div>
                            <div className="contact-item-refined">
                                <div className="contact-icon-refined"><FiClock /></div>
                                <div className="contact-text-refined">
                                    <strong>Horaires</strong>
                                    <span>Lun - Ven: 09h - 19h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
