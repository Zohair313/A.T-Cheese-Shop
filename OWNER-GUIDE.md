# Shop Owner's Guide — A.T Cheese Shop

Welcome! This guide is written specially for you, the owner of **A.T Cheese Shop** in Block 6, Gulshan-e-Iqbal, Karachi. 
It uses simple, everyday language without technical terms so you can understand how your new website works, how orders arrive on your WhatsApp, and how to update prices and items.

---

## 1. What This Website Does for Your Shop

Until now, your shop was only found as a listing on Google Maps. Customers had to call you or visit your shop just to ask what items you had in stock and what the prices were.

**This website changes that by acting as your 24-hour wholesale order desk:**
- Commercial buyers (burger shops, pizza places, bakeries, caterers) can open the site on their phones at any time of day or night.
- They see exactly what you sell: cheddar burger slices, mozzarella blocks, cream cheese, and butter.
- They choose the pack sizes they need, set the quantity, and press one button.
- Their complete order arrives directly in your WhatsApp, neatly written out with their name, phone number, delivery area, items, and estimated bill.
- You do not need to deal with confusing logins, passwords, or complicated credit card software. Everything happens right on your familiar WhatsApp number: `+92 300 3394494`.

---

## 2. What Each Part of the Website is For (From Top to Bottom)

When you or your customers scroll down the page, here is what you will see:

1. **Top Bar & Phone Number:** Shows that your wholesale depot is open in Block 6 Gulshan, with direct links to call your phone or message your WhatsApp with one tap.
2. **Main Header:** Displays your shop name ("A.T Cheese Shop") and a language button. Clicking this button immediately switches the entire page between English and Urdu.
3. **Hero Introduction:** Explains right away that you specialize in bulk cheese supplies for Karachi restaurants and commercial kitchens, highlighting your 4.5-star Google rating and your 5 kg citywide delivery policy.
4. **Product Catalog:** Lists your products (Cheddar Slices, Mozzarella Blocks, Bakery Cream Cheese, and Bulk Butter). Each item shows what it is best used for (like smash burgers or pizza crusts), lets the customer pick a pack size (for example, 1 kg, 2.5 kg, or a 10 kg carton), and has a button to add it to their order.
5. **Wholesale Order Slip:** This is where the customer's selected items appear. They can increase or decrease quantities, see their estimated bill in Rupees, choose whether they want to pick up the cheese from your shop or have it delivered to their area in Karachi, and enter their name and phone number.
6. **Commercial Supply Terms:** Clearly states your rules so customers do not waste your time asking basic questions: minimum order for delivery (5 kg), walk-in single pack pickup at your Gulshan shop, commercial discounts for weekly regular buyers, and sample pack requests.
7. **Storage & Handling Guide:** Practical advice for chefs and kitchen staff on the right temperatures to store cheese (2°C to 4°C) so it stays fresh and does not spoil.
8. **Customer Rating & Reviews:** Proudly displays your genuine 4.5-star rating from 68 real public Google reviews. We do not show made-up customer quotes; only real feedback from your actual buyers will go here.
9. **Frequently Asked Questions (FAQ):** Answers the 6 most common questions buyers ask about payments, delivery riders, shelf life, and sample testing.
10. **Depot Location & Map:** An interactive Google Map showing your address in Block 6, Gulshan-e-Iqbal, your shop opening hours (Monday to Saturday, 10 AM to 9 PM), and a button that opens driving directions.
11. **Mobile Bottom Bar:** On mobile phones, a handy bar stays at the bottom of the screen showing how many items are in the order slip, the bill total, and fast buttons to Call or WhatsApp you immediately.

---

## 3. How a Customer Places an Order & What You Receive on WhatsApp

Ordering is as simple as sending a normal message:

1. The customer selects the cheese items they want on the website.
2. They type their name, their phone number, and choose their area in Karachi (e.g. Gulshan, Clifton, PECHS, Nazimabad).
3. They tap the green button: **"Send Order on WhatsApp"**.
4. WhatsApp automatically opens on their phone with a clean message already typed out. They just press send!

### The Exact Message You Will Receive on Your WhatsApp

Here is an example of what will pop up on your phone when an English-speaking customer orders:

```text
*WHOLESALE ORDER INQUIRY — A.T CHEESE SHOP*
-----------------------------------
*Customer / Business:* Tariq Burger Point
*Contact Phone:* 0300 1234567
*Fulfillment:* Karachi City Delivery
*Delivery Sector:* Gulshan-e-Iqbal & Gulistan-e-Jauhar
-----------------------------------
*ORDER ITEMS:*
1. Commercial Cheddar Slices (1 kg Pack (~84 Slices)) x 3 = PKR 6,600
2. Whole Milk Mozzarella Block (2.5 kg Solid Block) x 2 = PKR 9,400
-----------------------------------
*ESTIMATED TOTAL:* PKR 16,000
*(Subject to scale verification and dispatch terms)*
-----------------------------------
*Notes / Requirements:* Urgent morning delivery before 12 PM please
```

And if an Urdu-speaking customer orders, you will receive it in clean Urdu:

