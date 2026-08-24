import { Link } from 'react-router-dom';
import { useState } from 'react';
import './ContactPage.css';
import sampaaLogo from '../assets/images/slogo.jpg';
import ownerImage from '../assets/images/owner.jpg';

const content = {
  en: {
    nav: ['Home', 'Sampaa Logistics', 'Property Services', 'Green Coco Finland', 'Company', 'Contact'],
    quoteButton: 'Request a Quote',
    pageTitle: 'Contact Us',
    heroTitle: 'Get In Touch',
    heroSubtitle: "We're here to help with all your logistics needs",
    
    contactInfo: {
      title: 'Contact Information',
      phone: '+358 44 3438 613',
      email: 'samppa@samppalogistics.fi',
      address: 'Tullivuorentie 4, 00700 Helsinki',
      openingHours: 'Mon-Fri 8:00 - 17:00'
    },
    
    form: {
      title: 'REQUEST A QUOTE',
      name: 'Name *',
      company: 'Company',
      phone: 'Telephone number',
      email: 'E-mail address *',
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
      title: 'PYYDÄ TARJOUS',
      name: 'Nimi *',
      company: 'Yritys',
      phone: 'Puhelinnumero',
      email: 'Sähköpostiosoite *',
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
            return <Link key={item} to={target}>{item}</Link>;
          })}
        </nav>
        <div className="header-actions">
          <div className="language-switch" role="group">
            <button type="button" className={language === 'en' ? 'is-active' : ''} onClick={() => setLanguage('en')}>EN</button>
            <button type="button" className={language === 'fi' ? 'is-active' : ''} onClick={() => setLanguage('fi')}>FI</button>
          </div>
          <Link to="/contact" className="quote-btn">{text.quoteButton}</Link>
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

        {/* Main Contact Section - Owner on Left, Form on Right */}
        <section className="contact-main shell">
          <div className="contact-two-column">
            {/* LEFT COLUMN - Owner Image & Contact Info */}
            <div className="contact-left-column">
              {/* Owner Card with Large Image */}
              <div className="owner-card-left">
                <div className="owner-image-left-container">
                  <img src={ownerImage} alt={text.owner.name} className="owner-image-left" />
                  <div className="owner-image-glow-left"></div>
                </div>
                <div className="owner-info-left">
                  <div className="owner-badge-left">✦ {language === 'en' ? 'Leadership' : 'Johto'}</div>
                  <h2 className="owner-name-left">{text.owner.name}</h2>
                  <h3 className="owner-title-left">{text.owner.title}</h3>
                  <p className="owner-description-left">{text.owner.description}</p>
                  <div className="owner-contact-left">
                    <a href={`mailto:${text.contactInfo.email}`} className="owner-email-left">
                      <span>✉</span>
                      {text.contactInfo.email}
                    </a>
                    <a href={`tel:${text.contactInfo.phone}`} className="owner-phone-left">
                      <span>📞</span>
                      {text.contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Info - Horizontal Below Owner */}
              <div className="contact-info-left">
                <div className="contact-info-grid-left">
                  <div className="contact-info-item-left">
                    <div className="contact-info-icon-left">📞</div>
                    <div className="contact-info-content-left">
                      <span className="contact-info-label-left">{language === 'en' ? 'Phone' : 'Puhelin'}</span>
                      <a href={`tel:${text.contactInfo.phone}`} className="contact-info-value-left">{text.contactInfo.phone}</a>
                    </div>
                  </div>
                  
                  <div className="contact-info-item-left">
                    <div className="contact-info-icon-left">✉</div>
                    <div className="contact-info-content-left">
                      <span className="contact-info-label-left">{language === 'en' ? 'Email' : 'Sähköposti'}</span>
                      <a href={`mailto:${text.contactInfo.email}`} className="contact-info-value-left">{text.contactInfo.email}</a>
                    </div>
                  </div>
                  
                  <div className="contact-info-item-left">
                    <div className="contact-info-icon-left">🏢</div>
                    <div className="contact-info-content-left">
                      <span className="contact-info-label-left">{language === 'en' ? 'Address' : 'Osoite'}</span>
                      <span className="contact-info-value-left">{text.contactInfo.address}</span>
                    </div>
                  </div>
                  
                  <div className="contact-info-item-left">
                    <div className="contact-info-icon-left">🕐</div>
                    <div className="contact-info-content-left">
                      <span className="contact-info-label-left">{language === 'en' ? 'Opening Hours' : 'Aukioloajat'}</span>
                      <span className="contact-info-value-left">{text.contactInfo.openingHours}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Contact Form */}
            <div className="contact-right-column">
              <div className="contact-form-card">
                <div className="form-header">
                  <h2>{text.form.title}</h2>
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
                      <input type="text" id="name" required />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="company">{text.form.company}</label>
                      <input type="text" id="company" />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">{text.form.phone}</label>
                      <input type="tel" id="phone" />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">{text.form.email}</label>
                      <input type="email" id="email" required />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">{text.form.message}</label>
                      <textarea id="message" rows="5"></textarea>
                    </div>
                    
                    <button type="submit" className="submit-btn">
                      {text.form.submit}
                    </button>
                  </form>
                )}
              </div>

              {/* Close In Badge & Menu Links - Below Form */}
              <div className="contact-sidebar-right">
                <div className="close-in-badge-right">
                  <span className="close-in-icon-right">📍</span>
                  <span className="close-in-text-right">{text.closeIn}</span>
                </div>

                <div className="contact-menu-links-right">
                  <div className="menu-section-right">
                    <span className="menu-label-right">{text.menu}</span>
                    <div className="menu-items-right">
                      <Link to="/company">Company</Link>
                      <Link to="/logistics">Services</Link>
                      <Link to="/contact">Contact us</Link>
                    </div>
                  </div>
                  <div className="menu-section-right">
                    <span className="menu-label-right">{text.social.title}</span>
                    <div className="menu-items-right">
                      <a href="#" target="_blank" rel="noopener noreferrer">{text.social.facebook}</a>
                      <a href="#" target="_blank" rel="noopener noreferrer">{text.social.instagram}</a>
                      <a href="#" target="_blank" rel="noopener noreferrer">{text.social.linkedin}</a>
                    </div>
                  </div>
                </div>
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
            <Link to="/contact">{text.nav[5]}</Link>
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