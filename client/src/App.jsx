import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import LogisticsPage from './pages/LogisticsPage';
import PropertyPage from './pages/PropertyPage';
import CompanyPage from './pages/CompanyPage';
import ContactPage from './pages/ContactPage';
import sampaaLogo from './assets/images/slogo.jpg';
import logisticsImage from './assets/images/transport.jpg';
import propertyImage from './assets/images/property.jpg';
import greenCocoImage from './assets/images/green.jpg';

const copy = {
  en: {
    languageLabel: 'Language',
    nav: ['Home', 'Sampaa Logistics', 'Property Services', 'Green Coco Finland', 'Company', 'Contact'],
    quoteButton: 'Request a Quote',
    heroEyebrow: 'Helsinki-Based Route Network',
    heroTitle: 'Fair Service All The Way To Your Destination',
    heroText:
      'Sampaa Logistics offers reliable transport and property services with sustainable products for modern homes and businesses.',
    heroPrimary: 'Request a Quote',
    heroSecondary: 'Contact Us',
    manifestLabel: 'On This Route',
    cardCta: 'Explore Service',
    cards: [
      {
        id: 'logistics',
        title: 'Transport and Logistics',
        text: 'Reliable transport and logistics services for businesses and private customers.',
        points: ['Deliveries', 'International', 'Logistics', 'On Time'],
        theme: 'blue',
        icon: 'truck',
        image: logisticsImage,
        imageAlt: 'Sampaa Logistics transport services',
        link: '/logistics'
      },
      {
        id: 'property',
        title: 'Property Services',
        text: 'Versatile property services all year round for maintenance and upkeep.',
        points: ['Snow Work', 'Yard Care', 'Maintenance', 'Cleaning'],
        theme: 'green',
        icon: 'house',
        image: propertyImage,
        imageAlt: 'Sampaa Logistics property services',
        link: '/property'
      },
      {
        id: 'green-coco',
        title: 'Green Coco Finland',
        text: 'Natural and sustainable products for better homes and daily life.',
        points: ['Eco', 'Natural', 'Sustainable', 'Future Ready'],
        theme: 'eco',
        icon: 'leaf',
        image: greenCocoImage,
        imageAlt: 'Green Coco Finland sustainable products',
        link: '/green-coco'
      },
    ],
    trust: [
      { title: 'Reliable Service', text: 'Trusted experts for your daily needs.' },
      { title: 'Customer First', text: 'Every customer is important to us.' },
      { title: 'Sustainable Forward', text: 'We respect the environment.' },
      { title: 'Flexible Service', text: 'Fast and adaptable support.' },
    ],
    contact: {
      phoneLabel: 'Call Us',
      phone: '040 123 4567',
      emailLabel: 'Email',
      email: 'info@samppalogistics.fi',
      locationLabel: 'Location',
      location: 'Finland',
      socialLabel: 'Follow Us',
    },
    copyright: 'Copyright 2026 Sampaa Logistics. All rights reserved.',
  },
  fi: {
    languageLabel: 'Kieli',
    nav: ['Etusivu', 'Sampaa Logistics', 'Kiinteistöpalvelut', 'Green Coco Finland', 'Yritys', 'Yhteystiedot'],
    quoteButton: 'Pyydä Tarjous',
    heroEyebrow: 'Helsinki-pohjainen palveluverkosto',
    heroTitle: 'Reilua Palvelua Perille Saakka',
    heroText:
      'Sampaa Logistics tarjoaa luotettavaa kuljetus- ja kiinteistöpalvelua sekä vastuullisia tuotteita huomisen tarpeisiin.',
    heroPrimary: 'Pyydä Tarjous',
    heroSecondary: 'Ota Yhteyttä',
    manifestLabel: 'Tällä Reitillä',
    cardCta: 'Tutustu Palveluun',
    cards: [
      {
        id: 'logistics',
        title: 'Kuljetukset ja Logistiikka',
        text: 'Luotettavat kuljetus- ja logistiikkaratkaisut yrityksille ja yksityisille.',
        points: ['Kuljetukset', 'Kansainväliset', 'Logistiikka', 'Täsmällisesti'],
        theme: 'blue',
        icon: 'truck',
        image: logisticsImage,
        imageAlt: 'Sampaa Logistics transport services',
        link: '/logistics'
      },
      {
        id: 'property',
        title: 'Kiinteistöpalvelut',
        text: 'Monipuoliset kiinteistöpalvelut ympäri vuoden ulkoalueista sisätiloihin.',
        points: ['Lumityöt', 'Pihapalvelut', 'Kiinteistöhuolto', 'Siivous'],
        theme: 'green',
        icon: 'house',
        image: propertyImage,
        imageAlt: 'Sampaa Logistics property services',
        link: '/property'
      },
      {
        id: 'green-coco',
        title: 'Green Coco Finland',
        text: 'Ekologisia ja kestäviä tuotteita paremman huomisen rakentamiseen.',
        points: ['Eco', 'Natural', 'Sustainable', 'Better Tomorrow'],
        theme: 'eco',
        icon: 'leaf',
        image: greenCocoImage,
        imageAlt: 'Green Coco Finland sustainable products',
        link: '/green-coco'
      },
    ],
    trust: [
      { title: 'Luotettavaa Palvelua', text: 'Voit luottaa kokemukseemme ja ammattitaitoomme.' },
      { title: 'Asiakas Keskiössä', text: 'Jokainen asiakas on meille tärkeä.' },
      { title: 'Vastuullisesti Eteenpäin', text: 'Toimimme ympäristöä kunnioittaen.' },
      { title: 'Joustavaa Palvelua', text: 'Nopeasti ja joustavasti juuri sinun tarpeisiisi.' },
    ],
    contact: {
      phoneLabel: 'Soita Meille',
      phone: '040 123 4567',
      emailLabel: 'Sähköposti',
      email: 'info@samppalogistics.fi',
      locationLabel: 'Sijainti',
      location: 'Suomi',
      socialLabel: 'Seuraa Meitä',
    },
    copyright: 'Copyright 2026 Sampaa Logistics. Kaikki oikeudet pidätetään.',
  },
};

