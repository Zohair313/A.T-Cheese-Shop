import React from 'react';
import { IconStar } from './TradeIcons';

export default function Reputation({ siteData, strings, currentLang }) {
  const isUrdu = currentLang === 'ur';

  return (
    <section className="section" id="reputation">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{strings.nav.reviews}</span>
          <h2 className="section-title">{strings.reputation.title}</h2>
          <p className="section-subtitle">{strings.reputation.subtitle}</p>
        </div>

        <div className="reputation-banner">
          <div className="rating-score-box">
            <div className="rating-number">{siteData.business.reputation.googleRating}</div>
            <div className="rating-out-of">{strings.reputation.scoreOutOf}</div>
            <div className="rating-stars" aria-label="4.5 out of 5 stars">
              <IconStar size={20} />
              <IconStar size={20} />
              <IconStar size={20} />
              <IconStar size={20} />
              <span style={{ opacity: 0.5 }}>★</span>
            </div>
            <div className="rating-count">
              {siteData.business.reputation.reviewCount} {isUrdu ? 'پبلک گوگل ریویوز' : 'Public Google Reviews'}
            </div>
          </div>

          <div className="reputation-content">
            <h3>{strings.reputation.badge}</h3>
            <p>
              {isUrdu 
                ? siteData.reviews.summary.statementUr
                : siteData.reviews.summary.statementEn}
            </p>
            <div className="transparency-note">
              <strong>{strings.reputation.transparencyTitle}: </strong>
              <span>{isUrdu ? siteData.reviews.noteUr : siteData.reviews.noteEn}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

