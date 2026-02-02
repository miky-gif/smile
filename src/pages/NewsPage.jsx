const newsArticles = [
    {
        title: "Nouvelle technologie pour des soins plus confortables",
        description: "Nous avons équipé la clinique d'un nouvel appareil de radiographie 3D, pour des diagnostics précis et plus rapides.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop"
    },
    {
        title: "Nouvelle technologie pour des soins plus confortables",
        description: "Nous avons équipé la clinique d'un nouvel appareil de radiographie 3D, pour des diagnostics précis et plus rapides.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop"
    },
    {
        title: "Nouvelle technologie pour des soins plus confortables",
        description: "Nous avons équipé la clinique d'un nouvel appareil de radiographie 3D, pour des diagnostics précis et plus rapides.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop"
    },
    {
        title: "Nouvelle technologie pour des soins plus confortables",
        description: "Nous avons équipé la clinique d'un nouvel appareil de radiographie 3D, pour des diagnostics précis et plus rapides.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop"
    },
    {
        title: "Nouvelle technologie pour des soins plus confortables",
        description: "Nous avons équipé la clinique d'un nouvel appareil de radiographie 3D, pour des diagnostics précis et plus rapides.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop"
    },
    {
        title: "Nouvelle technologie pour des soins plus confortables",
        description: "Nous avons équipé la clinique d'un nouvel appareil de radiographie 3D, pour des diagnostics précis et plus rapides.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop"
    }
]

function NewsPage() {
    return (
        <div className="news-page">
            {/* Hero Section */}
            <div className="news-page-hero" data-aos="fade-in">
                <div className="news-page-hero-content">
                    <h4>Actualités</h4>
                    <h1>Toute l'actu Smile, sans vous déplacer.</h1>
                </div>
            </div>

            {/* News Grid Section */}
            <section className="news-page-grid-section">
                <div className="container">
                    <div className="news-grid-refined">
                        {newsArticles.map((article, index) => (
                            <article
                                key={index}
                                className="news-card-refined"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="news-image-refined">
                                    <img src={article.image} alt={article.title} />
                                </div>
                                <div className="news-content-refined" style={{ textAlign: 'center' }}>
                                    <h3 className="news-article-title-refined">{article.title}</h3>
                                    <p className="news-excerpt-refined">{article.description}</p>
                                    <a href="#" className="news-card-btn">Voir plus</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewsPage
