import { Link } from 'react-router-dom';
import { useState } from 'react';
import './CompanyPage.css';
import sampaaLogo from '../assets/images/slogo.jpg';
import companyVideo from '../assets/videos/company.mp4'; // Your company video
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
          <h1 className="page-title">{text.pageTitle}</h1>
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
        <section className="company-contact-cta shell" id="contact">
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
      <footer className="company-footer">
        <div className="shell company-footer__top">
          <div className="footer-brand">
            <h3>Samppa Logistics Oy</h3>
            <p>{language === 'en' ? 'Fair Service All The Way To Your Destination' : 'Reilua Palvelua Perille Saakka'}</p>
          </div>
          <div className="footer-nav">
            <Link to="/">{text.nav[0]}</Link>
            <Link to="/logistics">{text.nav[1]}</Link>
            <Link to="/property">{text.nav[2]}</Link>
            <Link to="/green-coco">{text.nav[3]}</Link>
            <Link to="/company">{text.nav[4]}</Link>
            <a href="#contact">{text.nav[5]}</a>
          </div>
        </div>
        <div className="shell company-footer__bottom">
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

export default CompanyPage;