function ServiceIcon({ name }) {
  switch (name) {
    case 'truck':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M2 6.5h11v9H2z" strokeLinejoin="round" />
          <path d="M13 10h4.2L20 12.7v2.8h-7z" strokeLinejoin="round" />
          <circle cx="6" cy="17.2" r="1.7" />
          <circle cx="16.5" cy="17.2" r="1.7" />
        </svg>
      );
    case 'house':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M3.5 11.5 12 4l8.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 10v9h13v-9" strokeLinejoin="round" />
          <path d="M10 19v-5h4v5" strokeLinejoin="round" />
        </svg>
      );
    case 'leaf':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path
            d="M20 4c.6 7-2.4 12.4-8 14.4C6 20 3.5 17 4.6 12 5.8 6.6 12 4 20 4Z"
            strokeLinejoin="round"
          />
          <path d="M19 5 8.5 15.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function HomePage({ language, setLanguage }) {
  const text = copy[language];
  const navigate = useNavigate();

  // Define navigation targets - all routes now
  const navTargets = ['/', '/logistics', '/property', '/green-coco', '/company', '/contact'];

  return (
    <>
      <header className="topbar shell">
        <Link className="brand" to="/" aria-label="Sampaa Logistics home">
          <span className="brand__mark" aria-hidden="true">
            <img src={sampaaLogo} alt="" className="brand__logo" />
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          {text.nav.map((item, index) => {
            const target = navTargets[index];
            return <Link key={item} to={target}>{item}</Link>;
          })}
        </nav>

        <div className="header-actions">
          <div className="language-switch" role="group" aria-label={text.languageLabel}>
            <button
              type="button"
              className={language === 'en' ? 'is-active' : ''}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={language === 'fi' ? 'is-active' : ''}
              onClick={() => setLanguage('fi')}
            >
              FI
            </button>
          </div>
          <Link to="/contact" className="quote-btn">
            {text.quoteButton}
          </Link>
        </div>
      </header>

      <main>
        <section className="hero shell" id="home">
          <div className="hero__video-wrapper">
            <video 
              className="hero__video" 
              autoPlay 
              muted 
              loop 
              playsInline
              poster="/src/assets/videos/hero-poster.jpg"
            >
              <source src="/src/assets/videos/herov.mp4" type="video/mp4" />
            </video>
            <div className="hero__overlay"></div>
          </div>

          <div className="hero__content">
            <div className="hero__copy">
              <p className="hero__eyebrow">{text.heroEyebrow}</p>
              <h1>{text.heroTitle}</h1>
              <p className="hero__text">{text.heroText}</p>

              <div className="hero__actions">
                <a className="button button--primary" href="#services">
                  {text.heroPrimary}
                </a>
                <Link to="/contact" className="button button--ghost">
                  {text.heroSecondary}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section shell" id="services">
          <div className="service-grid">
            {text.cards.map((card, index) => (
              <article
                key={card.title}
                className={`service-card service-card--${card.theme}`}
                id={card.id}
              >
                <div className="service-card__image-wrapper">
                  <img 
                    src={card.image} 
                    alt={card.imageAlt} 
                    className="service-card__image"
                    loading="lazy"
                  />
                  <div className={`service-card__image-overlay service-card__image-overlay--${card.theme}`}>
                    <span className={`service-card__badge service-card__badge--${card.theme}`}>
                      <ServiceIcon name={card.icon} />
                    </span>
                    <span className="service-card__index">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                <div className="service-card__body">
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>

                  <ul>
                    {card.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  {card.link ? (
                    <Link to={card.link} className="service-card__cta">
                      {text.cardCta}
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  ) : (
                    <Link to="/contact" className="service-card__cta">
                      {text.cardCta}
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="trust shell" id="company">
          {text.trust.map((item) => (
            <article key={item.title} className="trust-item">
              <span className="trust-item__icon" aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="contact-footer" id="contact">
          <div className="shell contact-footer__top">
            <div className="contact-logo">
              <img src={sampaaLogo} alt="Sampaa Logistics" />
            </div>

            <div className="contact-block">
              <h4>{text.contact.phoneLabel}</h4>
              <strong>{text.contact.phone}</strong>
              <p>Mon-Fri 8.00 - 17.00</p>
            </div>

            <div className="contact-block">
              <h4>{text.contact.emailLabel}</h4>
              <strong>{text.contact.email}</strong>
              <p>24/7</p>
            </div>

            <div className="contact-block">
              <h4>{text.contact.locationLabel}</h4>
              <strong>{text.contact.location}</strong>
              <p>Helsinki</p>
            </div>

            <div className="contact-block contact-social">
              <h4>{text.contact.socialLabel}</h4>
              <div className="social-row">
                <span>f</span>
                <span>ig</span>
                <span>in</span>
              </div>
            </div>
          </div>

          <div className="shell contact-footer__bottom">
            <p>{text.copyright}</p>
            <div className="footer-links">
              <a href="#home">Tietosuojaseloste</a>
              <a href="#home">Evästeasetukset</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage language={language} setLanguage={setLanguage} />} />
        <Route path="/logistics" element={<LogisticsPage language={language} setLanguage={setLanguage} />} />
        <Route path="/property" element={<PropertyPage language={language} setLanguage={setLanguage} />} />
        <Route path="/company" element={<CompanyPage language={language} setLanguage={setLanguage} />} />
        <Route path="/contact" element={<ContactPage language={language} setLanguage={setLanguage} />} />
      </Routes>
    </Router>
  );
}

export default App;