import React, { useState } from 'react';
import { IconWhatsApp, IconPhone, IconMenu, IconClose, IconGlobe } from './TradeIcons';

export default function Header({ siteData, strings, currentLang, onToggleLang, onOpenOrderSlip, slipCount }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#catalog', label: strings.nav.products },
    { href: '#order-slip', label: strings.nav.orderBuilder },
    { href: '#trade-terms', label: strings.nav.bulkTerms },
    { href: '#storage-guide', label: strings.nav.storage },
    { href: '#reputation', label: strings.nav.reviews },
    { href: '#faq', label: strings.nav.faq },
    { href: '#location', label: strings.nav.visit }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Operational Status Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-status">
            <span className="status-dot" aria-hidden="true"></span>
            <span>{strings.hero.status}</span>
          </div>
          <div className="top-bar-links">
            <a href={`tel:${siteData.business.contact.phoneRaw}`} className="top-bar-link">
              <IconPhone size={14} />
              <span>{siteData.business.contact.phoneDisplay}</span>
            </a>
            <a 
              href={siteData.business.contact.whatsappDirectUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="top-bar-link"
            >
              <IconWhatsApp size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="site-header">
        <div className="container header-inner">
          {/* Logo & Brand Identity */}
          <a href="#top" className="site-logo" onClick={(e) => handleNavClick(e, '#top')}>
            <svg className="site-logo-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="48" height="48" rx="10" fill="#D97706" />
              <path d="M10 34L38 34L32 16L16 16Z" fill="#FDE68A" stroke="#B45309" strokeWidth="1.5" />
              <circle cx="21" cy="25" r="2.5" fill="#D97706" opacity="0.5" />
              <circle cx="28" cy="22" r="2" fill="#D97706" opacity="0.5" />
              <circle cx="27" cy="29" r="2" fill="#D97706" opacity="0.5" />
            </svg>
            <div className="site-logo-text">
              <span className="site-logo-title">{siteData.business.name}</span>
              <span className="site-logo-subtitle">{strings.nav.brandSubtitle}</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="site-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Language Switch & Mobile Menu Toggle */}
          <div className="header-actions">
            <button
              type="button"
              className="lang-toggle-btn"
              onClick={onToggleLang}
              aria-label={`Switch language to ${currentLang === 'en' ? 'Urdu' : 'English'}`}
            >
              <IconGlobe size={16} />
              <span>{strings.nav.langToggle}</span>
            </button>

            <a
              href={`tel:${siteData.business.contact.phoneRaw}`}
              className="btn btn-secondary btn-sm"
              style={{ display: 'none' }}
            >
              <IconPhone size={16} />
              <span>{strings.nav.call}</span>
            </a>

            <button
              type="button"
              className="btn btn-secondary btn-icon-only mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <IconMenu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Height Mobile Navigation Panel (RTL-Compatible) */}
      {mobileMenuOpen && (
        <div 
          className="mobile-nav-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div 
        className={`mobile-nav-panel ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Drawer"
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="site-logo-text">
              <span className="site-logo-title">{siteData.business.name}</span>
              <span className="site-logo-subtitle">{strings.nav.brandSubtitle}</span>
            </div>
            <button
              type="button"
              className="btn btn-secondary btn-icon-only"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <IconClose size={22} />
            </button>
          </div>

          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-item"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid var(--color-steel-200)', paddingTop: '16px' }}>
          <a
            href={siteData.business.contact.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <IconWhatsApp size={18} />
            <span>{strings.nav.whatsapp}</span>
          </a>
          <a
            href={`tel:${siteData.business.contact.phoneRaw}`}
            className="btn btn-secondary"
          >
            <IconPhone size={18} />
            <span>{strings.nav.call}</span>
          </a>
        </div>
      </div>
    </>
  );
}

