export type Diet = "vegetarian" | "vegan" | "eggs" | "omnivore";
export type Appliance = "stove" | "oven" | "air fryer" | "microwave";
export type Unit = "g" | "ml" | "pc";
export type Ingredient = { name: string; amount: number; unit: Unit; category: string };
export type Recipe = { id: string; name: string; note: string; diet: Diet; appliances: Appliance[]; ingredients: Ingredient[]; season?: string[]; minutes: number };
export type Profile = { people: number; diet: Diet; avoid: string; appliances: Appliance[]; favourites: string; city: string; month: number; pantry: string; home: string };
export type ListItem = Ingredient & { source: string; id: string; checked: boolean };

const i = (name: string, amount: number, unit: Unit, category: string): Ingredient => ({ name, amount, unit, category });
export const RECIPES: Recipe[] = [
  { id:"poha", name:"Peanut poha", note:"A quick, bright breakfast-for-dinner option", diet:"vegan", appliances:["stove"], minutes:20, ingredients:[i("Poha",80,"g","Pantry"),i("Peanuts",25,"g","Pantry"),i("Onion",60,"g","Produce"),i("Lemon",0.5,"pc","Produce")] },
  { id:"chana", name:"Chana masala & rice", note:"Batch-friendly comfort food", diet:"vegan", appliances:["stove"], minutes:35, ingredients:[i("Chickpeas",90,"g","Pantry"),i("Rice",80,"g","Pantry"),i("Tomato",100,"g","Produce"),i("Onion",60,"g","Produce")] },
  { id:"paneer", name:"Paneer bhurji & roti", note:"Protein-rich weeknight favourite", diet:"vegetarian", appliances:["stove"], minutes:25, ingredients:[i("Paneer",120,"g","Dairy & eggs"),i("Atta",100,"g","Pantry"),i("Tomato",80,"g","Produce"),i("Onion",60,"g","Produce")] },
  { id:"dal", name:"Moong dal khichdi", note:"A gentle one-pot dinner", diet:"vegan", appliances:["stove"], minutes:30, ingredients:[i("Moong dal",80,"g","Pantry"),i("Rice",75,"g","Pantry"),i("Carrot",70,"g","Produce"),i("Cumin",3,"g","Pantry")] },
  { id:"pasta", name:"Roasted tomato pasta", note:"An easy dinner with a little indulgence", diet:"vegetarian", appliances:["stove","oven"], minutes:30, ingredients:[i("Pasta",100,"g","Pantry"),i("Tomato",180,"g","Produce"),i("Cheese",35,"g","Dairy & eggs"),i("Garlic",10,"g","Produce")] },
  { id:"egg", name:"Masala egg wraps", note:"Fast and filling", diet:"eggs", appliances:["stove"], minutes:20, ingredients:[i("Eggs",2,"pc","Dairy & eggs"),i("Atta",90,"g","Pantry"),i("Onion",50,"g","Produce"),i("Tomato",60,"g","Produce")] },
  { id:"chicken", name:"Chicken rice bowls", note:"Simple prep, generous leftovers", diet:"omnivore", appliances:["stove"], minutes:35, ingredients:[i("Chicken",150,"g","Protein"),i("Rice",85,"g","Pantry"),i("Cucumber",80,"g","Produce"),i("Curd",60,"g","Dairy & eggs")] },
  { id:"palak", name:"Palak tofu & rice", note:"Greens meet a creamy sauce", diet:"vegan", appliances:["stove"], season:["winter"], minutes:30, ingredients:[i("Spinach",150,"g","Produce"),i("Tofu",120,"g","Protein"),i("Rice",80,"g","Pantry"),i("Garlic",10,"g","Produce")] },
  { id:"pumpkin", name:"Pumpkin dal", note:"Seasonal and satisfying", diet:"vegan", appliances:["stove"], season:["monsoon","winter"], minutes:35, ingredients:[i("Pumpkin",140,"g","Produce"),i("Toor dal",80,"g","Pantry"),i("Rice",75,"g","Pantry")] },
  { id:"mango", name:"Mango chickpea salad", note:"Fresh, light and vibrant", diet:"vegan", appliances:["stove"], season:["summer"], minutes:20, ingredients:[i("Mango",100,"g","Produce"),i("Chickpeas",90,"g","Pantry"),i("Cucumber",90,"g","Produce"),i("Lemon",0.5,"pc","Produce")] },
  { id:"airtofu", name:"Air-fryer tofu bowls", note:"Crisp edges, minimal effort", diet:"vegan", appliances:["air fryer"], minutes:25, ingredients:[i("Tofu",150,"g","Protein"),i("Rice",80,"g","Pantry"),i("Carrot",90,"g","Produce"),i("Lemon",0.5,"pc","Produce")] },
];

