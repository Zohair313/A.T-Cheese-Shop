import React, { useState } from 'react';
import { IconWhatsApp, IconTrash, IconPlus, IconMinus, IconOrderSlip } from './TradeIcons';

export default function OrderSlip({ 
  siteData, 
  strings, 
  currentLang, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem 
}) {
  const isUrdu = currentLang === 'ur';

  const [fulfillment, setFulfillment] = useState('delivery'); // 'pickup' | 'delivery'
  const [buyerName, setBuyerName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [notes, setNotes] = useState('');
  const [validationError, setValidationError] = useState('');

  // Calculate estimated total
  const estimatedTotal = cartItems.reduce(
    (sum, item) => sum + item.pricePkr * item.quantity, 
    0
  );

  const handleSendWhatsApp = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      setValidationError(strings.builder.emptyMessage);
      return;
    }

    if (!buyerName.trim()) {
      setValidationError(strings.builder.validationName);
      return;
    }

    if (!phone.trim()) {
      setValidationError(strings.builder.validationPhone);
      return;
    }

    if (fulfillment === 'delivery' && !selectedArea) {
      setValidationError(strings.builder.validationArea);
      return;
    }

    setValidationError('');

    const areaObj = siteData.deliveryAreas.find(a => a.id === selectedArea);
    const areaName = areaObj ? (isUrdu ? areaObj.nameUr : areaObj.nameEn) : (isUrdu ? 'دکان سے پک اپ' : 'Depot Pickup');

    let message = '';

    if (isUrdu) {
      message += `*تھوک آرڈر تفصیلات — اے ٹی چیز شاپ*\n`;
      message += `-----------------------------------\n`;
      message += `*گاہک / کاروبار:* ${buyerName.trim()}\n`;
      message += `*رابطہ فون:* ${phone.trim()}\n`;
      message += `*ترسیل کی نوعیت:* ${fulfillment === 'delivery' ? 'کراچی میں ڈلیوری' : 'گلشن ڈپو سے پک اپ'}\n`;
      if (fulfillment === 'delivery') {
        message += `*علاقہ:* ${areaName}\n`;
      }
      message += `-----------------------------------\n`;
      message += `*آرڈر آئٹمز:*\n`;
      cartItems.forEach((item, idx) => {
        const itemLineTotal = item.pricePkr * item.quantity;
        message += `${idx + 1}. ${item.name} (${item.packSize}) × ${item.quantity} = PKR ${itemLineTotal.toLocaleString()}\n`;
      });
      message += `-----------------------------------\n`;
      message += `*تخمینی کل رقم:* PKR ${estimatedTotal.toLocaleString()}\n`;
      message += `_(حتمی وزن اور ترسیل چارجز تصدیق کے تابع ہیں)_\n`;
      if (notes.trim()) {
        message += `-----------------------------------\n`;
        message += `*خصوصی ہدایات:* ${notes.trim()}\n`;
      }
    } else {
      message += `*WHOLESALE ORDER INQUIRY — A.T CHEESE SHOP*\n`;
      message += `-----------------------------------\n`;
      message += `*Customer / Business:* ${buyerName.trim()}\n`;
      message += `*Contact Phone:* ${phone.trim()}\n`;
      message += `*Fulfillment:* ${fulfillment === 'delivery' ? 'Karachi City Delivery' : 'Pickup at Gulshan Depot'}\n`;
      if (fulfillment === 'delivery') {
        message += `*Delivery Sector:* ${areaName}\n`;
      }
      message += `-----------------------------------\n`;
      message += `*ORDER ITEMS:*\n`;
      cartItems.forEach((item, idx) => {
        const itemLineTotal = item.pricePkr * item.quantity;
        message += `${idx + 1}. ${item.name} (${item.packSize}) x ${item.quantity} = PKR ${itemLineTotal.toLocaleString()}\n`;
      });
      message += `-----------------------------------\n`;
      message += `*ESTIMATED TOTAL:* PKR ${estimatedTotal.toLocaleString()}\n`;
      message += `_(Subject to scale verification and dispatch terms)_\n`;
      if (notes.trim()) {
        message += `-----------------------------------\n`;
        message += `*Notes / Requirements:* ${notes.trim()}\n`;
      }
    }

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${siteData.business.contact.whatsappRaw}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section" id="order-slip">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{strings.nav.orderBuilder}</span>
          <h2 className="section-title">{strings.builder.title}</h2>
          <p className="section-subtitle">{strings.builder.subtitle}</p>
        </div>

        <div className="order-builder-layout">
          {/* Slip Items Card */}
          <div className="order-slip-card">
            <div className="order-slip-header">
              <span className="order-slip-title">{strings.builder.title}</span>
              <span style={{ fontSize: '13px', color: 'var(--color-steel-700)', fontFamily: 'var(--font-mono)' }}>
                {cartItems.length} {isUrdu ? 'آئٹمز' : 'line items'}
              </span>
            </div>

            {cartItems.length === 0 ? (
              <div className="slip-empty-state">
                <IconOrderSlip size={36} style={{ margin: '0 auto 12px', color: 'var(--color-steel-500)' }} />
                <p>{strings.builder.emptyMessage}</p>
              </div>
            ) : (
              <div className="slip-items-list">
                {cartItems.map((item) => (
                  <div key={`${item.productId}-${item.packId}`} className="slip-item-row">
                    <div className="slip-item-meta">
                      <div className="slip-item-title">{item.name}</div>
                      <div className="slip-item-size">{item.packSize}</div>
                    </div>

                    <div className="quantity-stepper" role="group" aria-label="Order item quantity">
                      <button
                        type="button"
                        className="stepper-btn"
                        style={{ width: '36px', height: '36px' }}
                        onClick={() => onUpdateQuantity(item.productId, item.packId, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <IconMinus size={12} />
                      </button>
                      <span style={{ width: '32px', textAlign: 'center', fontFamily: 'var(--font-mono)', fontWeight: '700', fontSize: '14px' }}>
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="stepper-btn"
                        style={{ width: '36px', height: '36px' }}
                        onClick={() => onUpdateQuantity(item.productId, item.packId, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <IconPlus size={12} />
                      </button>
                    </div>

                    <div className="slip-item-total">
                      PKR {(item.pricePkr * item.quantity).toLocaleString()}
                    </div>

                    <button
                      type="button"
                      className="btn-remove-item"
                      onClick={() => onRemoveItem(item.productId, item.packId)}
                      aria-label="Remove item"
                      title={strings.builder.remove}
                    >
                      <IconTrash size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Subtotal Block */}
            <div className="slip-totals-block">
              <div className="slip-total-line">
                <span>{strings.builder.subtotalLabel}</span>
                <span className="slip-total-amount">PKR {estimatedTotal.toLocaleString()}</span>
              </div>
              <p className="slip-disclaimer">{strings.builder.disclaimer}</p>
            </div>

            {/* Dispatch Box Visual Note */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '12px', backgroundColor: 'var(--color-surface-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-steel-200)' }}>
              <img
                src="assets/images/bulk-order-box-pickup.jpg"
                alt={isUrdu ? "ڈسپیچ کے لیے انسولیٹڈ پیکنگ میں تیار شدہ چیز کارٹن" : "Heavy corrugated dispatch carton with insulated lining and cheese blocks"}
                style={{ width: '84px', height: '84px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', flexShrink: 0 }}
                loading="lazy"
                onError={(e) => { e.target.src = "assets/images/bulk-order-box-pickup.svg"; }}
              />
              <div style={{ fontSize: '13px', color: 'var(--color-steel-800)', lineHeight: '1.4' }}>
                <strong>{isUrdu ? "محفوظ انسولیٹڈ پیکنگ: " : "Insulated Dispatch Packaging: "}</strong>
                {isUrdu 
                  ? "کراچی میں تمام ڈلیوریز کولڈ پیکنگ کے ساتھ رائیڈر کے حوالے کی جاتی ہیں تاکہ راستے میں چیز کا ٹمپریچر برقرار رہے۔"
                  : "All citywide orders are packed in heavy cartons with thermal insulation to maintain safe chilled temperatures during rider transit."}
              </div>
            </div>
          </div>

          {/* Dispatch Details & WhatsApp Action Form */}
          <form className="dispatch-form" onSubmit={handleSendWhatsApp}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px' }}>
              {isUrdu ? "آرڈر ترسیل کی تفصیلات" : "Dispatch & Contact Details"}
            </h3>

            {validationError && (
              <div 
                style={{ 
                  backgroundColor: 'var(--color-alert-bg)', 
                  color: 'var(--color-alert-text)', 
                  border: '1px solid var(--color-alert-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '10px 14px',
                  marginBottom: '16px',
                  fontSize: '14px',
                  fontWeight: '600'
                }}
                role="alert"
              >
                {validationError}
              </div>
            )}

            {/* Fulfillment choice */}
            <div className="form-group">
              <span className="form-label">{strings.builder.fulfillmentLegend}</span>
              <div className="fulfillment-radios">
                <label className={`fulfillment-radio-label ${fulfillment === 'delivery' ? 'checked' : ''}`}>
                  <input
                    type="radio"
                    name="fulfillment"
                    value="delivery"
                    checked={fulfillment === 'delivery'}
                    onChange={() => setFulfillment('delivery')}
                  />
                  <span>{strings.builder.fulfillmentDelivery}</span>
                </label>

                <label className={`fulfillment-radio-label ${fulfillment === 'pickup' ? 'checked' : ''}`}>
                  <input
                    type="radio"
                    name="fulfillment"
                    value="pickup"
                    checked={fulfillment === 'pickup'}
                    onChange={() => setFulfillment('pickup')}
                  />
                  <span>{strings.builder.fulfillmentPickup}</span>
                </label>
              </div>
            </div>

            {/* Customer / Business Name */}
            <div className="form-group">
              <label htmlFor="order-buyer-name" className="form-label">
                {strings.builder.nameLabel} *
              </label>
              <input
                type="text"
                id="order-buyer-name"
                className="form-input"
                placeholder={strings.builder.namePlaceholder}
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                required
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="order-buyer-phone" className="form-label">
                {strings.builder.phoneLabel} *
              </label>
              <input
                type="tel"
                id="order-buyer-phone"
                className="form-input"
                placeholder={strings.builder.phonePlaceholder}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            {/* Karachi Area (only if delivery) */}
            {fulfillment === 'delivery' && (
              <div className="form-group">
                <label htmlFor="order-delivery-area" className="form-label">
                  {strings.builder.areaLabel} *
                </label>
                <select
                  id="order-delivery-area"
                  className="form-select"
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  required
                >
                  <option value="">-- {strings.builder.areaDefault} --</option>
                  {siteData.deliveryAreas.map((area) => (
                    <option key={area.id} value={area.id}>
                      {isUrdu ? area.nameUr : area.nameEn} ({isUrdu ? area.estTimeUr : area.estTimeEn})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Notes */}
            <div className="form-group">
              <label htmlFor="order-notes" className="form-label">
                {strings.builder.notesLabel}
              </label>
              <textarea
                id="order-notes"
                className="form-textarea"
                placeholder={strings.builder.notesPlaceholder}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
              />
            </div>

            {/* WhatsApp Dispatch Button */}
            <button
              type="submit"
              className="btn btn-whatsapp"
              style={{ width: '100%', minHeight: '52px', fontSize: '17px' }}
            >
              <IconWhatsApp size={22} />
              <span>{strings.builder.sendButton}</span>
            </button>
            <p style={{ fontSize: '12px', color: 'var(--color-steel-700)', marginTop: '8px', textAlign: 'center' }}>
              {strings.builder.whatsappNotice}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

