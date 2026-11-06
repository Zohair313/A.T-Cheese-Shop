import React, { useState, useEffect } from 'react';
import siteData from '../data/site-data.json';
import enStrings from '../data/en.json';
import urStrings from '../data/ur.json';

import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import OrderSlip from './components/OrderSlip';
import BulkTerms from './components/BulkTerms';
import StorageGuide from './components/StorageGuide';
import Reputation from './components/Reputation';
import FaqSection from './components/FaqSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';

export default function App() {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('at_cheese_lang') || 'en';
  });

  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('at_cheese_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const strings = currentLang === 'ur' ? urStrings : enStrings;

  // Persist language and update HTML document attributes
  useEffect(() => {
    localStorage.setItem('at_cheese_lang', currentLang);
    const htmlElem = document.documentElement;
    if (currentLang === 'ur') {
      htmlElem.setAttribute('dir', 'rtl');
      htmlElem.setAttribute('lang', 'ur');
      document.title = urStrings.meta.title;
    } else {
      htmlElem.setAttribute('dir', 'ltr');
      htmlElem.setAttribute('lang', 'en');
      document.title = enStrings.meta.title;
    }
  }, [currentLang]);

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem('at_cheese_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleToggleLang = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'ur' : 'en'));
  };

  const handleAddToCart = (newItem) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.productId === newItem.productId && item.packId === newItem.packId
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      } else {
        return [...prevItems, newItem];
      }
    });
  };

  const handleUpdateQuantity = (productId, packId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId, packId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId && item.packId === packId
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (productId, packId) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.productId === productId && item.packId === packId)
      )
    );
  };

  return (
    <div className="app-root">
      <Header
        siteData={siteData}
        strings={strings}
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        slipCount={cartItems.reduce((sum, i) => sum + i.quantity, 0)}
      />

      <main id="main-content">
        <Hero
          siteData={siteData}
          strings={strings}
          currentLang={currentLang}
        />

        <Catalog
          products={siteData.products}
          strings={strings}
          currentLang={currentLang}
          onAddToCart={handleAddToCart}
        />

        <OrderSlip
          siteData={siteData}
          strings={strings}
          currentLang={currentLang}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />

        <BulkTerms
          siteData={siteData}
          strings={strings}
          currentLang={currentLang}
        />

        <StorageGuide
          siteData={siteData}
          strings={strings}
          currentLang={currentLang}
        />

        <Reputation
          siteData={siteData}
          strings={strings}
          currentLang={currentLang}
        />

        <FaqSection
          siteData={siteData}
          strings={strings}
          currentLang={currentLang}
        />

        <LocationSection
          siteData={siteData}
          strings={strings}
          currentLang={currentLang}
        />
      </main>

      <Footer
        siteData={siteData}
        strings={strings}
        currentLang={currentLang}
      />

      <MobileStickyBar
        siteData={siteData}
        strings={strings}
        currentLang={currentLang}
        cartItems={cartItems}
      />
    </div>
  );
}

