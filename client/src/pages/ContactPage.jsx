import { Link } from 'react-router-dom';
import { useState } from 'react';
import './ContactPage.css';
import sampaaLogo from '../assets/images/slogo.jpg';
import vastuLogo from '../assets/images/vastu.png';
import ownerImage from '../assets/images/owner.jpg';

const content = {
  en: {
    nav: ['Home', 'Transport Service', 'Property Services', 'Company', 'Contact'],
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
      sending: 'Sending...',
      success: 'Thank you! We\'ll get back to you soon.',
      error: 'Something went wrong. Please try again.'
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

    contact: {
      phoneLabel: 'Call Us',
      phone: '+358 44 3438 613',
      emailLabel: 'Email',
      email: 'samppa@samppalogistics.fi',
      locationLabel: 'Location',
      location: 'Finland',
      socialLabel: 'Follow Us'
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
    nav: ['Etusivu', 'Kuljetuspalvelut', 'Kiinteistöpalvelut', 'Yritys', 'Yhteystiedot'],
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
      sending: 'Lähetetään...',
      success: 'Kiitos! Otamme sinuun pian yhteyttä.',
      error: 'Jotain meni pieleen. Yritä uudelleen.'
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

    contact: {
      phoneLabel: 'Soita Meille',
      phone: '+358 44 3438 613',
      emailLabel: 'Sähköposti',
      email: 'samppa@samppalogistics.fi',
      locationLabel: 'Sijainti',
      location: 'Suomi',
      socialLabel: 'Seuraa Meitä'
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
  const navTargets = ['/', '/logistics', '/property', '/company', '/contact'];

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus({
      submitting: true,
      submitted: false,
      success: false,
      message: ''
    });

    try {
      // REPLACE THIS URL WITH YOUR FORMSPREE FORM ENDPOINT
      const response = await fetch('https://formspree.io/f/xwlkrpbb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          phone: formData.phone || 'Not provided',
          message: formData.message || 'No message provided',
          _subject: 'New Quote Request from Website',
          page: 'Contact Page',
          language: language
        })
      });

      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          success: true,
          message: text.form.success
        });
        // Reset form
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: text.form.error
      });
    }
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
                
                {/* Show success or error message */}
                {status.submitted && (
                  <div className={`form-message ${status.success ? 'form-message--success' : 'form-message--error'}`}>
                    {status.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">{text.form.name}</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company">{text.form.company}</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">{text.form.phone}</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">{text.form.email}</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">{text.form.message}</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={status.submitting}
                  >
                    {status.submitting ? text.form.sending : text.form.submit}
                  </button>
                </form>
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

export default ContactPage;