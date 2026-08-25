import { Link } from 'react-router-dom';
import { useState } from 'react';
import './CompanyPage.css';
import sampaaLogo from '../assets/images/slogo.jpg';
import companyVideo from '../assets/videos/company2.mp4'; // Your company video
import companyPoster from '../assets/images/companyposter.jpg'; // Fallback poster image

const content = {
  en: {
    // Navigation
    nav: ['Home', 'Sampaa Logistics', 'Property Services', 'Green Coco Finland', 'Company', 'Contact'],
    quoteButton: 'Request a Quote',
    
    // Page content
    pageTitle: 'SAMPPA LOGISTICS OY',
    heroTitle: 'Fair Service All The Way To Your Destination',
    heroSubtitle: 'Reliable Transport Solutions Across Finland',
    
    // About content
    about: {
      title: 'About Us',
      text: 'Samppa Logistics Oy is a transport company that offers a wide range of van services. We handle everything from small package deliveries to company removals all over Finland. We offer a flexible and reliable service that meets our customers\' needs. We deliver quickly and safely, always keeping customer satisfaction as a priority. Samppa Logistics Oy – when you want your transport to arrive on time.'
    },
    
    // Mission & Values
    mission: {
      title: 'Our Mission & Values',
      items: [
        {
          icon: '🎯',
          title: 'Reliability',
          text: 'We keep our promises and deliver on time, every time.'
        },
        {
          icon: '🤝',
          title: 'Customer First',
          text: 'Your satisfaction is our top priority in everything we do.'
        },
        {
          icon: '🚚',
          title: 'Quality Service',
          text: 'Professional and careful handling of all deliveries.'
        },
        {
          icon: '💚',
          title: 'Sustainability',
          text: 'We operate with respect for the environment and future generations.'
        }
      ]
    },
    
    // Services we offer
    services: {
      title: 'What We Offer',
      items: [
        {
          title: 'Package Deliveries',
          text: 'Fast and reliable parcel delivery across Finland.'
        },
        {
          title: 'Company Removals',
          text: 'Efficient and careful business relocation services.'
        },
        {
          title: 'Van Services',
          text: 'Flexible van transport for all your needs.'
        },
        {
          title: 'Logistics Solutions',
          text: 'Comprehensive logistics services for businesses.'
        }
      ]
    },
    
    // Why choose us
    whyChoose: {
      title: 'Why Choose Samppa Logistics?',
      items: [
        '✅ Reliable and punctual deliveries',
        '✅ Professional and friendly service',
        '✅ Flexible scheduling',
        '✅ Competitive pricing',
        '✅ Nationwide coverage',
        '✅ Customer satisfaction guaranteed'
      ]
    },
    
    // Stats
    stats: {
      title: 'Our Impact',
      items: [
        { number: '500+', label: 'Happy Customers' },
        { number: '1000+', label: 'Deliveries Completed' },
        { number: '50+', label: 'Cities Served' },
        { number: '98%', label: 'On-Time Delivery Rate' }
      ]
    },
    
    // Contact CTA
    contact: {
      title: 'Ready to transport with us?',
      subtitle: 'Contact us for a free quote',
      button: 'Get a Quote'
    },
    
    // Footer
    footer: {
      copyright: 'Copyright 2026 Sampaa Logistics. All rights reserved.',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Settings'
    }
  },
  
  fi: {
    // Navigation
    nav: ['Etusivu', 'Sampaa Logistics', 'Kiinteistöpalvelut', 'Green Coco Finland', 'Yritys', 'Yhteystiedot'],
    quoteButton: 'Pyydä Tarjous',
    
    // Page content
    pageTitle: 'SAMPPA LOGISTICS OY',
    heroTitle: 'Reilua Palvelua Perille Saakka',
    heroSubtitle: 'Luotettavat Kuljetusratkaisut Ympäri Suomen',
    
    // About content
    about: {
      title: 'Meistä',
      text: 'Samppa Logistics Oy on kuljetusyritys, joka tarjoaa laajan valikoiman pakettiautopalveluita. Hoidamme kaiken pienistä pakettitoimituksista yritysmuuttoihin ympäri Suomen. Tarjoamme joustavaa ja luotettavaa palvelua, joka vastaa asiakkaidemme tarpeisiin. Toimitamme nopeasti ja turvallisesti pitäen aina asiakastyytyväisyyden etusijalla. Samppa Logistics Oy – kun haluat kuljetuksesi saapuvan perille ajallaan.'
    },
    
    // Mission & Values
    mission: {
      title: 'Tehtävämme ja Arvomme',
      items: [
        {
          icon: '🎯',
          title: 'Luotettavuus',
          text: 'Pidämme lupauksemme ja toimitamme ajallaan, aina.'
        },
        {
          icon: '🤝',
          title: 'Asiakas Ensimmäisenä',
          text: 'Tytyväisyytesi on tärkein prioriteettimme kaikessa tekemisessä.'
        },
        {
          icon: '🚚',
          title: 'Laadukas Palvelu',
          text: 'Ammattimaista ja huolellista käsittelyä kaikissa toimituksissa.'
        },
        {
          icon: '💚',
          title: 'Kestävyys',
          text: 'Toimimme ympäristöä ja tulevia sukupolvia kunnioittaen.'
        }
      ]
    },
    
    // Services we offer
    services: {
      title: 'Mitä Tarjoamme',
      items: [
        {
          title: 'Pakettitoimitukset',
          text: 'Nopeat ja luotettavat pakettitoimitukset ympäri Suomea.'
        },
        {
          title: 'Yritysmuutot',
          text: 'Tehokkaat ja huolelliset yrityssiirrot.'
        },
        {
          title: 'Pakettiautopalvelut',
          text: 'Joustavat pakettiautokuljetukset kaikkiin tarpeisiin.'
        },
        {
          title: 'Logistiikkaratkaisut',
          text: 'Kattavat logistiikkapalvelut yrityksille.'
        }
      ]
    },
    
    // Why choose us
    whyChoose: {
      title: 'Miksi Valita Samppa Logistics?',
      items: [
        '✅ Luotettavat ja täsmälliset toimitukset',
        '✅ Ammattimainen ja ystävällinen palvelu',
        '✅ Joustavat aikataulut',
        '✅ Kilpailukykyinen hinnoittelu',
        '✅ Valtakunnallinen kattavuus',
        '✅ Asiakastyytyväisyys taattu'
      ]
    },
    
    // Stats
    stats: {
      title: 'Meidän Vaikutus',
      items: [
        { number: '500+', label: 'Tyytyväistä Asiakasta' },
        { number: '1000+', label: 'Toimitusta Suoritettu' },
        { number: '50+', label: 'Kaupunkia Palveltu' },
        { number: '98%', label: 'Ajallaan Toimitusprosentti' }
      ]
    },
    
    // Contact CTA
    contact: {
      title: 'Valmiina kuljettamaan kanssamme?',
      subtitle: 'Ota yhteyttä ilmaista tarjousta varten',
      button: 'Pyydä Tarjous'
    },
    
    // Footer
    footer: {
      copyright: 'Copyright 2026 Sampaa Logistics. Kaikki oikeudet pidätetään.',
      privacy: 'Tietosuojaseloste',
      cookies: 'Evästeasetukset'
    }
  }
};

