
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './LogisticsPage.css';
import sampaaLogo from '../assets/images/slogo.jpg';
import vastuLogo from '../assets/images/vastu.png';
import logisticsHero from '../assets/images/sa.jpg';

const content = {
  en: {
    // Navigation (same as main nav)
    nav: ['Home', 'Transport Service', 'Property Services', 'Company', 'Contact'],
    quoteButton: 'Request a Quote',
    
    // Page content
    pageTitle: 'SAMPPA LOGISTICS OY',
    heroTitle: 'Fair service all the way to your destination',
    heroSubtitle: 'Reliable moving and transport services for private customers and businesses',
    
    intro: {
      title: 'Samppa Logistics Oy',
      text: 'Samppa Logistics Oy offers reliable moving and transport services for both private customers and businesses throughout Finland. We serve private individuals and companies flexibly and with professional expertise. We handle moves, goods and parcel deliveries, and corporate transport needs safely, carefully, and always on schedule.',
      text2: 'Whether it\'s a move, a single transport, or your company\'s regular transport needs, we handle the job professionally from start to finish. Customer satisfaction, reliability, and good service are the foundation of our operations.',
      cta: 'Request a quote today – we\'re happy to help!'
    },
    
    services: [
      {
        icon: '📦',
        title: 'Goods and Parcel Deliveries',
        text: 'We transport goods safely and reliably for both private customers and businesses.'
      },
      {
        icon: '🚚',
        title: 'Moving Services',
        text: 'Smooth home and business moves with professional expertise.'
      },
      {
        icon: '🏢',
        title: 'Corporate Transport Services',
        text: 'We offer flexible goods, distribution, and contract transport services for companies reliably and according to schedule.'
      },
      {
        icon: '🏢',
        title: 'Corporate Moves',
        text: 'Efficient and careful moves for offices, commercial spaces, and businesses.'
      }
    ],
    
    additionalServices: [
      {
        icon: '👷',
        title: 'Van and Driver + Helper',
        text: 'You get access to transport equipment and an experienced driver, plus a helper if needed.'
      },
      {
        icon: '📦',
        title: 'Moving Box Rental',
        text: 'Rental moving boxes make your move easier.'
      },
      {
        icon: '🧹',
        title: 'Moving and Final Cleaning',
        text: 'We offer moving and final cleaning services as agreed.'
      }
    ],
    
    whyChoose: {
      title: 'Why Choose Samppa Logistics Oy?',
      points: [
        '✅ Reliable and friendly service',
        '✅ Safe and punctual deliveries',
        '✅ Flexible schedules',
        '✅ We serve both private and corporate customers',
        '✅ Competitive pricing',
        '✅ Customer satisfaction is our priority'
      ]
    },
    
    contact: {
      title: 'Contact Us',
      subtitle: 'Need moving or transport services?',
      text: 'Contact us and request a quote – we respond quickly and serve you reliably.',
      phone: '+358 40 123 4567',
      email: 'samppa@samppalogistics.fi',
      location: 'Helsinki, Finland',
      phoneLabel: 'Call Us',
      emailLabel: 'Email',
      locationLabel: 'Location',
      socialLabel: 'Follow Us'
    },
    
    footer: {
      copyright: 'Copyright 2026 Sampaa Logistics. All rights reserved.',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Settings'
    },
    
    backToHome: 'Back to Home'
  },
  
  fi: {
    // Navigation (same as main nav)
    nav: ['Etusivu', 'Kuljetuspalvelut', 'Kiinteistöpalvelut', 'Yritys', 'Yhteystiedot'],
    quoteButton: 'Pyydä Tarjous',
    
    // Page content
    pageTitle: 'SAMPPA LOGISTICS OY',
    heroTitle: 'Reilua palvelua perille saakka',
    heroSubtitle: 'Luotettavat muutto- ja kuljetuspalvelut yksityisille ja yrityksille',
    
    intro: {
      title: 'Samppa Logistics Oy',
      text: 'Samppa Logistics Oy tarjoaa luotettavat muutto- ja kuljetuspalvelut sekä yksityisille että yrityksille ympäri Suomen. Palvelemme niin yksityisasiakkaita kuin yrityksiä joustavasti ja ammattitaidolla. Hoidamme muutot, tavara- ja pakettikuljetukset sekä yritysten kuljetustarpeet turvallisesti, huolellisesti ja aina sovitussa aikataulussa.',
      text2: 'Olipa kyseessä muutto, yksittäinen kuljetus tai yrityksenne säännöllinen kuljetustarve, hoidamme työn ammattitaidolla alusta loppuun. Asiakkaan tyytyväisyys, luotettavuus ja hyvä palvelu ovat toimintamme perusta.',
      cta: 'Pyydä tarjous jo tänään – autamme mielellämme!'
    },
    
    services: [
      {
        icon: '📦',
        title: 'Tavara- ja pakettikuljetukset',
        text: 'Kuljetamme tavarat turvallisesti ja luotettavasti niin yksityisille kuin yrityksille.'
      },
      {
        icon: '🚚',
        title: 'Muuttopalvelut',
        text: 'Sujuvat koti- ja yritysmuutot ammattitaidolla.'
      },
      {
        icon: '🏢',
        title: 'Yritysten kuljetuspalvelut',
        text: 'Tarjoamme yrityksille joustavat tavara-, jakelu- ja sopimuskuljetukset luotettavasti ja sovitun aikataulun mukaisesti.'
      },
      {
        icon: '🏢',
        title: 'Yritysmuutot',
        text: 'Toimistojen, liiketilojen ja yritysten muutot tehokkaasti ja huolellisesti.'
      }
    ],
    
    additionalServices: [
      {
        icon: '👷',
        title: 'Paku ja kuljettaja + apumies',
        text: 'Saat käyttöösi kuljetuskaluston sekä kokeneen kuljettajan, tarvittaessa myös apumiehen.'
      },
      {
        icon: '📦',
        title: 'Muuttolaatikoiden vuokraus',
        text: 'Vuokrattavat muuttolaatikot helpottavat muuttoa.'
      },
      {
        icon: '🧹',
        title: 'Muutto- ja loppusiivoukset',
        text: 'Tarjoamme muutto- ja loppusiivoukset sopimuksen mukaan.'
      }
    ],
    
    whyChoose: {
      title: 'Miksi valita Samppa Logistics Oy?',
      points: [
        '✅ Luotettava ja ystävällinen palvelu',
        '✅ Turvalliset ja täsmälliset kuljetukset',
        '✅ Joustavat aikataulut',
        '✅ Palvelemme sekä yksityisiä että yrityksiä',
        '✅ Kilpailukykyinen hinnoittelu',
        '✅ Asiakkaan tyytyväisyys on meille tärkeintä'
      ]
    },
    
    contact: {
      title: 'Ota yhteyttä',
      subtitle: 'Tarvitsetko muutto- tai kuljetuspalvelua?',
      text: 'Ota yhteyttä ja pyydä tarjous – vastaamme nopeasti ja palvelemme luotettavasti.',
      phone: '+358 44 3438 613',
      email: 'samppa@samppalogistics.fi',
      location: 'Helsinki, Suomi',
      phoneLabel: 'Soita Meille',
      emailLabel: 'Sähköposti',
      locationLabel: 'Sijainti',
      socialLabel: 'Seuraa Meitä'
    },
    
    footer: {
      copyright: 'Copyright 2026 Sampaa Logistics. Kaikki oikeudet pidätetään.',
      privacy: 'Tietosuojaseloste',
      cookies: 'Evästeasetukset'
    },
    
    backToHome: 'Takaisin Etusivulle'
  }
};

