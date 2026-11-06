import React from 'react';
import { IconOrderSlip, IconPhone } from './TradeIcons';

export default function Hero({ siteData, strings, currentLang }) {
  const isUrdu = currentLang === 'ur';

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="top">
      <div className="container">
        <div className="hero-grid">
          {/* Trade Proposition Column */}
          <div>
            <div className="hero-badge">
              <span className="status-dot"></span>
              <span>{siteData.business.address.street}, {siteData.business.city}</span>
            </div>

            <h1 className="hero-title">{strings.hero.headline}</h1>
            <p className="hero-lead">{strings.hero.subline}</p>

            <div className="hero-actions">
              <a
                href="#order-slip"
                className="btn btn-primary"
                onClick={(e) => scrollToSection(e, '#order-slip')}
              >
                <IconOrderSlip size={18} />
                <span>{strings.hero.ctaOrder}</span>
              </a>
              <a
                href={`tel:${siteData.business.contact.phoneRaw}`}
                className="btn btn-secondary"
              >
                <IconPhone size={18} />
                <span>{siteData.business.contact.phoneDisplay}</span>
              </a>
            </div>

            {/* Quick Operational Specs Grid */}
            <div className="quick-specs-grid">
              <div className="quick-spec-card">
                <div className="quick-spec-label">{strings.hero.quickSpec1Label}</div>
                <div className="quick-spec-value">{strings.hero.quickSpec1Value}</div>
              </div>
              <div className="quick-spec-card">
                <div className="quick-spec-label">{strings.hero.quickSpec2Label}</div>
                <div className="quick-spec-value">{strings.hero.quickSpec2Value}</div>
              </div>
              <div className="quick-spec-card">
                <div className="quick-spec-label">{strings.hero.quickSpec3Label}</div>
                <div className="quick-spec-value">{strings.hero.quickSpec3Value}</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card (Commercial Workstation Representation) */}
          <div>
            <div className="hero-visual-card">
              <img
                src="assets/images/dairy-assortment-counter.jpg"
                alt={isUrdu ? "کمرشل کچن کے کاؤنٹر پر سجے ہوئے ڈیری آئٹمز" : "Commercial stainless steel workstation with bulk cheese inventory"}
                className="hero-visual-img"
                width="600"
                height="338"
                loading="eager"
                onError={(e) => {
                  e.target.src = "assets/images/dairy-assortment-counter.svg";
                }}
              />
              <div className="hero-visual-meta">
                <div className="hero-meta-title">
                  <span>{isUrdu ? "تھوک انوینٹری و ترسیل" : "Depot Inventory & Dispatch"}</span>
                  <span style={{ fontSize: '12px', color: 'var(--color-cheddar-600)', fontFamily: 'var(--font-mono)' }}>
                    PKR Wholesale
                  </span>
                </div>
                <div className="hero-meta-desc">
                  {isUrdu 
                    ? "بیکریز، پیزا اور برگر کچنز کے لیے تیار شدہ چلر اسٹاک۔ واٹس ایپ پر فوری روانگی۔"
                    : "Chilled master inventory prepared for Karachi burger shops, bakeries, and pizza outlets."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

