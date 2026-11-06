import React from 'react';
import { IconWhatsApp, IconPhone, IconOrderSlip } from './TradeIcons';

export default function MobileStickyBar({ siteData, strings, currentLang, cartItems }) {
  const isUrdu = currentLang === 'ur';

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.pricePkr * item.quantity, 0);

  const scrollToSlip = (e) => {
    e.preventDefault();
    const elem = document.querySelector('#order-slip');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="mobile-sticky-bar" aria-label="Mobile quick trade bar">
      <div className="mobile-bar-inner">
        {/* Order Slip Quick Jump */}
        <button
          type="button"
          className="mobile-bar-slip-trigger"
          onClick={scrollToSlip}
          aria-label={`View order slip with ${totalCount} items`}
        >
          <IconOrderSlip size={18} />
          <span className="mobile-bar-badge">{totalCount}</span>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start', lineHeight: 1.1 }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', opacity: 0.85 }}>
              {strings.mobileBar.slipLabel}
            </span>
            <span className="mobile-bar-total">
              PKR {totalAmount > 0 ? totalAmount.toLocaleString() : '0'}
            </span>
          </div>
        </button>

        {/* Quick Dial and Direct WhatsApp */}
        <div className="mobile-bar-actions">
          <a
            href={`tel:${siteData.business.contact.phoneRaw}`}
            className="btn-mobile-action btn-secondary"
            aria-label="Call shop"
          >
            <IconPhone size={18} />
          </a>

          <a
            href={siteData.business.contact.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mobile-action btn-whatsapp"
            aria-label="Open WhatsApp"
          >
            <IconWhatsApp size={18} />
            <span>{strings.mobileBar.whatsapp}</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

