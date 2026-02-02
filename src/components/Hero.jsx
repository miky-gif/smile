import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function Hero() {
    const slides = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80',
            subtitle: 'Souriez en toute confiance, chaque jour',
            title: 'Votre clinique dentaire pour des soins de qualité',
            description: 'Nous prenons soin de vous grâce à des traitements bucco dentaires modernes, sûrs et adaptés à toute la famille. Notre équipe de professionnels vous accompagne pour une santé bucco-dentaire durable.',
            cta: 'Explorer Nos Services'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80',
            subtitle: 'Technologie de pointe',
            title: 'Des équipements modernes pour votre confort',
            description: 'Nous utilisons les dernières innovations technologiques pour garantir des diagnostics précis et des traitements moins invasifs.',
            cta: 'Découvrir nos équipements'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1920&q=80',
            subtitle: 'Équipe d\'experts',
            title: 'Des professionnels passionnés à votre écoute',
            description: 'Nos dentistes hautement qualifiés travaillent avec passion pour vous offrir le meilleur niveau de soin personnalisé.',
            cta: 'Rencontrez l\'équipe'
        }
    ];

    return (
        <section className="hero-carousel">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect={'fade'}
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                loop={true}
                className="mySwiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="hero-slide"
                            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${slide.image})` }}
                        >
                            <div className="hero-container-full">
                                <div className="hero-slide-content animate-fade-in">
                                    <span className="hero-slide-subtitle">{slide.subtitle}</span>
                                    <h1 className="hero-slide-title">{slide.title}</h1>
                                    <p className="hero-slide-description">{slide.description}</p>
                                    <div className="hero-slide-buttons">
                                        <a href="#services" className="btn btn-primary hero-cta">
                                            {slide.cta}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Hero;