export const DEFAULT_PROFILE: Profile = { people:2, diet:"vegetarian", avoid:"", appliances:["stove"], favourites:"paneer, dal", city:"Bengaluru", month:new Date().getMonth()+1, pantry:"Rice: 300 g\nAtta: 200 g", home:"Dish soap: 1 pc\nLaundry detergent: 1 pc" };
export function seasonFor(month: number, city: string) {
  const m = Number(month);
  if (/bengaluru|hyderabad|mumbai|delhi|india/i.test(city)) return m>=3&&m<=6 ? "summer" : m>=7&&m<=9 ? "monsoon" : "winter";
  return m>=4&&m<=9 ? "summer" : "winter";
}
const rank: Record<Diet,number> = { vegan:0, vegetarian:1, eggs:2, omnivore:3 };
export function parseLines(raw: string): Ingredient[] {
  return raw.split("\n").map(line=>line.trim()).filter(Boolean).map(line=>{
    const [name, quantity=""] = line.split(":");
    const match = quantity.trim().match(/^(\d+(?:\.\d+)?)\s*(g|kg|ml|l|pc)?$/i);
    const unit = (match?.[2]||"pc").toLowerCase();
    const factor = unit==="kg"||unit==="l" ? 1000 : 1;
    return i(name.trim(),match?Number(match[1])*factor:1,unit==="kg"?"g":unit==="l"?"ml":unit as Unit,"Home essentials");
  }).filter(x=>x.name);
}
export function makePlan(profile: Profile): { meals: Recipe[]; items: ListItem[]; season: string; rejected: number } {
  const season=seasonFor(profile.month,profile.city);
  const avoid=profile.avoid.toLowerCase().split(",").map(x=>x.trim()).filter(Boolean);
  const allowed=RECIPES.filter(r=>rank[r.diet]<=rank[profile.diet] && r.appliances.every(a=>profile.appliances.includes(a)) && !r.ingredients.some(x=>avoid.some(term=>x.name.toLowerCase().includes(term))));
  const fav=profile.favourites.toLowerCase().split(",").map(x=>x.trim()).filter(Boolean);
  const scored=[...allowed].sort((a,b)=>{
    const score=(r:Recipe)=>(r.season?.includes(season)?3:0)+(fav.some(f=>r.name.toLowerCase().includes(f))?5:0);
    return score(b)-score(a)||RECIPES.indexOf(a)-RECIPES.indexOf(b);
  });
  const meals=Array.from({length:7},(_,day)=>scored[day%scored.length]).filter((x):x is Recipe=>Boolean(x));
  const stock=parseLines(profile.pantry);
  const quantities=new Map<string,ListItem>();
  meals.forEach(r=>r.ingredients.forEach(ingredient=>{
    const key=ingredient.name.toLowerCase()+"|"+ingredient.unit;
    const existing=quantities.get(key);
    if(existing){existing.amount+=ingredient.amount*profile.people;existing.source+=`, ${r.name}`;}
    else quantities.set(key,{...ingredient,amount:ingredient.amount*profile.people,id:key,source:r.name,checked:false});
  }));
  const items=[...quantities.values()].map(item=>{
    const onHand=stock.filter(s=>s.name.toLowerCase()===item.name.toLowerCase()&&s.unit===item.unit).reduce((sum,s)=>sum+s.amount,0);
    return {...item,amount:Math.max(0,Math.ceil(item.amount-onHand))};
  }).filter(item=>item.amount>0);
  for(const essential of parseLines(profile.home)) items.push({...essential,id:"home|"+essential.name.toLowerCase(),source:"Household refill",checked:false});
  return {meals,items,season,rejected:RECIPES.length-allowed.length};
}
