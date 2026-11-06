import React, { useState } from 'react';
import { IconPlus, IconMinus, IconOrderSlip } from './TradeIcons';

export default function ProductCard({ product, strings, currentLang, onAddToCart }) {
  const isUrdu = currentLang === 'ur';
  const [selectedPackIndex, setSelectedPackIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const selectedPack = product.packSizes[selectedPackIndex] || product.packSizes[0];
  const productName = isUrdu ? product.nameUr : product.nameEn;
  const productDesc = isUrdu ? product.descriptionUr : product.descriptionEn;
  const bestFor = isUrdu ? product.bestForUr : product.bestForEn;
  const packSizeText = isUrdu ? selectedPack.sizeUr : selectedPack.sizeEn;

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAdd = () => {
    onAddToCart({
      productId: product.id,
      packId: selectedPack.id,
      name: productName,
      packSize: packSizeText,
      pricePkr: selectedPack.pricePkr,
      quantity: quantity,
      unit: selectedPack.unit
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  // Map category to localized label
  const categoryLabel = {
    'cheddar': isUrdu ? 'چیڈر' : 'Cheddar',
    'mozzarella': isUrdu ? 'موزارِیلا' : 'Mozzarella',
    'cream-cheese': isUrdu ? 'کریم چیز' : 'Cream Cheese',
    'other-dairy': isUrdu ? 'ڈیری' : 'Dairy'
  }[product.category] || 'Dairy';

  return (
    <article className="product-card">
      <div className="product-img-wrapper">
        <img
          src={product.image}
          alt={productName}
          className="product-img"
          loading="lazy"
          width="400"
          height="300"
          onError={(e) => {
            if (product.imagePlaceholder && e.target.src.indexOf(product.imagePlaceholder) === -1) {
              e.target.src = product.imagePlaceholder;
            }
          }}
        />
        <span className="product-category-tag">{categoryLabel}</span>
      </div>

      <div className="product-body">
        <h3 className="product-name">{productName}</h3>
        <p className="product-desc">{productDesc}</p>

        <div className="product-best-for">
          <strong>{strings.catalog.bestForLabel}: </strong>
          <span>{bestFor}</span>
        </div>

        <div className="product-controls">
          <div className="pack-select-group">
            <label htmlFor={`pack-${product.id}`} className="pack-select-label">
              {strings.catalog.packSizeLabel}
            </label>
            <select
              id={`pack-${product.id}`}
              className="pack-select"
              value={selectedPackIndex}
              onChange={(e) => setSelectedPackIndex(Number(e.target.value))}
            >
              {product.packSizes.map((pack, index) => (
                <option key={pack.id} value={index}>
                  {isUrdu ? pack.sizeUr : pack.sizeEn} — PKR {pack.pricePkr.toLocaleString()}
                </option>
              ))}
            </select>
          </div>

          <div className="product-action-row">
            <div className="product-price-block">
              <span className="product-price-val">
                PKR {(selectedPack.pricePkr * quantity).toLocaleString()}
              </span>
              <span className="product-price-note">{selectedPack.priceNote}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="quantity-stepper" role="group" aria-label="Quantity Controls">
                <button
                  type="button"
                  className="stepper-btn"
                  onClick={handleDecrement}
                  aria-label="Decrease quantity"
                  disabled={quantity <= 1}
                >
                  <IconMinus size={14} />
                </button>
                <input
                  type="number"
                  inputMode="numeric"
                  className="stepper-input"
                  value={quantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10);
                    setQuantity(isNaN(val) || val < 1 ? 1 : val);
                  }}
                  min="1"
                  aria-label="Quantity"
                />
                <button
                  type="button"
                  className="stepper-btn"
                  onClick={handleIncrement}
                  aria-label="Increase quantity"
                >
                  <IconPlus size={14} />
                </button>
              </div>

              <button
                type="button"
                className={`btn ${justAdded ? 'btn-whatsapp' : 'btn-primary'}`}
                onClick={handleAdd}
              >
                <IconOrderSlip size={16} />
                <span>{justAdded ? strings.catalog.addedNotice : strings.catalog.addButton}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

