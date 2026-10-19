import type { ListItem } from "./superhome";

export const RETAILERS = ["Amazon", "Blinkit", "Zepto", "Instamart"] as const;
export type Retailer = typeof RETAILERS[number];
export type Quote = { amount: number; value: number | null };
export type Quotes = Record<string, Partial<Record<Retailer, Quote>>>;
export type Fees = Record<Retailer, number>;
export const SAMPLE_FEES: Fees = { Amazon: 30, Blinkit: 25, Zepto: 20, Instamart: 25 };

// Synthetic demo values per gram, millilitre, or piece. They are not retailer data.
const demoUnits: Record<string, number> = {
  "poha":.09,"peanuts":.18,"onion":.055,"lemon":8,"chickpeas":.13,"rice":.075,
  "tomato":.07,"paneer":.43,"atta":.07,"moong dal":.16,"carrot":.08,"cumin":.7,
  "pasta":.18,"cheese":.55,"garlic":.16,"eggs":8,"chicken":.34,"cucumber":.075,
  "curd":.11,"spinach":.075,"tofu":.35,"pumpkin":.07,"toor dal":.18,"mango":.14,
  "dish soap":110,"laundry detergent":170,
};
const round = (number: number) => Math.round(number * 100) / 100;
export function samplePrice(item: ListItem, retailer: Retailer): number {
  const base = demoUnits[item.name.toLowerCase()] ?? (item.unit === "pc" ? 65 : .12);
  const salt = [...item.name].reduce((sum, letter) => sum + letter.charCodeAt(0), 0);
  const index = RETAILERS.indexOf(retailer);
  const variation = 1 + (((salt + index * 7) % 13) - 6) / 100;
  return round(Math.max(1, base * item.amount * variation));
}
export function priceFor(item: ListItem, retailer: Retailer, quotes: Quotes): number | null {
  const quote = quotes[item.id]?.[retailer];
  if (quote && quote.amount === item.amount) return quote.value;
  return samplePrice(item, retailer);
}
export type Basket = { total: number; subtotal: number; fees: number; assignments: { item: ListItem; retailer: Retailer; price: number }[]; retailers: Retailer[] };
export function compareBaskets(items: ListItem[], quotes: Quotes, fees: Fees): { single: Basket[]; split: Basket | null } {
  if (!items.length) return { single: [], split: null };
  const single = RETAILERS.flatMap(retailer => {
    const rows = items.map(item => ({ item, retailer, price: priceFor(item, retailer, quotes) }));
    if (rows.some(row => row.price === null)) return [];
    const assignments = rows.map(row => ({ item: row.item, retailer, price: row.price as number }));
    const subtotal = round(assignments.reduce((sum, row) => sum + row.price, 0));
    const delivery = Math.max(0, Number(fees[retailer]) || 0);
    return [{ total: round(subtotal + delivery), subtotal, fees: delivery, assignments, retailers: [retailer] }];
  }).sort((a,b) => a.total - b.total);

  // Four retailers yield only 15 nonempty subsets. For each subset, choose the cheapest
  // available quote per item, then charge delivery only for retailers actually used.
  let split: Basket | null = null;
  for (let mask = 1; mask < 1 << RETAILERS.length; mask++) {
    const selected = RETAILERS.filter((_, index) => mask & (1 << index));
    const assignments: Basket["assignments"] = [];
    for (const item of items) {
      const choices = selected.flatMap(retailer => {
        const price = priceFor(item, retailer, quotes);
        return price === null ? [] : [{ item, retailer, price }];
      }).sort((a,b) => a.price - b.price);
      if (!choices.length) break;
      assignments.push(choices[0]);
    }
    if (assignments.length !== items.length) continue;
    const used = RETAILERS.filter(retailer => assignments.some(row => row.retailer === retailer));
    const subtotal = round(assignments.reduce((sum,row) => sum + row.price, 0));
    const delivery = round(used.reduce((sum,retailer) => sum + Math.max(0,Number(fees[retailer]) || 0),0));
    const candidate = { total: round(subtotal + delivery), subtotal, fees: delivery, assignments, retailers: used };
    if (!split || candidate.total < split.total || (candidate.total === split.total && used.length < split.retailers.length)) split = candidate;
  }
  return { single, split };
}
