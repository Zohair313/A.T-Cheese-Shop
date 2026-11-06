import React from 'react';
import { IconMapPin, IconPhone, IconWhatsApp } from './TradeIcons';

export default function LocationSection({ siteData, strings, currentLang }) {
  const isUrdu = currentLang === 'ur';

  return (
    <section className="section" id="location">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{strings.nav.visit}</span>
          <h2 className="section-title">{strings.location.title}</h2>
          <p className="section-subtitle">{strings.location.subtitle}</p>
        </div>

        <div className="location-grid">
          {/* Contact & Hours Card */}
          <div className="location-info-card">
            <div className="location-meta-group">
              <div className="location-meta-label">{strings.location.addressLabel}</div>
              <div className="location-meta-value">
                {siteData.business.address.full}
              </div>
            </div>

            <div className="location-meta-group">
              <div className="location-meta-label">{strings.location.hoursLabel}</div>
              <div className="location-meta-value">
                {strings.location.hoursValue}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--color-steel-500)', marginTop: '4px' }}>
                {strings.location.hoursSunday}
              </div>
            </div>

            <div className="location-meta-group">
              <div className="location-meta-label">{strings.location.contactLabel}</div>
              <div className="location-meta-value" style={{ fontFamily: 'var(--font-mono)' }}>
                {siteData.business.contact.phoneDisplay}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '24px' }}>
              <a
                href={siteData.business.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <IconMapPin size={18} />
                <span>{strings.location.directionsBtn}</span>
              </a>

              <a
                href={`tel:${siteData.business.contact.phoneRaw}`}
                className="btn btn-secondary"
              >
                <IconPhone size={18} />
                <span>{strings.location.callBtn}</span>
              </a>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="map-container">
            <iframe
              src={siteData.business.address.googleMapsEmbedUrl}
              className="map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="A.T Cheese Shop Location - Block 6 Gulshan-e-Iqbal Karachi"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

