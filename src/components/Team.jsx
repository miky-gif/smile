import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

function Team() {
    const team = [
        {
            name: 'Dr. Sarah BERDAH',
            role: 'Chirurgien-Dentiste',
            img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=600&fit=crop',
            oncdc: '12345/A'
        },
        {
            name: 'Dr. Jean-Philippe BERDAH',
            role: 'Orthodontiste Spécialisé',
            img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=600&fit=crop',
            oncdc: '67890/B'
        },
        {
            name: 'Dr. Laura OIKNINE',
            role: 'Expert en Implantologie',
            img: 'https://images.unsplash.com/photo-1559839734-2b71f15367ef?w=600&h=600&fit=crop',
            oncdc: '54321/C'
        }
    ]

    return (
        <section className="team-refined" id="equipe">
            <div className="container">
                <div className="team-header-refined" data-aos="fade-up">
                    <h4 className="team-subtitle-refined">Notre Équipe</h4>
                    <h2 className="team-title-refined">Des experts à votre service</h2>
                </div>

                <div className="team-grid-refined">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="team-card-refined"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="team-image-refined">
                                <img src={member.img} alt={member.name} />
                            </div>
                            <h3 className="team-name-refined">{member.name}</h3>
                            <p className="team-role-refined">{member.role}</p>
                            <p className="team-reg-refined">ONCDC: {member.oncdc}</p>
                            <div className="team-socials-refined">
                                <a href="#" className="social-icon-refined"><FiFacebook /></a>
                                <a href="#" className="social-icon-refined"><FiTwitter /></a>
                                <a href="#" className="social-icon-refined"><FiInstagram /></a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="team-footer-refined">
                    <button className="btn-team">Voir plus</button>
                </div>
            </div>
        </section>
    )
}

export default Team
