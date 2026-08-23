import { Link } from 'react-router-dom';
import { useState } from 'react';
import './ContactPage.css';
import sampaaLogo from '../assets/images/slogo.jpg';
import ownerImage from '../assets/images/owner.jpg'; // Add owner image

const content = {
  en: {
    nav: ['Home', 'Sampaa Logistics', 'Property Services', 'Green Coco Finland', 'Company', 'Contact'],
    quoteButton: 'Request a Quote',
    pageTitle: 'Contact Us',
    heroTitle: 'Get In Touch',
    heroSubtitle: 'We\'re here to help with all your logistics needs',
    
    contactInfo: {
      title: 'Contact Information',
      phone: '+358 44 3438 613',
      email: 'samppa@samppalogistics.fi',
      address: 'Tullivuorentie 4, 00700 Helsinki',
      openingHours: 'Mon-Fri 8:00 - 17:00'
    },
    
    form: {
      title: 'Send Us a Message',
      name: 'Name *',
      email: 'E-mail address *',
      phone: 'Telephone number',
      message: 'Message',
      submit: 'Send Message',
      success: 'Thank you! We\'ll get back to you soon.'
    },
    
    owner: {
      name: 'Janaka Abewickrama',
      title: 'Managing Director',
      description: 'With over 15 years of experience in the logistics industry, Janaka leads our team with a commitment to excellence and customer satisfaction.'
    },
    
    social: {
      title: 'Follow Us',
      facebook: 'Facebook',
      instagram: 'Instagram',
      linkedin: 'LinkedIn'
    },
    
    tagline: 'luotettava kumppani',
    taglineEnglish: 'Trusted Partner',
    
    footer: {
      copyright: 'Copyright 2026 Samppa Logistics. All rights reserved.',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Settings'
    },
    
    closeIn: 'CLOSE IN',
    menu: 'MENU'
  },
  
  fi: {
    nav: ['Etusivu', 'Sampaa Logistics', 'Kiinteistöpalvelut', 'Green Coco Finland', 'Yritys', 'Yhteystiedot'],
    quoteButton: 'Pyydä Tarjous',
    pageTitle: 'Ota Yhteyttä',
    heroTitle: 'Ota Yhteyttä',
    heroSubtitle: 'Autamme mielellämme kaikissa logistiikkatarpeissasi',
    
    contactInfo: {
      title: 'Yhteystiedot',
      phone: '+358 44 3438 613',
      email: 'samppa@samppalogistics.fi',
      address: 'Tullivuorentie 4, 00700 Helsinki',
      openingHours: 'Ma-Pe 8:00 - 17:00'
    },
    
    form: {
      title: 'Lähetä Viesti',
      name: 'Nimi *',
      email: 'Sähköpostiosoite *',
      phone: 'Puhelinnumero',
      message: 'Viesti',
      submit: 'Lähetä Viesti',
      success: 'Kiitos! Otamme sinuun pian yhteyttä.'
    },
    
    owner: {
      name: 'Janaka Abewickrama',
      title: 'Toimitusjohtaja',
      description: 'Yli 15 vuoden kokemuksella logistiikka-alalla Janaka johtaa tiimiämme sitoutuneesti ja asiakastyytyväisyyteen panostaen.'
    },
    
    social: {
      title: 'Seuraa Meitä',
      facebook: 'Facebook',
      instagram: 'Instagram',
      linkedin: 'LinkedIn'
    },
    
    tagline: 'luotettava kumppani',
    taglineEnglish: 'Trusted Partner',
    
    footer: {
      copyright: 'Copyright 2026 Samppa Logistics. Kaikki oikeudet pidätetään.',
      privacy: 'Tietosuojaseloste',
      cookies: 'Evästeasetukset'
    },
    
    closeIn: 'LÄHELLÄ',
    menu: 'VALIKKO'
  }
};