```text
*تھوک آرڈر تفصیلات — اے ٹی چیز شاپ*
-----------------------------------
*گاہک / کاروبار:* طارق برگر پوائنٹ
*رابطہ فون:* 03001234567
*ترسیل کی نوعیت:* کراچی میں ڈلیوری
*علاقہ:* گلشن اقبال اور گلستان جوہر
-----------------------------------
*آرڈر آئٹمز:*
1. کمرشل چیڈر چیز سلائسز (1 کلو پیک (تقریباً 84 سلائسز)) × 3 = PKR 6,600
2. ہول ملک موزارِیلا بلاک (2.5 کلو ٹھوس بلاک) × 2 = PKR 9,400
-----------------------------------
*تخمینی کل رقم:* PKR 16,000
_(حتمی وزن اور ترسیل چارجز تصدیق کے تابع ہیں)_
-----------------------------------
*خصوصی ہدایات:* دوپہر 12 بجے سے پہلے ڈلیور کر دیں
```

### How to Reply to the Customer
All you need to do is reply on WhatsApp like you normally do:
1. Confirm you have the stock ready in your chiller.
2. Tell them the final scale weight and the delivery rider fee for their area.
3. Share your bank account / Raast ID for transfer or confirm Cash on Delivery (COD).

---

## 4. What You Can Change Yourself, Step by Step

All your shop information, prices, and products are stored in a single easy file called `site-data.json` inside the `data` folder. You can open this file using Notepad on any computer.

### Changing a Price:
1. Open the file `data/site-data.json` in Notepad.
2. Find the product you want to change (for example, `"pricePkr": 2200`).
3. Type your new price, for example `2350`.
4. Save the file. That’s it!

### Changing Your Phone or WhatsApp Number:
Look for this section near the top:
```json
"phoneDisplay": "+92 300 3394494",
"phoneRaw": "+923003394494",
"whatsappRaw": "923003394494"
```
Change the digits to your new number, save the file, and all buttons on the website will instantly route to your new phone.

### Changing Shop Hours or Delivery Areas:
Scroll to the `"hours"` or `"deliveryAreas"` section in that same file and edit the text.

> [!TIP]
> If you are not comfortable opening files on a computer, simply send your updated price list to your website developer on WhatsApp and they will update it for you in under two minutes!

---

## 5. About the Pictures on the Website

The product pictures currently on the website are clean computer-generated illustrations designed to look like real commercial cheese packs and kitchen countertops.

**What you should do:**
- **These are placeholders.** They look neat and professional, but customers love seeing your real shop and your real stock!
- We strongly recommend replacing them with genuine photos taken inside your Gulshan-e-Iqbal shop.
- **How to take good photos with your phone:**
  1. Wipe your phone camera lens so the picture is clear.
  2. Put clean butter paper on your counter and stack your cheddar slices or place a cut mozzarella block on it.
  3. Take the picture during the daytime with good lights on.
  4. Do not use strange filters or heavy edits. Keep it natural.
  5. Send the original full-quality photos to your developer via WhatsApp as a "Document" so WhatsApp does not reduce the quality.

---

## 6. Works Smoothly on Phones and Computers

Over 85% of restaurant managers and chefs in Karachi will visit your website using their mobile phones.

We specifically built this website so:
- It opens very fast even on slow mobile internet connections in Karachi.
- All buttons and plus/minus steppers are big enough to tap comfortably with one thumb.
- The order slip stays easily reachable at the bottom of the screen.
- It looks equally sharp on iPhones, Samsung, Xiaomi, and laptop screens.
- It switches effortlessly between English and Urdu with one tap.

---

## 7. What We Need From You (Checklist)

To make your website 100% complete and official, please confirm these details with us:

- [ ] **Exact Wholesale Prices:** Check the PKR prices listed for 1 kg cheddar slices, 2 kg mozzarella blocks, and cream cheese tubs and tell us your exact current selling rates.
- [ ] **Real Pack Sizes:** Confirm if you sell 1 kg, 2 kg, 2.5 kg, or 10 kg cartons.
- [ ] **Minimum Delivery Weight:** Is 5 kg the correct minimum order for delivery across Karachi, or do you have a different minimum?
- [ ] **Shop Operating Hours:** Confirm your exact opening and closing times (e.g. 10:00 AM to 9:00 PM) and whether you are closed on Sundays.
- [ ] **Real Customer Reviews:** If you have favorite reviews from long-time restaurant clients, share them so we can feature their quotes.
- [ ] **Real Shop Photos:** Photos of your shop signboard, walk-in chiller, and real dairy packs.

---

## 8. Common Questions Shop Owners Ask

**Q: How much does it cost each month to keep this website running?**  
**A:** Very little! Because this website is built with clean, modern code and does not require expensive servers or paid database software, it can be hosted for completely free on modern services like Cloudflare Pages or Vercel, or for a few hundred rupees a month on standard local web hosting.

**Q: Do I need to buy a dot-pk domain name?**  
**A:** Yes, registering a name like `atcheeseshop.pk` or `atcheese.pk` makes your business look professional and credible. Domains ending in `.pk` are registered for 2 years through PKNIC for a nominal fee.

**Q: What if I run out of an item (like Mozzarella)?**  
**A:** You can message your developer to mark it "Out of Stock", or simply tell the customer on WhatsApp when their order arrives: *"Mozzarella is arriving in the evening chiller batch, would you like cheddar slices delivered first?"*

**Q: How does this help me show up on Google search in Karachi?**  
**A:** We have embedded special business location code (LocalBusiness Schema) into your website that links directly to your Gulshan-e-Iqbal Block 6 address and your 4.5-star rating. When chefs search for *"bulk cheese supplier Karachi"* or *"cheddar slices Gulshan"*, Google recognizes your website as a verified local business.

