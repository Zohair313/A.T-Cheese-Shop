import React, { useState } from 'react';
import ProductCard from './ProductCard';

export default function Catalog({ products, strings, currentLang, onAddToCart }) {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  const filters = [
    { key: 'all', label: strings.catalog.filterAll },
    { key: 'cheddar', label: strings.catalog.filterCheddar },
    { key: 'mozzarella', label: strings.catalog.filterMozzarella },
    { key: 'cream-cheese', label: strings.catalog.filterCreamCheese },
    { key: 'other-dairy', label: strings.catalog.filterOther }
  ];

  return (
    <section className="section" id="catalog">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{strings.nav.products}</span>
          <h2 className="section-title">{strings.catalog.title}</h2>
          <p className="section-subtitle">{strings.catalog.subtitle}</p>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar" role="tablist" aria-label="Product categories">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`filter-btn ${filter === f.key ? 'active' : ''}`}
              onClick={() => setFilter(f.key)}
              role="tab"
              aria-selected={filter === f.key}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              strings={strings}
              currentLang={currentLang}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Commercial Kitchen Yield Feature Banner */}
        <div style={{ marginTop: '48px', backgroundColor: 'var(--color-surface-card)', border: '2px solid var(--color-steel-300)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center' }}>
            <img
              src="assets/images/baked-pizza-burger-melt.jpg"
              alt={currentLang === 'ur' ? "سمیش برگر اور پیزا میں چیز کا حقیقت پسندانہ پگھلاؤ" : "Smash burger and pan pizza with realistic melted cheese"}
              style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '260px', display: 'block' }}
              loading="lazy"
              onError={(e) => { e.target.src = "assets/images/baked-pizza-burger-melt.svg"; }}
            />
            <div style={{ padding: '24px 28px' }}>
              <span className="section-tag">{currentLang === 'ur' ? "کچن ٹیسٹڈ معیار" : "Kitchen Tested Performance"}</span>
              <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px', color: 'var(--color-steel-900)' }}>
                {currentLang === 'ur' ? "برگر چیڈر میلٹ اور پیزا اسٹریچ کی ضمانت" : "Proven Melt, Stretch & Curd Integrity"}
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-steel-700)', lineHeight: '1.6' }}>
                {currentLang === 'ur'
                  ? "ہمارے تمام چیز بلاکس اور سلائسز کراچی کے کمرشل پیزا اوونز اور اسمیش گرلز کے ہائی ٹمپریچر پر ٹیسٹ شدہ ہیں۔ اضافی تیل چھوڑے بغیر یکساں پگھلاؤ۔"
                  : "Tested under commercial high-heat pizza ovens and flat-top smash grills across Karachi. Yields consistent melt, golden blistering, and zero premature oil splitting."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

