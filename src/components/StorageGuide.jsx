import React from 'react';

export default function StorageGuide({ siteData, strings, currentLang }) {
  const isUrdu = currentLang === 'ur';

  return (
    <section className="section" id="storage-guide">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{strings.nav.storage}</span>
          <h2 className="section-title">{strings.storage.title}</h2>
          <p className="section-subtitle">{strings.storage.subtitle}</p>
        </div>

        {/* Cold Storage Facility Banner */}
        <div style={{ marginBottom: '28px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-steel-300)', backgroundColor: 'var(--color-surface-card)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', alignItems: 'center' }}>
            <img
              src="assets/images/cold-storage-packs.jpg"
              alt={isUrdu ? "کولڈ چین چلر کی ریکوں پر سجے ہوئے ویکیوم پیکڈ چیز بلاکس" : "Commercial walk-in chiller storage racks holding bulk cheese packs"}
              style={{ width: '100%', height: '240px', objectFit: 'cover' }}
              loading="lazy"
              onError={(e) => { e.target.src = "assets/images/cold-storage-packs.svg"; }}
            />
            <div style={{ padding: '20px 24px' }}>
              <span className="section-tag" style={{ color: 'var(--color-chiller-600)' }}>
                {isUrdu ? "کولڈ چین مانیٹرنگ" : "Active Cold-Chain Protocol"}
              </span>
              <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px', color: 'var(--color-steel-900)' }}>
                {isUrdu ? "گلشن ڈپو پر مسلسل 2°C تا 4°C درجہ حرارت کی نگرانی" : "Strict 2°C to 4°C Commercial Chiller Storage"}
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--color-steel-700)', lineHeight: '1.6' }}>
                {isUrdu
                  ? "ہماری گلشن شاپ پر تمام موزارِیلا، چیڈر اور کریم چیز کو خصوصی کمرشل چلرز میں محفوظ رکھا جاتا ہے تاکہ کچن میں پہنچنے تک ٹیکسچر اور فیٹ ایمولشن مکمل برقرار رہے۔"
                  : "All bulk inventory at our Gulshan depot is held in calibrated commercial walk-in chiller units. This preserves fat emulsion, prevents bacterial growth, and guarantees maximum kitchen shredding yield."}
              </p>
            </div>
          </div>
        </div>

        {/* Factual Storage Table */}
        <div className="storage-table-wrapper">
          <table className="storage-table">
            <thead>
              <tr>
                <th>{strings.storage.itemCol}</th>
                <th>{strings.storage.tempCol}</th>
                <th>{strings.storage.shelfLifeCol}</th>
              </tr>
            </thead>
            <tbody>
              {siteData.storageNotes.map((note, index) => (
                <tr key={index}>
                  <td style={{ fontWeight: '800', color: 'var(--color-steel-900)' }}>
                    {isUrdu ? note.itemUr : note.itemEn}
                  </td>
                  <td style={{ color: 'var(--color-chiller-700)', fontWeight: '600' }}>
                    {isUrdu ? note.tempUr : note.tempEn}
                  </td>
                  <td style={{ color: 'var(--color-steel-700)' }}>
                    {isUrdu ? note.shelfLifeUr : note.shelfLifeEn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Commercial Kitchen Yield Rules */}
        <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px', color: 'var(--color-steel-900)' }}>
          {strings.storage.chefTipsTitle}
        </h3>
        <div className="storage-tips-grid">
          <div className="tip-card">
            <div className="tip-card-title">{isUrdu ? "چیڈر سلائس کی حفاظت" : "Burger Slice Stability"}</div>
            <div className="tip-card-text">{strings.storage.chefTip1}</div>
          </div>
          <div className="tip-card">
            <div className="tip-card-title">{isUrdu ? "موزارِیلا کدوکش کرنے کا اصول" : "Mozzarella Shredding Yield"}</div>
            <div className="tip-card-text">{strings.storage.chefTip2}</div>
          </div>
          <div className="tip-card">
            <div className="tip-card-title">{isUrdu ? "کریم چیز کی تازگی" : "Cream Cheese Moisture Control"}</div>
            <div className="tip-card-text">{strings.storage.chefTip3}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

