import { Link } from 'react-router-dom';
import { useState } from 'react';
import './PropertyPage.css';
import sampaaLogo from '../assets/images/slogo.jpg';
import vastuLogo from '../assets/images/vastu.png';
import propertyHero from '../assets/images/snow.jpg';

const content = {
  en: {
    // Navigation
    nav: ['Home', 'Transport Service', 'Property Services', 'Company', 'Contact'],
    quoteButton: 'Request a Quote',
    
    // Brand
    brandName: 'Samppa Property & Cleaning Services',
    
    // Page content
    pageTitle: 'SAMPPA PROPERTY & CLEANING SERVICES',
    
    // Hero
    heroTitle: 'All property services from one place',
    heroSubtitle: 'Cleaning • Window Washing • Property Maintenance • Outdoor Areas • Snow Removal',
    heroText: 'Reliable and flexible service for businesses, housing companies, and properties.',
    heroPrimary: 'Request a Quote',
    heroSecondary: 'Explore Services',
    
    // Services Section
    servicesTitle: 'Our Services',
    
    cleaning: {
      title: 'Cleaning Services',
      text: 'We keep business premises, facilities, and properties clean and pleasant.',
      items: ['Corporate Cleaning','Hotel Cleaning','House Cleaning','Facility Cleaning', 'Stairwell Cleaning', 'One-time Cleaning', 'Maintenance Cleaning', 'Basic Cleaning'],
      cta: 'Explore Cleaning Services →'
    },
    
    windowWashing: {
      title: 'Window Washing',
      text: 'Clean windows complete the appearance of your property.',
      items: ['Corporate Window Washing', 'Retail Window Washing', 'Housing Company Window Washing', 'One-time Window Washing'],
      cta: 'Explore Window Washing Services →'
    },
    
    propertyMaintenance: {
      title: 'Property Maintenance',
      text: 'We take care of daily property upkeep and agreed maintenance work.',
      items: ['General Property Maintenance', 'Small Repair Work', 'Waste Area Management', 'Inspections and Minor Repairs', 'Other Agreed Maintenance'],
      cta: 'Explore Maintenance →'
    },
    
    outdoorAreas: {
      title: 'Outdoor & Yard Area Maintenance [Summer]',
      text: 'We keep yard areas clean and in good condition year-round.',
      items: ['Lawn Mowing', 'Yard Area Tidy-up', 'Leaf Removal', 'Waste Removal', 'Shrub and Planting Area Care', 'Outdoor Area Maintenance'],
      cta: 'Explore Outdoor Services →'
    },
    
    winterServices: {
      title: 'Winter Services',
      text: 'We ensure safe walkways even in winter.',
      items: ['Snow Removal', 'Snow Clearing', 'Sanding', 'Ice Prevention'],
      cta: 'Explore Winter Services →'
    },
    
    // Why Choose Us
    whyChoose: {
      title: 'Why Samppa?',
      items: [
        {
          icon: '🤝',
          title: 'One Partner – Multiple Services',
          text: 'Cleaning, window washing, property maintenance, and yard care can all be ordered from the same service provider.'
        },
        {
          icon: '🔄',
          title: 'Flexible Service',
          text: 'We tailor services according to customer needs – one-time or regularly.'
        },
        {
          icon: '✅',
          title: 'Reliable Execution',
          text: 'We keep our promises and do the work carefully.'
        },
        {
          icon: '🏢',
          title: 'Service for Businesses and Properties',
          text: 'We serve businesses, retail spaces, housing companies, and other property owners.'
        }
      ]
    },
    
    // For Businesses
    business: {
      title: 'For Businesses',
      subtitle: 'Get your business premises in order without extra hassle',
      text: 'We offer comprehensive services for business premises cleaning, window washing, property maintenance, and outdoor area care. You can order a single service or build an ongoing service package.',
      examples: [
        'Monthly window washing?',
        'Regular facility cleaning?',
        'Lawn mowing?',
        'Winter snow removal?',
        'Small property maintenance jobs?'
      ],
      cta: 'Request a Business Quote'
    },
    
    // For Properties
    property: {
      title: 'For Properties',
      subtitle: 'Property maintenance from one partner',
      text: 'We take care of property cleanliness, outdoor areas, and agreed maintenance work year-round. The service package can be designed for housing companies, commercial properties, or other properties.',
      services: ['Cleaning','Window Washing', 'Property Maintenance', 'Yard Work', 'Snow Removal'],
      cta: 'Request a Quote'
    },
    
    // How It Works
    howItWorks: {
      title: 'How Our Service Works',
      steps: [
        {
          number: '1',
          title: 'Contact Us',
          text: 'Tell us about your property and the services you need.'
        },
        {
          number: '2',
          title: 'Agree on Needs',
          text: 'We\'ll go through what needs to be done and how often.'
        },
        {
          number: '3',
          title: 'Get a Quote',
          text: 'You\'ll receive a clear quote for the agreed services.'
        },
        {
          number: '4',
          title: 'We Start Working',
          text: 'We agree on a start date and take care of your property.'
        }
      ]
    },
    
    // Contact Form
    contact: {
      title: 'Request a Quote',
      subtitle: 'Tell us what you need.',
      name: 'Name *',
      company: 'Company',
      phone: 'Phone Number *',
      email: 'Email *',
      address: 'Property Address',
      services: 'What services do you need?',
      servicesList: ['Cleaning', 'Window Washing', 'Property Maintenance', 'Lawn & Yard Care', 'Snow Removal & Sanding', 'Other Service'],
      additionalInfo: 'Additional Information:',
      submit: 'Send Quote Request',
      sending: 'Sending...',
      success: 'Thank you! We will contact you shortly.',
      error: 'Something went wrong. Please try again.',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      locationLabel: 'Location'
    },
    
    // About Us
    about: {
      title: 'About Us',
      subtitle: 'Samppa Property & Cleaning Services',
      text1: 'We are a company focused on property, business, and outdoor area services.',
      text2: 'Our goal is to provide our customers with reliable, flexible, and high-quality service from one place.',
      text3: 'Our services can be implemented one-time or regularly according to customer needs.',
      tagline: 'Clean results. Careful service.'
    },
    
    // Footer
    footer: {
      copyright: '© 2026 Samppa Property & Cleaning Services',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Settings'
    },
    footerContact: {
      phoneLabel: 'Call Us',
      phone: '+358 44 3438 613',
      emailLabel: 'Email',
      email: 'samppa@samppalogistics.fi',
      locationLabel: 'Location',
      location: 'Finland',
      socialLabel: 'Follow Us'
    }
  },
  
  fi: {
    // Navigation
    nav: ['Etusivu', 'Kuljetuspalvelut', 'Kiinteistöpalvelut', 'Yritys', 'Yhteystiedot'],
    quoteButton: 'Pyydä Tarjous',
    
    // Brand
    brandName: 'Samppa Kiinteistö- ja Siivouspalvelut',
    
    // Page content
    pageTitle: 'SAMPPA KIINTEISTÖ- JA SIIVOUSPALVELUT',
    
    // Hero
    heroTitle: 'Kaikki kiinteistön palvelut yhdestä paikasta',
    heroSubtitle: 'Siivous • Ikkunoiden pesu • Kiinteistöhuolto • Piha-alueet • Lumityöt',
    heroText: 'Luotettavaa ja joustavaa palvelua yrityksille, taloyhtiöille ja kiinteistöille.',
    heroPrimary: 'Pyydä Tarjous',
    heroSecondary: 'Tutustu Palveluihin',
    
    // Services Section
    servicesTitle: 'Palvelumme',
    
    cleaning: {
      title: 'Siivouspalvelut',
      text: 'Pidämme yritysten, toimitilojen ja kiinteistöjen tilat siisteinä ja viihtyisinä.',
      items: ['Yrityssiivous','Hotellisiivous','Kodin siivous', 'Toimitilojen siivous', 'Porrassiivous', 'Kertasiivous', 'Ylläpitosiivous', 'Perussiivous'],
      cta: 'Tutustu siivouspalveluihin →'
    },
    
    windowWashing: {
      title: 'Ikkunoiden pesu',
      text: 'Puhtaat ikkunat viimeistelevät kiinteistön ilmeen.',
      items: ['Yritysten ikkunanpesu', 'Liiketilojen ikkunanpesu', 'Taloyhtiöiden ikkunanpesu', 'Kertaluonteiset ikkunanpesut'],
      cta: 'Tutustu ikkunanpesupalveluun →'
    },
    
    propertyMaintenance: {
      title: 'Kiinteistöhuolto',
      text: 'Huolehdimme kiinteistön päivittäisestä ylläpidosta ja sovittavista huoltotöistä.',
      items: ['Kiinteistön yleinen ylläpito', 'Pienet huoltotyöt', 'Jätealueiden hoito', 'Tarkastukset ja pienet korjaukset', 'Muut sovittavat huoltopalvelut'],
      cta: 'Tutustu kiinteistöhuoltoon →'
    },
    
    outdoorAreas: {
      title: 'Piha- ja ulkoalueiden hoito [Kesä]',
      text: 'Pidämme piha-alueet siisteinä ja hyvässä kunnossa ympäri vuoden.',
      items: ['Nurmikon leikkaus', 'Piha-alueiden siistiminen', 'Lehtien poisto', 'Roskien poisto', 'Pensaiden ja istutusalueiden hoito', 'Ulkoalueiden ylläpito'],
      cta: 'Tutustu pihapalveluihin →'
    },
    
    winterServices: {
      title: 'Talvikauden palvelut',
      text: 'Huolehdimme kulkureittien turvallisuudesta myös talvella.',
      items: ['Lumityöt', 'Lumenluonti', 'Hiekoitus', 'Liukkaudentorjunta'],
      cta: 'Tutustu talvipalveluihin →'
    },
    
    // Why Choose Us
    whyChoose: {
      title: 'Miksi Samppa?',
      items: [
        {
          icon: '🤝',
          title: 'Yksi kumppani – useampi palvelu',
          text: 'Siivouksen, ikkunanpesun, kiinteistöhuollon ja piha-alueiden hoidon voi tilata samalta palveluntarjoajalta.'
        },
        {
          icon: '🔄',
          title: 'Joustava palvelu',
          text: 'Sovimme palvelun asiakkaan tarpeen mukaan – kertaluonteisesti tai säännöllisesti.'
        },
        {
          icon: '✅',
          title: 'Luotettava tekeminen',
          text: 'Pidämme sovituista asioista kiinni ja hoidamme työt huolellisesti.'
        },
        {
          icon: '🏢',
          title: 'Palvelua yrityksille ja kiinteistöille',
          text: 'Palvelemme yrityksiä, liiketiloja, taloyhtiöitä ja muita kiinteistönomistajia.'
        }
      ]
    },
    
    // For Businesses
    business: {
      title: 'Yrityksille',
      subtitle: 'Yrityksesi tilat kuntoon ilman turhaa vaivaa',
      text: 'Tarjoamme yrityksille kokonaisvaltaisia palveluja toimitilojen siivoukseen, ikkunanpesuun, kiinteistöhuoltoon ja ulkoalueiden hoitoon. Voit tilata yksittäisen palvelun tai rakentaa jatkuvan palvelukokonaisuuden.',
      examples: [
        'Kerran kuukaudessa tehtävää ikkunanpesua?',
        'Säännöllistä toimitilojen siivousta?',
        'Nurmikonleikkuuta?',
        'Talvikauden lumitöitä?',
        'Pieniä kiinteistöhuollon töitä?'
      ],
      cta: 'Pyydä Yritystarjous'
    },
    
    // For Properties
    property: {
      title: 'Kiinteistöille',
      subtitle: 'Kiinteistön ylläpito yhdeltä kumppanilta',
      text: 'Pidämme huolta kiinteistön siisteydestä, piha-alueista ja sovittavista huoltotöistä ympäri vuoden. Palvelukokonaisuus voidaan suunnitella esimerkiksi taloyhtiölle, liikekiinteistölle tai muulle kiinteistölle.',
      services: ['Siivous', 'Ikkunoiden pesu', 'Kiinteistöhuolto', 'Pihatyöt', 'Lumityöt'],
      cta: 'Pyydä Tarjous'
    },
    
    // How It Works
    howItWorks: {
      title: 'Näin palvelu toimii',
      steps: [
        {
          number: '1',
          title: 'Ota yhteyttä',
          text: 'Kerro meille kiinteistöstäsi ja tarvitsemistasi palveluista.'
        },
        {
          number: '2',
          title: 'Sovitaan tarpeet',
          text: 'Käymme läpi, mitä tehdään ja kuinka usein.'
        },
        {
          number: '3',
          title: 'Saat tarjouksen',
          text: 'Saat selkeän tarjouksen sovituista palveluista.'
        },
        {
          number: '4',
          title: 'Aloitamme työt',
          text: 'Sovitaan aloitus ja pidämme kiinteistöstäsi huolta.'
        }
      ]
    },
    
    // Contact Form
    contact: {
      title: 'Tarjouspyyntö',
      subtitle: 'Pyydä tarjous',
      subtext: 'Kerro meille, mitä tarvitset.',
      name: 'Nimi *',
      company: 'Yritys',
      phone: 'Puhelinnumero *',
      email: 'Sähköposti *',
      address: 'Kohteen osoite',
      services: 'Mitä palvelua tarvitset?',
      servicesList: ['Siivous', 'Ikkunoiden pesu', 'Kiinteistöhuolto', 'Nurmikon ja piha-alueiden hoito', 'Lumityöt ja hiekoitus', 'Muu palvelu'],
      additionalInfo: 'Lisätietoja:',
      submit: 'Lähetä Tarjouspyyntö',
      sending: 'Lähetetään...',
      success: 'Kiitos! Otamme sinuun yhteyttä pian.',
      error: 'Jotain meni pieleen. Yritä uudelleen.',
      phoneLabel: 'Puhelin',
      emailLabel: 'Sähköposti',
      locationLabel: 'Toimialue'
    },
    
    // About Us
    about: {
      title: 'Meistä',
      subtitle: 'Samppa Kiinteistö- ja Siivouspalvelut',
      text1: 'Olemme kiinteistöjen, yritysten ja ulkoalueiden palveluihin keskittyvä yritys.',
      text2: 'Tavoitteemme on tarjota asiakkaillemme luotettavaa, joustavaa ja laadukasta palvelua yhdestä paikasta.',
      text3: 'Palvelumme voidaan toteuttaa kertaluonteisesti tai säännöllisesti asiakkaan tarpeen mukaan.',
      tagline: 'Siistiä jälkeä. Huolellista palvelua.'
    },
    
    // Footer
    footer: {
      copyright: '© 2026 Samppa Kiinteistö- ja Siivouspalvelut',
      privacy: 'Tietosuojaseloste',
      cookies: 'Evästeasetukset'
    },
    footerContact: {
      phoneLabel: 'Soita Meille',
      phone: '+358 44 3438 613',
      emailLabel: 'Sähköposti',
      email: 'samppa@samppalogistics.fi',
      locationLabel: 'Sijainti',
      location: 'Suomi',
      socialLabel: 'Seuraa Meitä'
    }
  }
};