function CompanyPage({ language, setLanguage }) {
  const text = content[language];
  const navTargets = ['/', '/logistics', '/property', '/green-coco', '/company', '/contact'];

  return (
    <div className="company-page">
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
            return target.startsWith('#') ? (
              <a key={item} href={target}>{item}</a>
            ) : (
              <Link key={item} to={target}>{item}</Link>
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
          <a href="#contact" className="quote-btn">
            {text.quoteButton}
          </a>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="company-main">
        {/* Page Title */}
        <div className="company-page-title shell">
          <h1 className="page-title" style={{ color: '#000000' }}>{text.pageTitle}</h1>
        </div>

        {/* Hero Section with Video */}
        <section className="company-hero shell">
          {/* Video Background */}
          <div className="company-hero__video-wrapper">
            <video 
              className="company-hero__video" 
              autoPlay 
              muted 
              loop 
              playsInline
              poster={companyPoster}
            >
              <source src={companyVideo} type="video/mp4" />
              {/* Fallback image if video doesn't load */}
            </video>
            <div className="company-hero__overlay"></div>
          </div>

          {/* Content overlay on top of video */}
          <div className="company-hero__content">
            <div className="company-hero__text-wrapper">
              <div className="company-hero__badge">
                <span className="badge-icon">🚚</span>
                <span>{language === 'en' ? 'Since 2026' : 'Perustettu 2026'}</span>
              </div>
              <h1>{text.heroTitle}</h1>
              <p className="company-hero__subtitle">{text.heroSubtitle}</p>
              <p className="company-hero__text">{text.about.text}</p>
              <div className="company-hero__actions">
                <a href="#services" className="button button--primary">
                  {language === 'en' ? 'Our Services' : 'Palvelumme'}
                </a>
                <a href="#contact" className="button button--ghost">
                  {text.quoteButton}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="company-stats shell">
          <div className="stats-grid">
            {text.stats.items.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Values */}
        <section className="company-mission shell" id="services">
          <h2 className="section-title">{text.mission.title}</h2>
          <div className="mission-grid">
            {text.mission.items.map((item, index) => (
              <div key={index} className="mission-item">
                <div className="mission-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="company-services-section shell">
          <h2 className="section-title">{text.services.title}</h2>
          <div className="company-services-grid">
            {text.services.items.map((item, index) => (
              <div key={index} className="company-service-item">
                <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="service-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="company-why-choose shell">
          <div className="company-why-box">
            <h2 className="section-title">{text.whyChoose.title}</h2>
            <ul className="company-why-list">
              {text.whyChoose.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="company-contact-cta shell">
          <div className="company-cta-box">
            <h2>{text.contact.title}</h2>
            <p>{text.contact.subtitle}</p>
            <a href="#contact" className="button button--primary button--large">
              {text.contact.button}
            </a>
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
                <span className="home-brand__name">Sampaa</span>
                <span className="home-brand__sub">Logistics</span>
              </div>
            </div>
          </div>

          <div className="home-contact-block">
            <h4>{text.contact.phoneLabel}</h4>
            <strong>{text.contact.phone}</strong>
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
             <p>Finland</p>
            <p>Helsinki</p>
          </div>

          <div className="home-contact-block home-contact-social">
            <h4>{text.contact.socialLabel}</h4>
            <div className="home-social-row">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="home-social-icon-footer" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="home-social-icon-footer" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="home-social-icon-footer" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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

export default CompanyPage;