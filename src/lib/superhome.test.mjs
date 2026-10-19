import assert from "node:assert/strict";
import { DEFAULT_PROFILE, makeBudgetPlan, makePlan, parseLines } from "./superhome.ts";
import { compareBaskets, priceFor, SAMPLE_FEES } from "./superhome-pricing.ts";

const vegan = makePlan({ ...DEFAULT_PROFILE, diet: "vegan", avoid: "peanuts", appliances: ["stove"] });
assert.equal(vegan.meals.length, 7);
assert(vegan.meals.every(meal => meal.diet === "vegan"));
assert(vegan.meals.every(meal => !meal.ingredients.some(x => /peanuts/i.test(x.name))));

const one = makePlan({ ...DEFAULT_PROFILE, people: 1, pantry: "", home: "", favourites: "chana", appliances: ["stove"] });
const two = makePlan({ ...DEFAULT_PROFILE, people: 2, pantry: "", home: "", favourites: "chana", appliances: ["stove"] });
const rice = x => x.items.find(item => item.name === "Rice")?.amount;
assert.equal(rice(two), 2 * rice(one));
const stocked = makePlan({ ...DEFAULT_PROFILE, people: 2, pantry: "Rice: 300 g", home: "", favourites: "chana", appliances: ["stove"] });
assert.equal(rice(stocked), Math.max(0, rice(two) - 300) || undefined);
assert.deepEqual(parseLines("Dish soap: 1 pc\nMilk: 1 l").map(x => x.amount), [1, 1000]);
assert.equal(makePlan({ ...DEFAULT_PROFILE, appliances: [] }).meals.length, 0);
const sample = makePlan(DEFAULT_PROFILE);
const sampleComparison = compareBaskets(sample.items, {}, SAMPLE_FEES);
assert.equal(sampleComparison.single.length, 4);
assert(sampleComparison.split.total <= sampleComparison.single[0].total);
assert.equal(sampleComparison.split.assignments.length, sample.items.length);

const item = { ...sample.items[0], id: "controlled", name: "Rice", amount: 500 };
const second = { ...sample.items[1], id: "second", name: "Paneer", amount: 200 };
const manual = {
  controlled: { Amazon:{ amount:500,value:10 }, Blinkit:{ amount:500,value:30 }, Zepto:{ amount:500,value:null }, Instamart:{ amount:500,value:null } },
  second: { Amazon:{ amount:200,value:30 }, Blinkit:{ amount:200,value:10 }, Zepto:{ amount:200,value:null }, Instamart:{ amount:200,value:null } },
};
const feeHeavy = compareBaskets([item,second],manual,{ Amazon:25,Blinkit:25,Zepto:0,Instamart:0 });
assert.equal(feeHeavy.split.total,65); // one retailer beats per-item minimum after two delivery fees
assert.equal(feeHeavy.split.retailers.length,1);
const feeLight = compareBaskets([item,second],manual,{ Amazon:2,Blinkit:2,Zepto:0,Instamart:0 });
assert.equal(feeLight.split.total,24);
assert.deepEqual(feeLight.split.retailers,["Amazon","Blinkit"]);
assert.equal(priceFor({ ...item, amount: 600 }, "Amazon", manual) === 10, false); // stale quote ignored
assert.equal(compareBaskets([item],{controlled:{Amazon:{amount:500,value:null},Blinkit:{amount:500,value:null},Zepto:{amount:500,value:null},Instamart:{amount:500,value:null}}},SAMPLE_FEES).split,null);

const tight = { ...DEFAULT_PROFILE, budget: 100, pantry:"", home:"" };
const estimate = list => compareBaskets(list,{},SAMPLE_FEES).split?.total ?? Infinity;
const budgetPlan = makeBudgetPlan(tight,estimate);
assert.equal(budgetPlan.meals.length,7);
assert(estimate(budgetPlan.items) <= estimate(makePlan(tight).items));
assert(budgetPlan.meals.every(meal => meal.diet !== "omnivore"));
assert(budgetPlan.items.some(row => row.name === "Rice"));
console.log("Superhome planner checks passed");
