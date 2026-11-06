import React from 'react';

export default function BulkTerms({ siteData, strings, currentLang }) {
  const isUrdu = currentLang === 'ur';

  const terms = [
    {
      title: strings.trade.minTitle,
      desc: isUrdu 
        ? siteData.tradeTerms.minimumOrderDelivery + " (ڈلیوری) / سنگل پیک شاپ پک اپ۔"
        : `${siteData.tradeTerms.minimumOrderDelivery} (delivery) / Single packs welcome for shop pickup.`
    },
    {
      title: strings.trade.ratesTitle,
      desc: isUrdu
        ? siteData.tradeTerms.pricingPolicy
        : siteData.tradeTerms.pricingPolicy
    },
    {
      title: strings.trade.dispatchTitle,
      desc: isUrdu
        ? siteData.tradeTerms.deliveryWindows
        : siteData.tradeTerms.deliveryWindows
    },
    {
      title: strings.trade.samplesTitle,
      desc: isUrdu
        ? siteData.tradeTerms.samples
        : siteData.tradeTerms.samples
    }
  ];

  return (
    <section className="section" id="trade-terms" style={{ backgroundColor: 'var(--color-surface-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{strings.nav.bulkTerms}</span>
          <h2 className="section-title">{strings.trade.title}</h2>
          <p className="section-subtitle">{strings.trade.subtitle}</p>
        </div>

        <div className="terms-grid">
          {terms.map((term, index) => (
            <div key={index} className="term-card">
              <h3 className="term-title">{term.title}</h3>
              <p className="term-desc">{term.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'center', backgroundColor: 'var(--color-surface-card)', padding: '20px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-steel-300)' }}>
          <img
            src="assets/images/cheese-weighed-scale.jpg"
            alt={isUrdu ? "کمرشل ڈیجیٹل اسکیل پر پسا ہوا چیز تولنے کا منظر" : "Commercial platform digital scale weighing bulk shredded cheese"}
            style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
            loading="lazy"
            onError={(e) => { e.target.src = "assets/images/cheese-weighed-scale.svg"; }}
          />
          <div>
            <span className="section-tag">{isUrdu ? "درست کمرشل پیمائش" : "Precision Commercial Portioning"}</span>
            <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>
              {isUrdu ? "ہر آرڈر کا وزن ڈیجیٹل اسکیل پر تصدیق شدہ" : "Verified Scale Tare & Weight Assurance"}
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--color-steel-700)', lineHeight: '1.6' }}>
              {isUrdu
                ? "دکان سے ڈسپیچ ہونے والا ہر بلاک، سلائس پیک اور کٹنگ کمرشل ڈیجیٹل ترازو پر تول کر واٹس ایپ پر گاہک کو حتمی وزن بھیجا جاتا ہے۔"
                : "Every batch, block cut, and slice master pack is weighed on digital platform scales prior to packaging. Scale tare weights are shared directly on WhatsApp with your dispatch slip."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

