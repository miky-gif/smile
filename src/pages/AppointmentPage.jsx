import { useState } from 'react'
import { FiCalendar, FiClock, FiUser, FiPhone, FiMail, FiCheckCircle, FiRefreshCw } from 'react-icons/fi'

function AppointmentPage() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        window.scrollTo(0, 0)
        setSubmitted(true)
    }

    return (
        <div className="appointment-page">
            {/* Hero Section */}
            <div className="appointment-page-hero" data-aos="fade-in">
                <div className="appointment-page-hero-content">
                    <h4>Prendre un rendez-vous</h4>
                    <h1>{submitted ? "Demande confirmée" : "Réservez votre séance en quelques clics"}</h1>
                </div>
            </div>

            {/* Content Section */}
            <section className="appointment-form-section">
                <div className="container">
                    {submitted ? (
                        <div className="success-wrapper" data-aos="zoom-in">
                            <div className="success-card">
                                <FiCheckCircle className="success-icon" />
                                <h2>Rendez-vous envoyé !</h2>
                                <p>Merci pour votre confiance. Notre équipe vous contactera très prochainement pour confirmer la date et l'heure de votre consultation.</p>
                                <button onClick={() => setSubmitted(false)} className="btn-pill-refined success-btn">
                                    <FiRefreshCw /> Effectuer une autre demande
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="appointment-card" data-aos="fade-up">
                            <div className="appointment-header">
                                <h2>Informations de Consultation</h2>
                                <p>Veuillez remplir le formulaire ci-dessous pour nous aider à préparer votre visite.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="appointment-form-refined">
                                <div className="form-grid-refined">
                                    <div className="form-group-refined">
                                        <label><FiUser /> Nom complet</label>
                                        <input type="text" placeholder="Ex: Jean Dupont" required />
                                    </div>
                                    <div className="form-group-refined">
                                        <label><FiPhone /> Numéro de téléphone</label>
                                        <input type="tel" placeholder="Ex: +237 6XX XXX XXX" required />
                                    </div>
                                    <div className="form-group-refined">
                                        <label><FiMail /> Adresse Email</label>
                                        <input type="email" placeholder="votre@email.com" required />
                                    </div>
                                    <div className="form-group-refined">
                                        <label>Type de service</label>
                                        <select required>
                                            <option value="">Sélectionnez un service</option>
                                            <option value="consultation">Consultation & Diagnostic</option>
                                            <option value="detartrage">Détartrage & Nettoyage</option>
                                            <option value="implant">Implantologie</option>
                                            <option value="ortho">Orthodontie</option>
                                            <option value="blanchiment">Blanchiment dentaire</option>
                                            <option value="urgence">Urgence dentaire</option>
                                        </select>
                                    </div>
                                    <div className="form-group-refined">
                                        <label><FiCalendar /> Date souhaitée</label>
                                        <input type="date" required />
                                    </div>
                                    <div className="form-group-refined">
                                        <label><FiClock /> Heure souhaitée</label>
                                        <select required>
                                            <option value="">Sélectionnez un créneau</option>
                                            <option value="08:00">08:00 - 09:00</option>
                                            <option value="09:00">09:00 - 10:00</option>
                                            <option value="10:00">10:00 - 11:00</option>
                                            <option value="11:00">11:00 - 12:00</option>
                                            <option value="14:00">14:00 - 15:00</option>
                                            <option value="15:00">15:00 - 16:00</option>
                                            <option value="16:00">16:00 - 17:00</option>
                                            <option value="17:00">17:00 - 18:00</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group-refined">
                                    <label>Notes additionnelles (optionnel)</label>
                                    <textarea placeholder="Décrivez brièvement votre besoin ou vos symptômes..." rows="4"></textarea>
                                </div>

                                <div className="form-footer-refined">
                                    <button type="submit" className="btn-pill-refined appointment-submit">Confirmer la demande de rendez-vous</button>
                                    <p className="form-disclaimer">En envoyant ce formulaire, vous acceptez d'être recontacté pour la confirmation de votre rendez-vous.</p>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default AppointmentPage
