import { FiArrowRight } from 'react-icons/fi'

function News() {
    const articles = [
        {
            title: 'Guide complet pour un sourire éclatant',
            excerpt: 'Découvrez les rituels quotidiens et les soins professionnels pour maintenir une blancheur naturelle et une santé buccale parfaite.',
            date: '28 Janvier 2026',
            image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop'
        },
        {
            title: 'L’implantologie : une solution de vie',
            excerpt: 'Les technologies modernes nous permettent aujourd’hui de restaurer votre sourire de manière durable, indolore et esthétique.',
            date: '22 Janvier 2026',
            image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop'
        },
        {
            title: 'Orthodontie invisible pour adultes',
            excerpt: 'Redécouvrez le plaisir de sourire grâce à nos solutions de bagues invisibles, alliant discrétion absolue et efficacité remarquable.',
            date: '15 Janvier 2026',
            image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop'
        }
    ]

    return (
        <section className="news-refined" id="actualites">
            <div className="container">
                <div className="news-header-refined" data-aos="fade-up">
                    <h4 className="news-subtitle-refined">Actualités</h4>
                    <h2 className="news-title-refined">Les conseils de nos experts</h2>
                    <p className="news-description-refined">
                        Explorez nos derniers articles pour prendre soin de votre sourire au quotidien.
                    </p>
                </div>

                <div className="news-grid-refined">
                    {articles.map((article, index) => (
                        <article
                            key={index}
                            className="news-card-refined"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="news-image-refined">
                                <img src={article.image} alt={article.title} />
                                <div className="news-date-badge-refined">{article.date}</div>
                            </div>
                            <div className="news-content-refined">
                                <h3 className="news-article-title-refined">{article.title}</h3>
                                <p className="news-excerpt-refined">{article.excerpt}</p>
                                <a href="#" className="news-link-refined">
                                    Lire l'article <FiArrowRight />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default News
