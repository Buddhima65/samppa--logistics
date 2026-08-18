import { useState } from 'react'
import './App.css'
import sampaaLogo from './assets/images/slogo.jpg'

const copy = {
  en: {
    languageLabel: 'Language',
    nav: ['Home', 'Sampaa Logistics', 'Property Services', 'Green Coco Finland', 'Company', 'Contact'],
    quoteButton: 'Request a Quote',
    heroTitle: 'Fair Service All The Way To Your Destination',
    heroText:
      'Sampaa Logistics offers reliable transport and property services with sustainable products for modern homes and businesses.',
    heroPrimary: 'Request a Quote',
    heroSecondary: 'Contact Us',
    cardCta: 'Explore Services',
    cards: [
      {
        id: 'logistics',
        title: 'Transport and Logistics',
        text: 'Reliable transport and logistics services for businesses and private customers.',
        points: ['Deliveries', 'International', 'Logistics', 'On Time'],
        theme: 'blue',
      },
      {
        id: 'property',
        title: 'Property Services',
        text: 'Versatile property services all year round for maintenance and upkeep.',
        points: ['Snow Work', 'Yard Care', 'Maintenance', 'Cleaning'],
        theme: 'green',
      },
      {
        id: 'green-coco',
        title: 'Green Coco Finland',
        text: 'Natural and sustainable products for better homes and daily life.',
        points: ['Eco', 'Natural', 'Sustainable', 'Future Ready'],
        theme: 'eco',
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
    heroTitle: 'Reilua Palvelua Perille Saakka',
    heroText:
      'Sampaa Logistics tarjoaa luotettavaa kuljetus- ja kiinteistöpalvelua sekä vastuullisia tuotteita huomisen tarpeisiin.',
    heroPrimary: 'Pyydä Tarjous',
    heroSecondary: 'Ota Yhteyttä',
    cardCta: 'Tutustu Palveluihin',
    cards: [
      {
        id: 'logistics',
        title: 'Kuljetukset ja Logistiikka',
        text: 'Luotettavat kuljetus- ja logistiikkaratkaisut yrityksille ja yksityisille.',
        points: ['Kuljetukset', 'Kansainväliset', 'Logistiikka', 'Täsmällisesti'],
        theme: 'blue',
      },
      {
        id: 'property',
        title: 'Kiinteistöpalvelut',
        text: 'Monipuoliset kiinteistöpalvelut ympäri vuoden ulkoalueista sisätiloihin.',
        points: ['Lumityöt', 'Pihapalvelut', 'Kiinteistöhuolto', 'Siivous'],
        theme: 'green',
      },
      {
        id: 'green-coco',
        title: 'Green Coco Finland',
        text: 'Ekologisia ja kestäviä tuotteita paremman huomisen rakentamiseen.',
        points: ['Eco', 'Natural', 'Sustainable', 'Better Tomorrow'],
        theme: 'eco',
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
}

function App() {
  const [language, setLanguage] = useState('en')

  const text = copy[language]

  const navTargets = ['#home', '#logistics', '#property', '#green-coco', '#company', '#contact']

  return (
    <div className="page">
      <header className="topbar shell">
        <a className="brand" href="#home" aria-label="Sampaa Logistics home">
          <span className="brand__mark" aria-hidden="true">
            <img src={sampaaLogo} alt="" className="brand__logo" />
          </span>
        </a>

        <nav className="nav" aria-label="Primary">
          {text.nav.map((item, index) => (
            <a key={item} href={navTargets[index]}>
              {item}
            </a>
          ))}
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
          <a href="#contact" className="quote-btn">
            {text.quoteButton}
          </a>
        </div>
      </header>

      <main>
        <section className="hero shell" id="home">
          <div className="hero__copy">
            <h1>{text.heroTitle}</h1>
            <p className="hero__text">{text.heroText}</p>

            <div className="hero__actions">
              <a className="button button--primary" href="#services">
                {text.heroPrimary}
              </a>
              <a className="button button--ghost" href="#contact">
                {text.heroSecondary}
              </a>
            </div>
          </div>

          <aside className="hero__visual" aria-label="Sampaa Logistics vehicle banner">
            <div className="hero__van-scene">
              <div className="hero__sun" />
              <div className="hero__van-card">
                <img src={sampaaLogo} alt="Sampaa Logistics" className="hero__van-logo" />
                <span className="wheel wheel--left" />
                <span className="wheel wheel--right" />
              </div>
            </div>
          </aside>
        </section>
<section className="section shell" id="services">
  <div className="service-grid">
    {text.cards.map((card, index) => (
      <article
        key={card.title}
        className={`service-card service-card--${card.theme}`}
        id={card.id}
      >
        <div className={`service-card__banner service-card__banner--${card.theme}`}>
          {index === 0 && (
            <img src={sampaaLogo} alt="Sampaa Logistics" />
          )}

          {index === 1 && (
            <div className="service-brand service-brand--property">
              <strong>SAMPAA</strong>
              <span>
                {language === 'en'
                  ? 'PROPERTY SERVICES'
                  : 'KIINTEISTOPALVELUT'}
              </span>
            </div>
          )}

          {index === 2 && (
            <div className="service-brand service-brand--eco">
              <strong>GREEN COCO</strong>
              <span>FINLAND</span>
            </div>
          )}
        </div>

        <div className="service-card__body">
          <h2>{card.title}</h2>
          <p>{card.text}</p>

          <ul>
            {card.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <a href="#contact">{text.cardCta}</a>
        </div>
      </article>
    ))}
  </div>
</section>

        <section className="trust shell" id="company">
          {text.trust.map((item) => (
            <article key={item.title} className="trust-item">
              <span className="trust-item__icon" />
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
    </div>
  )
}

export default App