function ContactPage({ language, setLanguage }) {
  const text = content[language];
  const navTargets = ['/', '/logistics', '/property', '/green-coco', '/company', '/contact'];
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <header className="topbar shell">
        <Link className="brand" to="/" aria-label="Samppa Logistics home">
          <span className="brand__mark">
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
          <div className="language-switch" role="group">
            <button type="button" className={language === 'en' ? 'is-active' : ''} onClick={() => setLanguage('en')}>EN</button>
            <button type="button" className={language === 'fi' ? 'is-active' : ''} onClick={() => setLanguage('fi')}>FI</button>
          </div>
          <a href="#contact" className="quote-btn">{text.quoteButton}</a>
        </div>
      </header>

      <main>
        {/* Page Title */}
        <div className="contact-page-title shell">
          <div className="title-container">
            <h1 className="page-title">{text.pageTitle}</h1>
            <div className="title-line"></div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="contact-hero shell">
          <div className="contact-hero__content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>{language === 'en' ? 'Contact Us' : 'Ota Yhteyttä'}</span>
            </div>
            <h1>{text.heroTitle}</h1>
            <p className="contact-hero__subtitle">{text.heroSubtitle}</p>
            <div className="hero-tagline">
              <span className="tagline-text">{text.tagline}</span>
              <span className="tagline-icon">✦</span>
              <span className="tagline-text-en">{text.taglineEnglish}</span>
            </div>
          </div>
          <div className="contact-hero__image">
            <div className="hero-image-placeholder">
              <span className="placeholder-icon">✉</span>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="contact-main shell">
          <div className="contact-grid">
            {/* Contact Info Card */}
            <div className="contact-info-card">
              <div className="card-header">
                <span className="card-icon">📍</span>
                <h2>{text.contactInfo.title}</h2>
              </div>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <span className="info-label">{language === 'en' ? 'Phone' : 'Puhelin'}</span>
                    <a href={`tel:${text.contactInfo.phone}`} className="info-value">{text.contactInfo.phone}</a>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">✉</div>
                  <div className="info-content">
                    <span className="info-label">{language === 'en' ? 'Email' : 'Sähköposti'}</span>
                    <a href={`mailto:${text.contactInfo.email}`} className="info-value">{text.contactInfo.email}</a>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">🏢</div>
                  <div className="info-content">
                    <span className="info-label">{language === 'en' ? 'Address' : 'Osoite'}</span>
                    <span className="info-value">{text.contactInfo.address}</span>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">🕐</div>
                  <div className="info-content">
                    <span className="info-label">{language === 'en' ? 'Opening Hours' : 'Aukioloajat'}</span>
                    <span className="info-value">{text.contactInfo.openingHours}</span>
                  </div>
                </div>
              </div>

              {/* Close In Badge */}
              <div className="close-in-badge">
                <span className="close-in-icon">📍</span>
                <span className="close-in-text">{text.closeIn}</span>
              </div>

              {/* Menu Links */}
              <div className="contact-menu-links">
                <div className="menu-section">
                  <span className="menu-label">{text.menu}</span>
                  <div className="menu-items">
                    <Link to="/company">Company</Link>
                    <Link to="/logistics">Services</Link>
                    <a href="#contact">Contact us</a>
                  </div>
                </div>
                <div className="menu-section">
                  <span className="menu-label">{text.social.title}</span>
                  <div className="menu-items">
                    <a href="#" target="_blank" rel="noopener noreferrer">{text.social.facebook}</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">{text.social.instagram}</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">{text.social.linkedin}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <div className="form-header">
                <span className="form-icon">✉</span>
                <h2>{text.form.title}</h2>
                <div className="form-divider"></div>
              </div>
              
              {formSubmitted ? (
                <div className="success-message">
                  <span className="success-icon">✓</span>
                  <p>{text.form.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">{text.form.name}</label>
                    <input type="text" id="name" required placeholder={language === 'en' ? 'Your full name' : 'Koko nimesi'} />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">{text.form.email}</label>
                    <input type="email" id="email" required placeholder="your@email.com" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">{text.form.phone}</label>
                    <input type="tel" id="phone" placeholder={language === 'en' ? '+358 40 123 4567' : '+358 40 123 4567'} />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">{text.form.message}</label>
                    <textarea id="message" rows="5" placeholder={language === 'en' ? 'How can we help you?' : 'Miten voimme auttaa sinua?'}></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn">
                    <span className="btn-icon">✉</span>
                    {text.form.submit}
                    <span className="btn-arrow">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Owner Section */}
        <section className="contact-owner shell">
          <div className="owner-card">
            <div className="owner-image-container">
              <div className="owner-image-wrapper">
                <img src={ownerImage} alt={text.owner.name} className="owner-image" />
                <div className="owner-image-glow"></div>
              </div>
            </div>
            <div className="owner-info">
              <div className="owner-badge">✦ {language === 'en' ? 'Leadership' : 'Johto'}</div>
              <h2>{text.owner.name}</h2>
              <h3>{text.owner.title}</h3>
              <p>{text.owner.description}</p>
              <div className="owner-contact">
                <a href={`mailto:${text.contactInfo.email}`} className="owner-email">
                  <span className="owner-email-icon">✉</span>
                  {text.contactInfo.email}
                </a>
                <a href={`tel:${text.contactInfo.phone}`} className="owner-phone">
                  <span className="owner-phone-icon">📞</span>
                  {text.contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="contact-footer">
        <div className="shell contact-footer__top">
          <div className="footer-brand">
            <h3>Samppa Logistics Ltd</h3>
            <p>{text.tagline} ®</p>
          </div>
          <div className="footer-nav">
            <Link to="/">{text.nav[0]}</Link>
            <Link to="/logistics">{text.nav[1]}</Link>
            <Link to="/property">{text.nav[2]}</Link>
            <Link to="/company">{text.nav[4]}</Link>
            <a href="#contact">{text.nav[5]}</a>
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

export default ContactPage;