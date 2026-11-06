# Generate SVG Placeholders and Favicon for A.T Cheese Shop
import os

images = {
    "favicon.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="#D97706"/>
  <path d="M12 44 L52 44 L44 20 L20 20 Z" fill="#FDE68A" stroke="#B45309" stroke-width="2"/>
  <circle cx="28" cy="32" r="4" fill="#D97706" opacity="0.4"/>
  <circle cx="38" cy="28" r="3" fill="#D97706" opacity="0.4"/>
  <circle cx="36" cy="38" r="3" fill="#D97706" opacity="0.4"/>
  <text x="32" y="56" font-family="Arial, sans-serif" font-weight="900" font-size="11" fill="#191E1C" text-anchor="middle" letter-spacing="1">A.T CHEESE</text>
</svg>''',

    "cheddar-slices-stack.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="steelBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2E8E5"/>
      <stop offset="50%" stop-color="#CCD5D0"/>
      <stop offset="100%" stop-color="#B6C1BB"/>
    </linearGradient>
    <linearGradient id="cheddarGold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#E58E1B"/>
      <stop offset="50%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
    <pattern id="brushed" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M0 20 L40 20 M0 10 L40 10 M0 30 L40 30" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>
    </pattern>
  </defs>
  <!-- Background Countertop -->
  <rect width="800" height="600" fill="url(#steelBg)"/>
  <rect width="800" height="600" fill="url(#brushed)"/>
  
  <!-- Counter shadow -->
  <ellipse cx="400" cy="460" rx="260" ry="40" fill="rgba(25,30,28,0.25)"/>

  <!-- Stacked Slices with Interleaf Paper -->
  <g transform="translate(180, 180)">
    <!-- Base Paper & Lower Slices (Repeated stacked illusion) -->
    <rect x="30" y="210" width="400" height="18" rx="2" fill="#D97706" stroke="#B45309"/>
    <rect x="25" y="206" width="410" height="4" fill="#FFFDF5" opacity="0.9"/>
    
    <rect x="32" y="188" width="396" height="18" rx="2" fill="#E58E1B" stroke="#B45309"/>
    <rect x="28" y="184" width="404" height="4" fill="#FFFDF5" opacity="0.9"/>

    <rect x="30" y="166" width="400" height="18" rx="2" fill="#D97706" stroke="#B45309"/>
    <rect x="26" y="162" width="408" height="4" fill="#FFFDF5" opacity="0.9"/>

    <rect x="34" y="144" width="392" height="18" rx="2" fill="#E58E1B" stroke="#B45309"/>
    <rect x="30" y="140" width="400" height="4" fill="#FFFDF5" opacity="0.9"/>

    <rect x="30" y="122" width="400" height="18" rx="2" fill="#D97706" stroke="#B45309"/>
    <rect x="26" y="118" width="408" height="4" fill="#FFFDF5" opacity="0.9"/>

    <rect x="32" y="100" width="396" height="18" rx="2" fill="#F59E0B" stroke="#B45309"/>
    <rect x="28" y="96" width="404" height="4" fill="#FFFDF5" opacity="0.9"/>

    <rect x="30" y="78" width="400" height="18" rx="2" fill="#E58E1B" stroke="#B45309"/>
    <rect x="25" y="74" width="410" height="4" fill="#FFFDF5" opacity="0.9"/>

    <!-- Top Slice Angled slightly -->
    <g transform="rotate(-2 230 50)">
      <rect x="30" y="40" width="400" height="24" rx="3" fill="url(#cheddarGold)" stroke="#B45309" stroke-width="1.5"/>
      <polygon points="30,40 430,40 450,15 50,15" fill="#FDE68A" stroke="#B45309" stroke-width="1"/>
      <polygon points="430,40 430,64 450,39 450,15" fill="#D97706"/>
      <!-- Interleaf parchment paper corner sticking out -->
      <polygon points="360,10 460,10 440,55 350,45" fill="#FFFDF0" opacity="0.85" stroke="#E5E7EB"/>
    </g>
  </g>

  <!-- Technical Spec Badge Overlay -->
  <g transform="translate(48, 48)">
    <rect width="260" height="64" rx="6" fill="#191E1C" fill-opacity="0.92"/>
    <text x="16" y="26" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#F59E0B">COMMERCIAL CHEDDAR SLICES</text>
    <text x="16" y="48" font-family="system-ui, sans-serif" font-size="12" fill="#E3E8E5">Interleaf Parchment • ~84 Slices/kg</text>
  </g>
  <text x="750" y="570" font-family="system-ui, sans-serif" font-size="12" fill="#444E49" text-anchor="end">Photo Brief: Canon EOS R6 50mm f/1.8 • A.T Cheese Shop</text>
</svg>''',

    "mozzarella-block-cut.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="boardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EAEFEA"/>
      <stop offset="100%" stop-color="#D2DDD6"/>
    </linearGradient>
    <linearGradient id="blockShade" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="40%" stop-color="#FBF8EE"/>
      <stop offset="100%" stop-color="#E8E0CE"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#boardBg)"/>
  
  <!-- Food grade cutting board -->
  <rect x="80" y="80" width="640" height="440" rx="12" fill="#F4F8F5" stroke="#CCD5D0" stroke-width="2"/>
  <ellipse cx="400" cy="420" rx="280" ry="35" fill="rgba(25,30,28,0.18)"/>

  <!-- Solid Mozzarella Halved Block -->
  <!-- Left Cut Half Leaning -->
  <g transform="translate(160, 160)">
    <!-- Back block section -->
    <path d="M 60 180 L 220 180 L 320 80 L 160 80 Z" fill="#F5EFE1" stroke="#D1C7B3"/>
    <path d="M 60 180 L 220 180 L 220 280 L 60 280 Z" fill="#FCFAF2" stroke="#D1C7B3"/>
    <path d="M 220 180 L 320 80 L 320 180 L 220 280 Z" fill="#E5DDCC" stroke="#D1C7B3"/>
    
    <!-- Right clean slice standing -->
    <path d="M 280 200 L 440 200 L 480 120 L 320 120 Z" fill="#FCFAF2" stroke="#D1C7B3"/>
    <path d="M 280 200 L 440 200 L 440 310 L 280 310 Z" fill="url(#blockShade)" stroke="#D1C7B3" stroke-width="1.5"/>
    <path d="M 440 200 L 480 120 L 480 230 L 440 310 Z" fill="#DDD4C0" stroke="#D1C7B3"/>

    <!-- Curd moisture beads & texture -->
    <circle cx="340" cy="240" r="3" fill="#C4B79C" opacity="0.4"/>
    <circle cx="390" cy="270" r="2.5" fill="#C4B79C" opacity="0.4"/>
    <circle cx="310" cy="280" r="3" fill="#C4B79C" opacity="0.4"/>
    <path d="M 330 220 Q 360 230 380 225" stroke="#C4B79C" stroke-width="1" fill="none" opacity="0.5"/>
  </g>

  <!-- Commercial Knife silhouette on board -->
  <g transform="translate(130, 410) rotate(-12)">
    <polygon points="0,15 160,10 180,20 160,30 0,25" fill="#B6C1BB" stroke="#717E77"/>
    <rect x="-80" y="14" width="80" height="12" rx="3" fill="#29302D"/>
  </g>

  <!-- Technical Spec Badge Overlay -->
  <g transform="translate(48, 48)">
    <rect width="270" height="64" rx="6" fill="#191E1C" fill-opacity="0.92"/>
    <text x="16" y="26" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#F59E0B">WHOLE MILK MOZZARELLA</text>
    <text x="16" y="48" font-family="system-ui, sans-serif" font-size="12" fill="#E3E8E5">Low-Moisture Block • 2.0kg / 2.5kg</text>
  </g>
  <text x="750" y="570" font-family="system-ui, sans-serif" font-size="12" fill="#444E49" text-anchor="end">Photo Brief: Canon EOS R6 50mm f/1.8 • A.T Cheese Shop</text>
</svg>''',

    "cream-cheese-steel-tub.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="chillerBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#DDE4E0"/>
      <stop offset="100%" stop-color="#BAC5C0"/>
    </linearGradient>
    <linearGradient id="metalTub" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#717E77"/>
      <stop offset="25%" stop-color="#CBD3CE"/>
      <stop offset="75%" stop-color="#9BA8A1"/>
      <stop offset="100%" stop-color="#5B6862"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#chillerBg)"/>
  <ellipse cx="400" cy="460" rx="270" ry="35" fill="rgba(25,30,28,0.2)"/>

  <!-- Gastronorm Stainless Steel Pan -->
  <g transform="translate(180, 160)">
    <!-- Outer Metal Pan Rim -->
    <rect x="0" y="0" width="440" height="280" rx="16" fill="url(#metalTub)" stroke="#444E49" stroke-width="2"/>
    <rect x="18" y="18" width="404" height="244" rx="8" fill="#FFFFFF"/>
    
    <!-- Rich Matte Cream Cheese Filling -->
    <rect x="22" y="22" width="396" height="236" rx="6" fill="#FDFBF7"/>
    
    <!-- Scoop / Spatula Mark Swirl -->
    <path d="M 60 120 C 140 80, 220 180, 340 100 C 370 80, 390 140, 350 180 C 260 250, 120 180, 60 120 Z" 
          fill="#F5EFE3" stroke="#E2D7C3" stroke-width="2"/>
    
    <!-- Spatula tool lying across corner -->
    <g transform="translate(280, 40) rotate(35)">
      <polygon points="0,0 180,5 175,25 0,20" fill="#CCD5D0" stroke="#717E77"/>
      <rect x="-80" y="3" width="80" height="14" rx="2" fill="#29302D"/>
    </g>
  </g>

  <!-- Technical Spec Badge Overlay -->
  <g transform="translate(48, 48)">
    <rect width="280" height="64" rx="6" fill="#191E1C" fill-opacity="0.92"/>
    <text x="16" y="26" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#F59E0B">COMMERCIAL CREAM CHEESE</text>
    <text x="16" y="48" font-family="system-ui, sans-serif" font-size="12" fill="#E3E8E5">Dense Bakery Tub • 1kg / 2kg / 5kg</text>
  </g>
  <text x="750" y="570" font-family="system-ui, sans-serif" font-size="12" fill="#444E49" text-anchor="end">Photo Brief: Canon EOS R6 50mm f/1.8 • A.T Cheese Shop</text>
</svg>''',

    "dairy-assortment-counter.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <linearGradient id="prepBench" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#CBD5D0"/>
      <stop offset="60%" stop-color="#A8B5AE"/>
      <stop offset="100%" stop-color="#8E9C95"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#prepBench)"/>
  
  <!-- Counter shadow bench line -->
  <rect x="0" y="520" width="1200" height="155" fill="#69766F"/>
  <line x1="0" y1="520" x2="1200" y2="520" stroke="#E3E8E5" stroke-width="3"/>

  <!-- Left: Cheddar stack -->
  <g transform="translate(100, 240)">
    <rect x="0" y="160" width="220" height="110" rx="4" fill="#D97706" stroke="#92400E"/>
    <rect x="-10" y="150" width="240" height="6" fill="#FFFDF0"/>
    <rect x="5" y="110" width="210" height="40" rx="3" fill="#F59E0B" stroke="#92400E"/>
    <text x="110" y="225" font-family="system-ui, sans-serif" font-weight="700" font-size="14" fill="#FFFFFF" text-anchor="middle">CHEDDAR BURGER SLICES</text>
  </g>

  <!-- Center: Mozzarella Vacuum Block -->
  <g transform="translate(390, 210)">
    <rect x="0" y="100" width="360" height="170" rx="8" fill="#FDFBF7" stroke="#CBD3CE" stroke-width="2"/>
    <path d="M 0 100 L 360 100 L 340 70 L 20 70 Z" fill="#F4EFE1"/>
    <!-- Sealed plastic bag edges -->
    <rect x="-15" y="90" width="15" height="185" fill="#E2E8E5" opacity="0.6"/>
    <rect x="360" y="90" width="15" height="185" fill="#E2E8E5" opacity="0.6"/>
    <text x="180" y="195" font-family="system-ui, sans-serif" font-weight="700" font-size="16" fill="#29302D" text-anchor="middle">MOZZARELLA 2.5 KG BLOCK</text>
    <text x="180" y="225" font-family="system-ui, sans-serif" font-size="13" fill="#717E77" text-anchor="middle">Low-Moisture Whole Milk</text>
  </g>

  <!-- Right: Cream cheese & Butter Tub -->
  <g transform="translate(830, 260)">
    <ellipse cx="140" cy="180" rx="140" ry="60" fill="#FFFFFF" stroke="#CBD3CE" stroke-width="2"/>
    <ellipse cx="140" cy="160" rx="130" ry="50" fill="#F5EFE3"/>
    <rect x="0" y="120" width="280" height="50" fill="#FFFFFF" stroke="#CBD3CE"/>
    <text x="140" y="150" font-family="system-ui, sans-serif" font-weight="700" font-size="14" fill="#29302D" text-anchor="middle">BAKERY CREAM CHEESE</text>
  </g>

  <!-- Banner overlay -->
  <g transform="translate(60, 50)">
    <rect width="360" height="74" rx="8" fill="#191E1C" fill-opacity="0.92"/>
    <text x="20" y="30" font-family="system-ui, sans-serif" font-weight="700" font-size="15" fill="#F59E0B">A.T CHEESE SHOP DEPOT</text>
    <text x="20" y="55" font-family="system-ui, sans-serif" font-size="13" fill="#E3E8E5">Commercial Dairy & Bulk Cheese Inventory</text>
  </g>
</svg>''',

    "cheese-weighed-scale.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <rect width="800" height="600" fill="#DDE4E0"/>
  <ellipse cx="400" cy="480" rx="280" ry="40" fill="rgba(25,30,28,0.2)"/>

  <!-- Digital Platform Scale Body -->
  <g transform="translate(200, 250)">
    <rect x="0" y="120" width="400" height="120" rx="12" fill="#29302D" stroke="#191E1C" stroke-width="3"/>
    
    <!-- Digital display window -->
    <rect x="110" y="160" width="180" height="50" rx="6" fill="#065F46" stroke="#0D7355"/>
    <text x="200" y="196" font-family="monospace" font-weight="900" font-size="28" fill="#34D399" text-anchor="middle">5.025 kg</text>
    
    <!-- Top stainless platform -->
    <rect x="-30" y="80" width="460" height="40" rx="6" fill="#CCD5D0" stroke="#717E77" stroke-width="2"/>
    
    <!-- Tare Bowl with Shredded Cheese -->
    <ellipse cx="200" cy="80" rx="180" ry="45" fill="#B6C1BB" stroke="#717E77"/>
    <!-- Mound of shredded mozzarella/cheddar -->
    <path d="M 60 70 Q 200 -30 340 70 Q 200 110 60 70 Z" fill="#FDE68A" stroke="#D97706" stroke-width="2"/>
    <!-- Shred markings -->
    <line x1="120" y1="40" x2="160" y2="60" stroke="#D97706" stroke-width="3"/>
    <line x1="200" y1="20" x2="230" y2="50" stroke="#FFFFFF" stroke-width="3"/>
    <line x1="250" y1="30" x2="290" y2="55" stroke="#D97706" stroke-width="3"/>
    <line x1="150" y1="25" x2="190" y2="45" stroke="#FFFFFF" stroke-width="3"/>
  </g>

  <!-- Technical Spec Badge Overlay -->
  <g transform="translate(48, 48)">
    <rect width="280" height="64" rx="6" fill="#191E1C" fill-opacity="0.92"/>
    <text x="16" y="26" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#F59E0B">PRECISION BULK PORTIONS</text>
    <text x="16" y="48" font-family="system-ui, sans-serif" font-size="12" fill="#E3E8E5">Commercial Kitchen Weight Verification</text>
  </g>
</svg>''',

    "baked-pizza-burger-melt.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <rect width="1200" height="675" fill="#201C19"/>

  <!-- Left: Hot Pan Pizza Slice with browned spots -->
  <g transform="translate(80, 80)">
    <polygon points="120,480 480,480 320,120" fill="#E8B878" stroke="#92400E" stroke-width="3"/>
    <!-- Pizza Cheese Layer -->
    <polygon points="140,460 460,460 320,150" fill="#FCFAF2"/>
    <!-- Browned Blister Spots -->
    <circle cx="280" cy="300" r="16" fill="#92400E" opacity="0.8"/>
    <circle cx="340" cy="360" r="22" fill="#B45309" opacity="0.75"/>
    <circle cx="250" cy="400" r="14" fill="#92400E" opacity="0.8"/>
    <circle cx="380" cy="410" r="18" fill="#B45309" opacity="0.8"/>
    <text x="300" y="520" font-family="system-ui, sans-serif" font-weight="700" font-size="16" fill="#FDE68A" text-anchor="middle">High-Temp Mozzarella Stretch</text>
  </g>

  <!-- Right: Smash Burger with Dripping Cheddar Slices -->
  <g transform="translate(620, 100)">
    <!-- Top bun -->
    <path d="M 80 240 Q 240 100 400 240 Z" fill="#D97706" stroke="#92400E" stroke-width="2"/>
    <!-- Seared beef patty 1 -->
    <rect x="70" y="240" width="340" height="40" rx="8" fill="#451A03"/>
    <!-- Melted Cheddar Drips -->
    <path d="M 60 270 Q 120 270 140 330 Q 160 270 240 270 Q 280 340 320 270 L 420 270 L 410 295 L 70 295 Z" fill="#F59E0B"/>
    <!-- Seared beef patty 2 -->
    <rect x="70" y="295" width="340" height="40" rx="8" fill="#451A03"/>
    <!-- Second Cheddar Melt -->
    <path d="M 65 330 Q 200 370 230 400 Q 250 340 415 335 L 400 360 L 80 360 Z" fill="#D97706"/>
    <!-- Bottom bun -->
    <path d="M 80 360 L 400 360 Q 400 420 240 420 Q 80 420 80 360 Z" fill="#D97706" stroke="#92400E" stroke-width="2"/>
    <text x="240" y="470" font-family="system-ui, sans-serif" font-weight="700" font-size="16" fill="#FDE68A" text-anchor="middle">Even Burger Cheddar Melt</text>
  </g>

  <!-- Banner overlay -->
  <g transform="translate(60, 40)">
    <rect width="380" height="64" rx="6" fill="#191E1C" fill-opacity="0.92"/>
    <text x="20" y="26" font-family="system-ui, sans-serif" font-weight="700" font-size="14" fill="#F59E0B">COMMERCIAL KITCHEN YIELD</text>
    <text x="20" y="48" font-family="system-ui, sans-serif" font-size="12" fill="#E3E8E5">Tested for Pizza Stretch & Burger Slice Hold</text>
  </g>
</svg>''',

    "cold-storage-packs.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="chillerRacks" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#chillerRacks)"/>

  <!-- Galvanized Wire Shelves -->
  <line x1="40" y1="200" x2="760" y2="200" stroke="#94A3B8" stroke-width="6"/>
  <line x1="40" y1="380" x2="760" y2="380" stroke="#94A3B8" stroke-width="6"/>

  <!-- Wire grid uprights -->
  <line x1="120" y1="80" x2="120" y2="520" stroke="#64748B" stroke-width="4"/>
  <line x1="400" y1="80" x2="400" y2="520" stroke="#64748B" stroke-width="4"/>
  <line x1="680" y1="80" x2="680" y2="520" stroke="#64748B" stroke-width="4"/>

  <!-- Shelf 1 Packs: Vacuum Sealed Mozzarella Blocks -->
  <g transform="translate(150, 100)">
    <rect x="0" y="0" width="100" height="90" rx="4" fill="#F8FAFC" stroke="#CBD5E1"/>
    <rect x="120" y="0" width="100" height="90" rx="4" fill="#F8FAFC" stroke="#CBD5E1"/>
    <rect x="240" y="0" width="100" height="90" rx="4" fill="#F8FAFC" stroke="#CBD5E1"/>
    <rect x="360" y="0" width="100" height="90" rx="4" fill="#F8FAFC" stroke="#CBD5E1"/>
  </g>

  <!-- Shelf 2 Packs: Master Cheddar Slice Cartons -->
  <g transform="translate(150, 260)">
    <rect x="0" y="0" width="140" height="110" rx="4" fill="#D97706" stroke="#B45309"/>
    <rect x="160" y="0" width="140" height="110" rx="4" fill="#D97706" stroke="#B45309"/>
    <rect x="320" y="0" width="140" height="110" rx="4" fill="#D97706" stroke="#B45309"/>
  </g>

  <!-- Cold Vapor Badge -->
  <g transform="translate(48, 48)">
    <rect width="280" height="64" rx="6" fill="#191E1C" fill-opacity="0.95"/>
    <text x="16" y="26" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#34D399">COLD-CHAIN DEPOT (2°C – 4°C)</text>
    <text x="16" y="48" font-family="system-ui, sans-serif" font-size="12" fill="#E3E8E5">Climate-Controlled Bulk Storage</text>
  </g>
</svg>''',

    "bulk-order-box-pickup.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="kraftBox" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#D4A373"/>
      <stop offset="100%" stop-color="#BC8A5F"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="#E2E8E5"/>
  <ellipse cx="400" cy="490" rx="260" ry="35" fill="rgba(25,30,28,0.2)"/>

  <!-- Kraft Dispatch Carton Box -->
  <g transform="translate(220, 180)">
    <!-- Main Box Front -->
    <rect x="0" y="80" width="360" height="220" rx="6" fill="url(#kraftBox)" stroke="#A2673B" stroke-width="2"/>
    
    <!-- Open box flaps -->
    <polygon points="0,80 80,0 280,0 200,80" fill="#E6BA8F" stroke="#A2673B"/>
    <polygon points="360,80 440,0 520,30 360,80" fill="#C59363" stroke="#A2673B"/>
    <polygon points="0,80 -50,30 30,0 0,80" fill="#BC8A5F" stroke="#A2673B"/>

    <!-- Inside the carton: insulated lining & cheese blocks -->
    <rect x="20" y="50" width="320" height="70" fill="#F1F5F9" stroke="#CBD5E1"/>
    <!-- Stacked cheese packages inside -->
    <rect x="40" y="40" width="120" height="50" rx="4" fill="#D97706"/>
    <rect x="180" y="35" width="130" height="55" rx="4" fill="#FDFBF7" stroke="#CBD5E1"/>

    <!-- Marker dispatch slip taped on box -->
    <rect x="50" y="140" width="160" height="90" rx="2" fill="#FFFFFF" stroke="#CBD5E1"/>
    <line x1="65" y1="165" x2="180" y2="165" stroke="#191E1C" stroke-width="3"/>
    <line x1="65" y1="185" x2="160" y2="185" stroke="#191E1C" stroke-width="2"/>
    <line x1="65" y1="205" x2="140" y2="205" stroke="#191E1C" stroke-width="2"/>
  </g>

  <!-- Technical Spec Badge Overlay -->
  <g transform="translate(48, 48)">
    <rect width="280" height="64" rx="6" fill="#191E1C" fill-opacity="0.92"/>
    <text x="16" y="26" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#F59E0B">PACKED DISPATCH CARTON</text>
    <text x="16" y="48" font-family="system-ui, sans-serif" font-size="12" fill="#E3E8E5">Insulated for Karachi City Dispatch</text>
  </g>
</svg>'''
}

for filename, content in images.items():
    if filename == "favicon.svg":
        target_path = os.path.join("assets", filename)
    else:
        target_path = os.path.join("assets", "images", filename)
    with open(target_path, "w", encoding="utf-8") as f:
        f.write(content.strip())
    print(f"Created: {target_path}")

print("All SVG assets successfully built.")

