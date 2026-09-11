import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import LogisticsPage from './pages/LogisticsPage';
import PropertyPage from './pages/PropertyPage';
import CompanyPage from './pages/CompanyPage';
import ContactPage from './pages/ContactPage';
import CleaningPage from './pages/CleaningPage';
import WindowWashingPage from './pages/WindowWashingPage';
import PropertyMaintenancePage from './pages/PropertyMaintenancePage';
import OutdoorAreasPage from './pages/OutdoorAreasPage'; 
import WinterServicesPage from './pages/WinterServicesPage'; 
import ScrollToTop from './components/ScrollToTop'; 
import sampaaLogo from './assets/images/slogo.jpg';
import vastuLogo from './assets/images/vastu.png';
import logisticsImage from './assets/images/sa.jpg';
import propertyImage from './assets/images/property.jpg';



const copy = {
  en: {
    languageLabel: 'Language',
    nav: ['Home', 'Transport Service', 'Property Services', 'Company', 'Contact'],
    quoteButton: 'Request a Quote',
    heroEyebrow: 'Helsinki-Based Route Network',
    heroTitle: 'Fair Service All The Way To Your Destination',
    heroText:
      'Samppa Logistics offers reliable transport and property services with sustainable products for modern homes and businesses.',
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
        points: ['Cleaning', 'Yard Care', 'Maintenance', 'Snow Work'],
        theme: 'green',
        icon: 'house',
        image: propertyImage,
        imageAlt: 'Sampaa Logistics property services',
        link: '/property'
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
      phone: '+358 44 3438 613',
      emailLabel: 'Email',
      email: 'samppa@samppalogistics.fi',
      locationLabel: 'Location',
      location: 'Finland',
      socialLabel: 'Follow Us',
    },
    copyright: 'Copyright 2026 Sampaa Logistics. All rights reserved.',
  },
  fi: {
    languageLabel: 'Kieli',
    nav: ['Etusivu', 'Kuljetuspalvelut', 'Kiinteistöpalvelut', 'Yritys', 'Yhteystiedot'],
    quoteButton: 'Pyydä Tarjous',
    heroEyebrow: 'Helsinki-pohjainen palveluverkosto',
    heroTitle: 'Reilua Palvelua Perille Saakka',
    heroText:
      'Samppa Logistics tarjoaa luotettavaa kuljetus- ja kiinteistöpalvelua sekä vastuullisia tuotteita huomisen tarpeisiin.',
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
        points: ['Siivous', 'Pihapalvelut', 'Kiinteistöhuolto', 'Lumityöt'],
        theme: 'green',
        icon: 'house',
        image: propertyImage,
        imageAlt: 'Sampaa Logistics property services',
        link: '/property'
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
      phone: '+358 44 3438 613',
      emailLabel: 'Sähköposti',
      email: 'samppa@samppalogistics.fi',
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
  const navTargets = ['/', '/logistics', '/property', '/company', '/contact'];

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
              poster="/assets/videos/hero-poster.jpg"
            >
              <source src="/assets/videos/herov2.mp4" type="video/mp4" />
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
        

        {/* FOOTER - DARK BLUE BACKGROUND */}
        <section className="home-contact-footer" id="contact">
          <div className="shell home-contact-footer__top">
            <div className="home-contact-block home-contact-brand">
              <div className="home-footer-brand" aria-label="Samppa Logistics home">
                <span className="home-brand__mark" aria-hidden="true">
                  <img src={sampaaLogo} alt="" className="home-brand__logo" />
                </span>
                <div className="home-brand__text">
                  <span className="home-brand__name">Samppa</span>
                  <span className="home-brand__sub">Logistics OY</span>
                </div>
              </div>
            </div>

            <div className="home-contact-block">
              <h4>{text.contact.phoneLabel}</h4>
              <strong>{text.contact.phone}</strong>
              <strong>+358 44 2402 773</strong>
              <p>Mon-Fri 8.00 - 17.00</p>
            </div>

            <div className="home-contact-block">
              <h4>{text.contact.emailLabel}</h4>
              <strong>{text.contact.email}</strong>
              <p>24/7</p>
            </div>

            <div className="home-contact-block">
              <h4>{text.contact.locationLabel}</h4>
              <strong>{text.contact.location}</strong>
              <p>Helsinki</p>
            </div>

            <div className="home-contact-block home-contact-social">
              <h4>{text.contact.socialLabel}<img src={vastuLogo} alt="Luotettava Kumppani" className="home-footer-vastu" /></h4>
              <div className="home-social-row">
                <a href="//www.facebook.com/profile.php?id=61569304281836" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg className="home-social-icon-footer" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="//www.instagram.com/samppa_logisticks_oy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg className="home-social-icon-footer" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              
              </div>
            </div>
          </div>

          <div className="shell home-contact-footer__bottom">
            <p>{text.copyright}</p>
            <div className="home-footer-links">
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
  const [language, setLanguage] = useState('fi');

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage language={language} setLanguage={setLanguage} />} />
        <Route path="/logistics" element={<LogisticsPage language={language} setLanguage={setLanguage} />} />
        <Route path="/property" element={<PropertyPage language={language} setLanguage={setLanguage} />} />
        <Route path="/cleaning" element={<CleaningPage language={language} setLanguage={setLanguage} />} /> 
        <Route path="/window-washing" element={<WindowWashingPage language={language} setLanguage={setLanguage} />} />
 {/* Add this route */}
        <Route path="/property-maintenance" element={<PropertyMaintenancePage language={language} setLanguage={setLanguage} />} />
        <Route path="/outdoor-areas" element={<OutdoorAreasPage language={language} setLanguage={setLanguage} />} /> 
        <Route path="/winter-services" element={<WinterServicesPage language={language} setLanguage={setLanguage} />} />
          {/* ← ADD THIS */}
        <Route path="/company" element={<CompanyPage language={language} setLanguage={setLanguage} />} />
        <Route path="/contact" element={<ContactPage language={language} setLanguage={setLanguage} />} />
      </Routes>
    </Router>
  );
}

export default App;