function PropertyPage({ language, setLanguage }) {
  const text = content[language];
  const navTargets = ['/', '/logistics', '/property', '/company', '/contact'];

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    address: '',
    services: [],
    additionalInfo: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      // Handle checkbox selections
      setFormData(prev => {
        const services = prev.services.includes(value)
          ? prev.services.filter(item => item !== value)
          : [...prev.services, value];
        return { ...prev, services };
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
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
      const response = await fetch('https://formspree.io/f/mnpqgbqg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          services: formData.services.join(', '),
          additionalInfo: formData.additionalInfo,
          page: 'Property Services Quote Request',
          language: language
        })
      });

      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          success: true,
          message: text.contact.success
        });
        // Reset form
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          address: '',
          services: [],
          additionalInfo: ''
        });
        // Reset checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: text.contact.error
      });
    }
  };

  return (
    <div className="property-page">
      {/* ===== HEADER / NAVBAR ===== */}
      <header className="topbar shell">
        <Link className="brand" to="/" aria-label="Samppa Property Services home">
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
      <main className="property-main">
        {/* Page Title */}
        <div className="property-page-title shell">
          <h1 className="page-title">{text.pageTitle}</h1>
        </div>

        {/* Hero Section */}
        <section className="property-hero shell">
          <div className="property-hero__image">
            <img src={propertyHero} alt={language === 'en' ? 'Property services' : 'Kiinteistöpalvelut'} />
          </div>
          <div className="property-hero__content">
            <h1>{text.heroTitle}</h1>
            <p className="property-hero__subtitle">{text.heroSubtitle}</p>
            <p className="property-hero__text">{text.heroText}</p>
            <div className="property-hero__actions">
              <a href="#contact" className="button button--primary">
                {text.heroPrimary}
              </a>
              <a href="#services" className="button button--ghost">
                {text.heroSecondary}
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="property-services-section shell" id="services">
          <h2 className="section-title">{text.servicesTitle}</h2>
          
          {/* Cleaning Services */}
        <div className="service-category">
  <h3 className="service-category-title">{text.cleaning.title}</h3>
  <p className="service-category-text">{text.cleaning.text}</p>
  <ul className="service-items">
    {text.cleaning.items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
  <Link to="/cleaning" className="service-cta-link">
    {text.cleaning.cta}
  </Link>
</div>

          {/* Window Washing */}
          <div className="service-category">
  <h3 className="service-category-title">{text.windowWashing.title}</h3>
  <p className="service-category-text">{text.windowWashing.text}</p>
  <ul className="service-items">
    {text.windowWashing.items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
  <Link to="/window-washing" className="service-cta-link">
    {text.windowWashing.cta}
  </Link>
</div>

          {/* Property Maintenance */}
          {/* Property Maintenance */}
<div className="service-category">
  <h3 className="service-category-title">{text.propertyMaintenance.title}</h3>
  <p className="service-category-text">{text.propertyMaintenance.text}</p>
  <ul className="service-items">
    {text.propertyMaintenance.items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
  <Link to="/property-maintenance" className="service-cta-link">
    {text.propertyMaintenance.cta}
  </Link>
</div>

          {/* Outdoor Areas */}
        {/* Outdoor Areas */}
<div className="service-category">
  <h3 className="service-category-title">{text.outdoorAreas.title}</h3>
  <p className="service-category-text">{text.outdoorAreas.text}</p>
  <ul className="service-items">
    {text.outdoorAreas.items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
  <Link to="/outdoor-areas" className="service-cta-link">
    {text.outdoorAreas.cta}
  </Link>
</div>

          {/* Winter Services */}
          <div className="service-category">
  <h3 className="service-category-title">{text.winterServices.title}</h3>
  <p className="service-category-text">{text.winterServices.text}</p>
  <ul className="service-items">
    {text.winterServices.items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
  <Link to="/winter-services" className="service-cta-link">
    {text.winterServices.cta}
  </Link>
</div>
        </section>

        {/* Why Choose Us */}
        <section className="property-why-choose shell">
          <h2 className="section-title">{text.whyChoose.title}</h2>
          <div className="why-choose-grid">
            {text.whyChoose.items.map((item, index) => (
              <div key={index} className="why-choose-item">
                <div className="why-choose-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* For Businesses */}
        <section className="property-business shell">
          <div className="business-box">
            <h2>{text.business.title}</h2>
            <h3>{text.business.subtitle}</h3>
            <p>{text.business.text}</p>
            <ul className="business-examples">
              {text.business.examples.map((example, index) => (
                <li key={index}>{example}</li>
              ))}
            </ul>
            <div className="business-cta-row">
              <a href="#contact" className="button button--primary button--large">
                {text.business.cta}
              </a>
            </div>
          </div>
        </section>

        {/* For Properties */}
        <section className="property-properties shell">
          <div className="properties-box">
            <h2>{text.property.title}</h2>
            <h3>{text.property.subtitle}</h3>
            <p>{text.property.text}</p>
            <div className="property-services-tags">
              {text.property.services.map((service, index) => (
                <span key={index} className="service-tag">{service}</span>
              ))}
            </div>
            <a href="#contact" className="button button--primary button--large">
              {text.property.cta}
            </a>
          </div>
        </section>

        {/* How It Works */}
        <section className="property-how-it-works shell">
          <h2 className="section-title">{text.howItWorks.title}</h2>
          <div className="steps-grid">
            {text.howItWorks.steps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact / Quote Request Section */}
        <section className="property-contact-section shell" id="contact">
          <div className="contact-form-container">
            <h2>{text.contact.title}</h2>
            <p className="contact-subtitle">{text.contact.subtitle}</p>
            <p className="contact-subtext">{text.contact.subtext}</p>
            
            {/* Show success or error message */}
            {status.submitted && (
              <div className={`form-message ${status.success ? 'form-message--success' : 'form-message--error'}`}>
                {status.message}
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{text.contact.name}</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label>{text.contact.company}</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label>{text.contact.phone}</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label>{text.contact.email}</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label>{text.contact.address}</label>
                <input 
                  type="text" 
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label>{text.contact.services}</label>
                <div className="checkbox-group">
                  {text.contact.servicesList.map((service, index) => (
                    <label key={index} className="checkbox-label">
                      <input 
                        type="checkbox" 
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={handleChange}
                      /> 
                      {service}
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label>{text.contact.additionalInfo}</label>
                <textarea 
                  rows="4"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="button button--primary button--large submit-btn"
                disabled={status.submitting}
              >
                {status.submitting ? text.contact.sending : text.contact.submit}
              </button>
            </form>
            
            <div className="contact-info-row">
              <div className="contact-info-item">
                <span className="contact-info-icon">📞</span>
                <div>
                  <strong>{text.contact.phoneLabel}</strong>
                  <p>+358 44 3438 613</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">✉️</span>
                <div>
                  <strong>{text.contact.emailLabel}</strong>
                  <p>samppa@samppalogistics.fi</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">📍</span>
                <div>
                  <strong>{text.contact.locationLabel}</strong>
                  <p>{language === 'en' ? 'Helsinki, Finland' : 'Helsinki, Suomi'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="property-about shell">
          <div className="about-box">
            <h2>{text.about.title}</h2>
            <h3>{text.about.subtitle}</h3>
            <p>{text.about.text1}</p>
            <p>{text.about.text2}</p>
            <p>{text.about.text3}</p>
            <p className="about-tagline">{text.about.tagline}</p>
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
            <h4>{text.footerContact.phoneLabel}</h4>
            <strong>{text.footerContact.phone}</strong>
            <p>Mon-Fri 8.00 - 17.00</p>
          </div>

          <div className="home-contact-block">
            <h4>{text.footerContact.emailLabel}</h4>
            <strong>{text.footerContact.email}</strong>
            <p>24/7</p>
          </div>

          <div className="home-contact-block">
            <h4>{text.footerContact.locationLabel}</h4>
            <strong>{text.footerContact.location}</strong>
            <p>Helsinki</p>
          </div>

          <div className="home-contact-block home-contact-social">
            <h4>{text.footerContact.socialLabel}<img src={vastuLogo} alt="Luotettava Kumppani" className="home-footer-vastu" /></h4>
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

export default PropertyPage;