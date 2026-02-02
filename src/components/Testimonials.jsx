import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { FiStar } from 'react-icons/fi'

function Testimonials() {
    const testimonials = [
        {
            name: 'Marie Laurent',
            role: 'Patiente depuis 2 ans',
            text: 'Le Dr Meyer est d’un professionnalisme exemplaire. Mon traitement orthodontique se passe à merveille et toute l’équipe est au petit soin.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
        },
        {
            name: 'Thomas Dubois',
            role: 'Soin Implantologie',
            text: 'Je recommande vivement ce cabinet. La technologie utilisée est bluffante et le résultat de mes implants est parfait. Un grand merci.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
        },
        {
            name: 'Sophie Martin',
            role: 'Esthétique dentaire',
            text: 'Un accueil chaleureux et une écoute attentive. Mon blanchiment dentaire a redonné de l’éclat à mon sourire. Je reviendrai sans hésiter.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
        }
    ]

    return (
        <section className="testimonials-refined">
            <div className="container">
                <div className="testimonials-header-refined">
                    <h4 className="testimonials-subtitle-refined">Témoignages</h4>
                    <h2 className="testimonials-title-refined">Ce que disent nos patients</h2>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    data-aos="fade-in"
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="testimonials-carousel-refined"
                >
                    {testimonials.map((t, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-card-refined">
                                <div className="testimonial-quote-icon-refined">“</div>
                                <div className="testimonial-stars-refined">
                                    {[...Array(t.rating)].map((_, i) => <FiStar key={i} fill="gold" stroke="gold" />)}
                                </div>
                                <p className="testimonial-main-text-refined">{t.text}</p>
                                <div className="testimonial-author-refined">
                                    <div className="testimonial-avatar-refined">
                                        <img src={t.avatar} alt={t.name} />
                                    </div>
                                    <div>
                                        <h4 className="testimonial-name-refined">{t.name}</h4>
                                        <p className="testimonial-role-refined">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials
