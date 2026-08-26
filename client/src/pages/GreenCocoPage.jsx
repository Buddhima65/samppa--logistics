
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './GreenCocoPage.css';
import sampaaLogo from '../assets/images/slogo.jpg';
import greenCocoHero from '../assets/images/coco.jpg';
import cocoPeatImage from '../assets/images/coco-peat.jpg';
//import cocoHuskImage from '../assets/images/coco-husk.jpg';
//import growBagsImage from '../assets/images/grow-bags.jpg';

const content = {
  en: {
    nav: ['Home', 'Sampaa Logistics', 'Property Services', 'Green Coco Finland', 'Company', 'Contact'],
    quoteButton: 'Request a Quote',
    pageTitle: 'GREEN COCO FINLAND',
    heroTitle: 'Natural & Sustainable Products',
    heroSubtitle: '100% natural and renewable growing medium',
    
    intro: {
      title: 'Green Coco Finland',
      text: 'A 100% natural and renewable growing medium. The ideal substitute for peat in greenhouses, farms, horticulture, hydro seed spraying, land scraping, or germination, and as a substitute for potting soil and bark compost. There is also soil conditioner and aid to moisture retention.',
      features: [
        '🌱 100% Natural & Renewable',
        '♻️ Ideal Peat Substitute',
        '💧 Excellent Moisture Retention',
        '🌿 Soil Conditioner'
      ]
    },
    
    products: {
      title: 'Our Products',
      cocoPeat: {
        title: '1. COCO PEAT',
        description: 'Coco peat is a versatile growing medium made from coconut husks.',
        types: [
          {
            name: 'Coco Peat Blocks',
            details: 'Available in individually wrapped or naked 4.5kg or 5kg blocks.'
          },
          {
            name: 'Coco Peat Bale',
            details: 'BIGON Coco peat bale available in naked 20kg or 25kg forms.'
          }
        ],
        specifications: [
          { label: 'Coco peat blocks', value: '21' },
          { label: 'Coco peat bales', value: '-65%' },
          { label: 'Coco peat blocks', value: '33x44x60cm' },
          { label: 'Bulkly 40FOL', value: '640 bale' }
        ]
      },
      coconutHusk: {
        title: '2. COCONUT HUSK CHIPS',
        description: 'Coconut husk chips are ideal for soil aeration and plant growth.',
        types: [
          {
            name: 'Bio Greening Coconut Husk Chips',
            details: 'Ideal substitute for wood bark in flower pots and flower bed decorations and many orchid varieties. Ideal for soil aeration. Helps micro-organism activity, improves water holding capacity, promotes optimum soil temperature.'
          },
          {
            name: 'Bio Greening Coco Consumer Pack',
            details: 'Especially made for home gardens, easy to handle, easy transport, easy caring for plants and many more advantages. Ideal pack for home gardens and orchids.'
          }
        ]
      },
      growBags: {
        title: '5. GROW BAGS (HYDROPONICS)',
        description: 'A unique product which comes as compressed slabs in poly sleeves. Widely used in the horticulture and hydroponic greenhouse industry for plant starters, with the tablet being inserted directly into the pot and water added.'
      }
    },
    
    benefits: {
      title: 'Why Choose Green Coco?',
      items: [
        '🌿 100% Natural and Renewable',
        '💧 Excellent Water Retention',
        '🌱 Promotes Healthy Root Growth',
        '♻️ Eco-Friendly Alternative to Peat',
        '📦 Easy to Handle and Store',
        '🌍 Sustainable and Environmentally Friendly'
      ]
    },
    
    contact: {
      title: 'Ready to grow with Green Coco?',
      subtitle: 'Contact us for more information and pricing',
      button: 'Contact Us',
      phoneLabel: 'Call Us',
      phone: '040 123 4567',
      emailLabel: 'Email',
      email: 'info@samppalogistics.fi',
      locationLabel: 'Location',
      location: 'Finland',
      socialLabel: 'Follow Us'
    },
    
    footer: {
      copyright: 'Copyright 2026 Sampaa Logistics. All rights reserved.',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Settings'
    }
  },
  
  fi: {
    nav: ['Etusivu', 'Sampaa Logistics', 'Kiinteistöpalvelut', 'Green Coco Finland', 'Yritys', 'Yhteystiedot'],
    quoteButton: 'Pyydä Tarjous',
    pageTitle: 'GREEN COCO FINLAND',
    heroTitle: 'Luonnolliset & Kestävät Tuotteet',
    heroSubtitle: '100% luonnollinen ja uusiutuva kasvualusta',
    
    intro: {
      title: 'Green Coco Finland',
      text: '100% luonnollinen ja uusiutuva kasvualusta. Ihanteellinen korvike turpeelle kasvihuoneissa, maatiloilla, puutarhanhoidossa, hydrosiementen levityksessä, maanparannuksessa tai itämisessä, sekä korvike ruukku- ja kuorikompostille. Toimii myös maanparantajana ja kosteudenpidättäjänä.',
      features: [
        '🌱 100% Luonnollinen & Uusiutuva',
        '♻️ Ihanteellinen Turpeen Korvike',
        '💧 Erinomainen Kosteudenpidätys',
        '🌿 Maanparannusaine'
      ]
    },
    
    products: {
      title: 'Tuotteemme',
      cocoPeat: {
        title: '1. COCO PEAT',
        description: 'Coco peat on monipuolinen kasvualusta, joka valmistetaan kookoksen kuorista.',
        types: [
          {
            name: 'Coco Peat -lohkot',
            details: 'Saatavana yksittäin pakattuina tai ilman pakkausta 4,5 kg tai 5 kg lohkoina.'
          },
          {
            name: 'Coco Peat -paalit',
            details: 'BIGON Coco peat -paalit saatavana ilman pakkausta 20 kg tai 25 kg muodoissa.'
          }
        ],
        specifications: [
          { label: 'Coco peat lohkot', value: '21' },
          { label: 'Coco peat paalit', value: '-65%' },
          { label: 'Coco peat lohkot', value: '33x44x60cm' },
          { label: 'Bulkly 40FOL', value: '640 paali' }
        ]
      },
      coconutHusk: {
        title: '2. KOOKOKSEN KUORIHAKE',
        description: 'Kookoksen kuorihake on ihanteellinen maaperän ilmastukseen ja kasvien kasvuun.',
        types: [
          {
            name: 'Bio Greening Kookoksen Kuorihake',
            details: 'Ihanteellinen korvike puunkuorelle kukkaruukuissa ja kukkapenkkien koristeluissa sekä monille orkidealajikkeille. Ihanteellinen maaperän ilmastukseen. Edistää mikro-organismien toimintaa, parantaa vedenpidätyskykyä ja edistää optimaalista maaperän lämpötilaa.'
          },
          {
            name: 'Bio Greening Coco -kuluttajapakkaus',
            details: 'Erityisesti kotipuutarhoihin suunniteltu, helppo käsitellä, helppo kuljettaa, helppo hoitaa kasveja ja monia muita etuja. Ihanteellinen pakkaus kotipuutarhoihin ja orkideoille.'
          }
        ]
      },
      growBags: {
        title: '5. KASVATUSPUSSIT (HYDROPONIIKKA)',
        description: 'Ainutlaatuinen tuote, joka tulee puristettuina levyinä muoviholkeissa. Laajalti käytetty puutarha- ja hydroponiikkakasvihuoneteollisuudessa kasvien aloittamiseen, tabletin ollessa asetettu suoraan ruukkuun ja veden lisäämisen jälkeen.'
      }
    },
    
    benefits: {
      title: 'Miksi Valita Green Coco?',
      items: [
        '🌿 100% Luonnollinen ja Uusiutuva',
        '💧 Erinomainen Vedenpidätys',
        '🌱 Edistää Terveellistä Juurikasvua',
        '♻️ Ympäristöystävällinen Vaihtoehto Turpeelle',
        '📦 Helppo Käsitellä ja Varastoida',
        '🌍 Kestävä ja Ympäristöystävällinen'
      ]
    },
    
    contact: {
      title: 'Valmiina kasvattamaan Green Cocon kanssa?',
      subtitle: 'Ota yhteyttä lisätietoja ja hintoja varten',
      button: 'Ota Yhteyttä',
      phoneLabel: 'Soita Meille',
      phone: '040 123 4567',
      emailLabel: 'Sähköposti',
      email: 'info@samppalogistics.fi',
      locationLabel: 'Sijainti',
      location: 'Suomi',
      socialLabel: 'Seuraa Meitä'
    },
    
    footer: {
      copyright: 'Copyright 2026 Sampaa Logistics. Kaikki oikeudet pidätetään.',
      privacy: 'Tietosuojaseloste',
      cookies: 'Evästeasetukset'
    }
  }
};

function GreenCocoPage({ language, setLanguage }) {
  const text = content[language];
  const navTargets = ['/', '/logistics', '/property', '/green-coco', '/company', '/contact'];

  return (
    <div className="green-coco-page">
      {/* Header */}
      <header className="topbar shell">
        <Link className="brand" to="/" aria-label="Sampaa Logistics home">
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
        <div className="green-coco-page-title shell">
          <div className="title-container">
            <h1 className="page-title">{text.pageTitle}</h1>
          </div>
        </div>

        {/* Hero Section */}
        <section className="green-coco-hero shell">
          <div className="green-coco-hero__content">
            <div className="hero-badge">
              <span className="badge-leaf">🌿</span>
              <span>{language === 'en' ? '100% Natural' : '100% Luonnollinen'}</span>
            </div>
            <h1>{text.heroTitle}</h1>
            <p className="green-coco-hero__subtitle">{text.heroSubtitle}</p>
            <div className="hero-features">
              {text.intro.features.map((feature, index) => (
                <span key={index} className="hero-feature">{feature}</span>
              ))}
            </div>
          </div>
          <div className="green-coco-hero__image">
            <img src={greenCocoHero} alt="Green Coco Finland" />
          </div>
        </section>

        {/* Introduction Section */}
        <section className="green-coco-intro shell">
          <div className="intro-box">
            <h2>{text.intro.title}</h2>
            <p>{text.intro.text}</p>
          </div>
        </section>

        {/* Products Section */}
        <section className="green-coco-products shell">
          <h2 className="section-title">{text.products.title}</h2>

          {/* Coco Peat */}
          <div className="product-category">
            <h3 className="product-title">{text.products.cocoPeat.title}</h3>
            <p className="product-description">{text.products.cocoPeat.description}</p>
            
            <div className="product-types">
              {text.products.cocoPeat.types.map((type, index) => (
                <div key={index} className="product-type">
                  <h4>{type.name}</h4>
                  <p>{type.details}</p>
                </div>
              ))}
            </div>

            <div className="product-specs">
              <table className="specs-table">
                <thead>
                  <tr>
                    <th>{language === 'en' ? 'Description' : 'Kuvaus'}</th>
                    <th>{language === 'en' ? 'Value' : 'Arvo'}</th>
                  </tr>
                </thead>
                <tbody>
                  {text.products.cocoPeat.specifications.map((spec, index) => (
                    <tr key={index}>
                      <td>{spec.label}</td>
                      <td>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Coconut Husk Chips */}
          <div className="product-category">
            <h3 className="product-title">{text.products.coconutHusk.title}</h3>
            <p className="product-description">{text.products.coconutHusk.description}</p>
            
            <div className="product-types">
              {text.products.coconutHusk.types.map((type, index) => (
                <div key={index} className="product-type">
                  <h4>{type.name}</h4>
                  <p>{type.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Grow Bags */}
          <div className="product-category">
            <h3 className="product-title">{text.products.growBags.title}</h3>
            <p className="product-description">{text.products.growBags.description}</p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="green-coco-benefits shell">
          <div className="benefits-box">
            <h2 className="section-title">{text.benefits.title}</h2>
            <div className="benefits-grid">
              {text.benefits.items.map((item, index) => (
                <div key={index} className="benefit-item">
                  <span className="benefit-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="green-coco-cta shell">
          <div className="cta-box">
            <h2>{text.contact.title}</h2>
            <p>{text.contact.subtitle}</p>
            <Link to="/contact" className="button button--primary button--large">
              {text.contact.button}
            </Link>
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
            <p>Helsinki</p>
          </div>

          <div className="home-contact-block home-contact-social">
            <h4>{text.contact.socialLabel}</h4>
            <div className="home-social-row">
              <a href="//www.facebook.com/profile.php?id=61569304281836" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="home-social-icon-footer" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="//www.instagram.com/samppa_logisticks_oy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg className="home-social-icon-footer" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584.012-4.849.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
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

export default GreenCocoPage;