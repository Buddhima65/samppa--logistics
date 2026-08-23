
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './LogisticsPage.css';
import sampaaLogo from '../assets/images/slogo.jpg';
import logisticsHero from '../assets/images/transport.jpg';

const content = {
  en: {
    // Navigation (same as main nav)
    nav: ['Home', 'Sampaa Logistics', 'Property Services', 'Green Coco Finland', 'Company', 'Contact'],
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
      email: 'info@samppalogistics.fi',
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
    nav: ['Etusivu', 'Sampaa Logistics', 'Kiinteistöpalvelut', 'Green Coco Finland', 'Yritys', 'Yhteystiedot'],
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
      phone: '+358 40 123 4567',
      email: 'info@samppalogistics.fi',
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
const navTargets = ['/', '/logistics', '/property', '/green-coco', '/company', '/contact'];

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
        <section className="logistics-services-section shell">
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
            <Link to="/#contact" className="button button--primary button--large">
              {language === 'en' ? 'Request a Quote' : 'Pyydä Tarjous'}
            </Link>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="contact-footer" id="contact">
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
          <p>{text.footer.copyright}</p>
          <div className="footer-links">
            <a href="#home">{text.footer.privacy}</a>
            <a href="#home">{text.footer.cookies}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LogisticsPage;