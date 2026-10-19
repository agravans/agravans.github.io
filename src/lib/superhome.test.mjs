import assert from "node:assert/strict";
import { DEFAULT_PROFILE, makePlan, parseLines } from "./superhome.ts";

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
console.log("Superhome planner checks passed");