function LogisticsPage({ language, setLanguage }) {
  const text = content[language];
 // Inside LogisticsPage component, update the navTargets:
const navTargets = ['/', '/logistics', '/property', '/company', '/contact'];

  return (
    <div className="logistics-page">
      {/* ===== HEADER / NAVBAR ===== */}
      <header className="topbar shell">
        <Link className="brand" to="/" aria-label="Sampaa Logistics home">
          <span className="brand__mark" aria-hidden="true">
            <img src={sampaaLogo} alt="" className="brand__logo" />
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          {text.nav.map((item, index) => {
            const target = navTargets[index];
            return (
              <Link key={item} to={target}>
                {item}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <div className="language-switch" role="group" aria-label={language === 'en' ? 'Language' : 'Kieli'}>
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
          <Link to="/#contact" className="quote-btn">
            {text.quoteButton}
          </Link>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="logistics-main">
        {/* Page Title */}
        <div className="logistics-page-title shell">
          <h1 className="page-title">{text.pageTitle}</h1>
        </div>

        {/* Hero Section */}
        <section className="logistics-hero shell">
          <div className="logistics-hero__content">
            <h1>{text.heroTitle}</h1>
            <p className="logistics-hero__subtitle">{text.heroSubtitle}</p>
          </div>
          <div className="logistics-hero__image">
            <img src={logisticsHero} alt={language === 'en' ? 'Logistics services' : 'Kuljetuspalvelut'} />
          </div>
        </section>

        {/* Introduction Section */}
        <section className="logistics-intro shell">
          <div className="intro-content">
            <h2 className="section-title">{text.intro.title}</h2>
            <p className="intro-text">{text.intro.text}</p>
            <p className="intro-text">{text.intro.text2}</p>
            <p className="intro-cta">{text.intro.cta}</p>
          </div>
          <div className="intro-divider">
            <span className="divider-line"></span>
          </div>
        </section>

        {/* Main Services */}
        <section className="logistics-services-section shell" id="services">
          <h2 className="section-title">{language === 'en' ? 'Our Services' : 'Palvelumme'}</h2>
          <div className="services-grid">
            {text.services.map((service, index) => (
              <div key={index} className="service-card-item">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="logistics-additional-services shell">
          <h2 className="section-title">{language === 'en' ? 'Additional Services' : 'Lisäpalvelut'}</h2>
          <div className="additional-services-grid">
            {text.additionalServices.map((service, index) => (
              <div key={index} className="additional-service-item">
                <div className="service-icon">{service.icon}</div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="logistics-why-choose shell">
          <div className="why-choose-box">
            <h2 className="section-title">{text.whyChoose.title}</h2>
            <ul className="why-choose-list">
              {text.whyChoose.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="logistics-contact-cta shell">
          <div className="contact-cta-box">
            <h2>{text.contact.title}</h2>
            <p className="contact-cta-subtitle">{text.contact.subtitle}</p>
            <p className="contact-cta-text">{text.contact.text}</p>
            <Link to="/contact" className="button button--primary button--large">
              {language === 'en' ? 'Request a Quote' : 'Pyydä Tarjous'}
            </Link>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="home-contact-footer" id="contact">
        <div className="shell home-contact-footer__top">
          <div className="home-contact-block home-contact-brand">
            <div className="home-footer-brand" aria-label="Sampaa Logistics home">
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
          <p>{text.footer.copyright}</p>
          <div className="home-footer-links">
            <a href="#home">{text.footer.privacy}</a>
            <a href="#home">{text.footer.cookies}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LogisticsPage;