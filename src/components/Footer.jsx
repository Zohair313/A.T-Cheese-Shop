import React from 'react';
import { IconWhatsApp, IconPhone, IconMapPin } from './TradeIcons';

export default function Footer({ siteData, strings, currentLang }) {
  const isUrdu = currentLang === 'ur';

  const scrollTo = (e, id) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Role */}
          <div>
            <div className="footer-brand-title">{siteData.business.name}</div>
            <p className="footer-brand-desc">{strings.footer.about}</p>
            <div style={{ marginTop: '16px', fontSize: '13px', color: 'var(--color-cheddar-200)' }}>
              {isUrdu ? "تھوک ڈیری سپلائی برائے کراچی ہوٹلز، پیزا پوائنٹس اور بیکریز" : "Wholesale dairy supply for Karachi food businesses and volume buyers"}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <div className="footer-col-title">{strings.footer.quickLinks}</div>
            <ul className="footer-links-list">
              <li>
                <a href="#catalog" className="footer-link" onClick={(e) => scrollTo(e, '#catalog')}>
                  {strings.nav.products}
                </a>
              </li>
              <li>
                <a href="#order-slip" className="footer-link" onClick={(e) => scrollTo(e, '#order-slip')}>
                  {strings.nav.orderBuilder}
                </a>
              </li>
              <li>
                <a href="#trade-terms" className="footer-link" onClick={(e) => scrollTo(e, '#trade-terms')}>
                  {strings.nav.bulkTerms}
                </a>
              </li>
              <li>
                <a href="#storage-guide" className="footer-link" onClick={(e) => scrollTo(e, '#storage-guide')}>
                  {strings.nav.storage}
                </a>
              </li>
              <li>
                <a href="#faq" className="footer-link" onClick={(e) => scrollTo(e, '#faq')}>
                  {strings.nav.faq}
                </a>
              </li>
              <li>
                <a href="#location" className="footer-link" onClick={(e) => scrollTo(e, '#location')}>
                  {strings.nav.visit}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct WhatsApp */}
          <div>
            <div className="footer-col-title">{strings.footer.contact}</div>
            <ul className="footer-links-list">
              <li style={{ color: 'var(--color-steel-300)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconMapPin size={16} />
                <span>{siteData.business.address.street}, {siteData.business.city}</span>
              </li>
              <li>
                <a href={`tel:${siteData.business.contact.phoneRaw}`} className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconPhone size={16} />
                  <span>{siteData.business.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a 
                  href={siteData.business.contact.whatsappDirectUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-link"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <IconWhatsApp size={16} />
                  <span>WhatsApp Direct Dispatch</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="footer-bottom">
          <div>{strings.footer.copyright}</div>
          <div>{strings.footer.disclaimer}</div>
        </div>
      </div>
    </footer>
  );
}

