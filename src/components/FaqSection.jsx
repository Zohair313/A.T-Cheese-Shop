import React, { useState } from 'react';
import { IconChevronDown } from './TradeIcons';

export default function FaqSection({ siteData, strings, currentLang }) {
  const isUrdu = currentLang === 'ur';
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section" id="faq" style={{ backgroundColor: 'var(--color-surface-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{strings.nav.faq}</span>
          <h2 className="section-title">{strings.faq.title}</h2>
          <p className="section-subtitle">{strings.faq.subtitle}</p>
        </div>

        <div className="faq-list">
          {siteData.faq.map((item, index) => {
            const isOpen = openIndex === index;
            const question = isUrdu ? item.qUr : item.qEn;
            const answer = isUrdu ? item.aUr : item.aEn;

            return (
              <div key={index} className="faq-item">
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{question}</span>
                  <span style={{ 
                    transform: isOpen ? 'rotate(180deg)' : 'none', 
                    transition: 'transform var(--transition-fast)' 
                  }}>
                    <IconChevronDown size={18} />
                  </span>
                </button>
                {isOpen && (
                  <div id={`faq-answer-${index}`} className="faq-answer">
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

