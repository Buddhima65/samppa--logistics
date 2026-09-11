
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './WinterServicesPage.css';
import sampaaLogo from '../assets/images/slogo.jpg';
import vastuLogo from '../assets/images/vastu.png';

const content = {
  en: {
    nav: [],
    quoteButton: 'Request a Quote',
    backButton: '← Back to Property Services',

    heroTitle: 'Safe and accessible yard areas even in winter',
    heroSubtitle: 'We take care of winter maintenance of yards, walkways, and other outdoor areas reliably and carefully.',
    heroText: 'The goal is to keep areas safe and easy to navigate even during snow and slippery conditions.',

    services: [
      {
        icon: '❄️',
        title: 'Snow Work',
        text: 'We take care of snow removal from yard areas, walkways, and other necessary areas. Regular snow work helps keep walkways open and safe.'
      },
      {
        icon: '🛷',
        title: 'Snow Clearing',
        text: 'We remove snow from walkways, yards, stairs, and other areas when needed. We make sure that snow does not prevent safe passage or cause unnecessary harm.'
      },
      {
        icon: '🪨',
        title: 'Sanding',
        text: 'We sand slippery walkways and yard areas as needed. Sanding improves grip and reduces the risk of slipping in winter conditions.'
      },
      {
        icon: '⚠️',
        title: 'Ice Prevention',
        text: 'We react to slippery conditions and take care of the safety of walkways. Ice prevention can use sanding and other suitable methods according to the property\'s needs.'
      }
    ],

    closingText: 'Let\'s keep walkways safe throughout the winter.',

    ctaTitle: 'Request a Quote',
    ctaText: 'Contact us and request a quote – we respond quickly and serve you reliably.',
    ctaButton: 'Request a Quote',

    footer: {
      copyright: 'Copyright 2026 Sampaa Logistics. All rights reserved.',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Settings'
    }
  },

  fi: {
    nav: [],
    quoteButton: 'Pyydä Tarjous',
    backButton: '← Takaisin Kiinteistöpalveluihin',

    heroTitle: 'Turvalliset ja kulkukelpoiset piha-alueet myös talvella',
    heroSubtitle: 'Huolehdimme pihojen, kulkureittien ja muiden ulkoalueiden talvikunnossapidosta luotettavasti ja huolellisesti.',
    heroText: 'Tavoitteena on pitää alueet turvallisina ja helposti kuljettavina myös lumen ja liukkauden aikana.',

    services: [
      {
        icon: '❄️',
        title: 'Lumityöt',
        text: 'Huolehdimme lumen poistamisesta piha-alueilta, kulkuväyliltä ja muilta tarvittavilta alueilta. Säännölliset lumityöt auttavat pitämään kulkureitit avoimina ja turvallisina.'
      },
      {
        icon: '🛷',
        title: 'Lumenluonti',
        text: 'Poistamme lunta kulkuväyliltä, pihoilta, portailta ja muilta alueilta tarvittaessa. Huolehdimme, että lumi ei estä turvallista kulkemista tai aiheuta tarpeetonta haittaa.'
      },
      {
        icon: '🪨',
        title: 'Hiekoitus',
        text: 'Hiekoitamme liukkaat kulkuväylät ja piha-alueet tarpeen mukaan. Hiekoitus parantaa pitoa ja vähentää liukastumisriskiä talvisissa olosuhteissa.'
      },
      {
        icon: '⚠️',
        title: 'Liukkaudentorjunta',
        text: 'Reagoimme liukkaisiin olosuhteisiin ja huolehdimme kulkuväylien turvallisuudesta. Liukkaudentorjuntaan voidaan käyttää hiekoitusta ja muita soveltuvia menetelmiä kohteen tarpeiden mukaan.'
      }
    ],

    closingText: 'Pidetään kulkureitit turvallisina koko talven ajan.',

    ctaTitle: 'Pyydä tarjous',
    ctaText: 'Ota yhteyttä ja pyydä tarjous – vastaamme nopeasti ja palvelemme luotettavasti.',
    ctaButton: 'Pyydä Tarjous',

    footer: {
      copyright: 'Copyright 2026 Sampaa Logistics. Kaikki oikeudet pidätetään.',
      privacy: 'Tietosuojaseloste',
      cookies: 'Evästeasetukset'
    }
  }
};

function WinterServicesPage({ language, setLanguage }) {
  const text = content[language];
  const navTargets = ['/', '/logistics', '/property', '/company', '/contact'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="winter-services-page">
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
          <div className="language-switch" role="group">
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

      <main className="winter-services-main">
        {/* Back Button */}
        <div className="winter-services-back-wrapper shell">
          <Link to="/property" className="back-button">
            {text.backButton}
          </Link>
        </div>

        {/* Hero Section */}
        <section className="winter-services-hero shell">
          <div className="winter-services-hero__content">
            <h1>{text.heroTitle}</h1>
            <p className="winter-services-hero__subtitle">{text.heroSubtitle}</p>
            <p className="winter-services-hero__text">{text.heroText}</p>
          </div>
        </section>

        {/* Services Section */}
        <section className="winter-services-services shell">
          <div className="winter-services-services-grid">
            {text.services.map((service, index) => (
              <div key={index} className="winter-services-service-card">
                <div className="winter-services-service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>

          {/* Closing Text */}
          <p className="winter-services-closing-text">{text.closingText}</p>
        </section>

        {/* CTA Section */}
        <section className="winter-services-cta shell">
          <div className="winter-services-cta-box">
            <h2>{text.ctaTitle}</h2>
            <p>{text.ctaText}</p>
            <Link to="/contact" className="button button--primary button--large">
              {text.ctaButton}
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="home-contact-footer">
        <div className="shell home-contact-footer__top">
          <div className="home-contact-block home-contact-brand">
            <div className="home-footer-brand">
              <span className="home-brand__mark">
                <img src={sampaaLogo} alt="" className="home-brand__logo" />
              </span>
              <div className="home-brand__text">
                <span className="home-brand__name">Samppa</span>
                <span className="home-brand__sub">Logistics OY</span>
              </div>
            </div>
          </div>

          <div className="home-contact-block">
            <h4>{language === 'en' ? 'Call Us' : 'Soita Meille'}</h4>
            <strong>+358 44 3438 613</strong>
            <p>Mon-Fri 8.00 - 17.00</p>
          </div>

          <div className="home-contact-block">
            <h4>{language === 'en' ? 'Email' : 'Sähköposti'}</h4>
            <strong>samppa@samppalogistics.fi</strong>
            <p>24/7</p>
          </div>

          <div className="home-contact-block">
            <h4>{language === 'en' ? 'Location' : 'Sijainti'}</h4>
            <strong>{language === 'en' ? 'Finland' : 'Suomi'}</strong>
            <p>Helsinki</p>
          </div>

          <div className="home-contact-block home-contact-social">
            <h4>{language === 'en' ? 'Follow Us' : 'Seuraa Meitä'}<img src={vastuLogo} alt="Luotettava Kumppani" className="home-footer-vastu" /></h4>
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

export default WinterServicesPage;