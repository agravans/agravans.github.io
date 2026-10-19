# Superhome — product plan and integration path

## What works in the portfolio demo

Open `/superhome`. Set household size, diet, excluded ingredients, appliances, favourites, city/month, pantry quantities and home essentials. Build a seven-day dinner plan. The curated recipe engine filters diets and equipment, prioritizes favourite and seasonal meals, scales ingredients, aggregates duplicates, subtracts pantry stock, and returns an editable shopping checklist. Copy or download the remaining items. Preferences are saved in the browser.

This is a product prototype with illustrative recipes. It does not check package allergens, nutrition, local produce stock, retailer catalog, prices, delivery eligibility, or place orders. Retailer buttons open a search for the first unchecked item; copying the full list is the manual handoff.

## Product direction

1. **Household truth:** individual diets and allergens, disliked foods, recurring meals, equipment, budget, meal slots, pantry quantities, spoilage dates, household consumables and shared editing.
2. **Planning:** recipes with structured ingredient quantities, verified dietary tags and substitutions. Optimize variety, time, leftovers, price and waste. Seasonality should be city-level and based on real availability, not month alone.
3. **Shopping:** normalize the list into purchasable units, map ingredients to retailer products, compare availability, pack size, total including fees, expiry and substitutions. Show every mapping and allow changes.
4. **Commerce:** connect one retailer at a time through its authorized API. Draft a cart, refresh prices and stock, preview address/payment/substitutions and require an explicit final confirmation for each purchase. Handle partial failures and idempotency; retain receipts and order status.
5. **Home:** refill intervals for cleaning and care supplies, optional smart appliance signals with consent and manual fallback. Prioritize consumption data over speculative appliance integration.

## Integration feasibility (checked October 2026)

- **Swiggy Instamart:** Builders Club documents a developer quickstart and Instamart MCP tools for product search, cart updates, payment options, checkout and tracking. Local development can begin without production approval; staging/production needs the published access flow. Start with a standalone server-side adapter and OAuth, then test catalog mapping and cart preview in local development. https://mcp.swiggy.com/builders/docs/start/developer/ and https://mcp.swiggy.com/builders/docs/reference/instamart/
- **Amazon:** Alexa Shopping Actions document add-to-cart for Alexa skills using an ASIN and customer confirmation. This is not a general web-app Amazon Fresh bulk checkout API. Keep the web demo at search handoff pending an applicable partner agreement. https://developer.amazon.com/en-IN/docs/alexa/alexa-shopping/implement-shopping-actions.html
- **Blinkit and Zepto:** No public consumer-order integration was established in this research. Request official partner access before promising cart sync or checkout; keep search handoff meanwhile.

## Pilot and measurement

Start with 10 households over four weeks. Measure minutes to produce an acceptable plan, list edit rate, missing/unused items, quantity errors, repeat use, and retailer mapping acceptance. Target one correct, useful grocery list before extending to appliance connections or unattended replenishment. Keep purchase confirmation in the user interface.
