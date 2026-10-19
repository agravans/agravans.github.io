import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Clipboard, Download, ExternalLink, Plus, RotateCcw, Sparkles } from "lucide-react";
import { DEFAULT_PROFILE, makeBudgetPlan, makePlan, type Appliance, type Diet, type ListItem, type Profile } from "../lib/superhome";
import { compareBaskets, priceFor, RETAILERS, SAMPLE_FEES, type Fees, type Quotes, type Retailer } from "../lib/superhome-pricing";
import "./superhome.css";

const days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const appliances: Appliance[]=["stove","oven","air fryer","microwave"];
const readProfile=():Profile=>{try { const saved=JSON.parse(localStorage.getItem("superhome-profile-v1")||"null"); return saved?{...DEFAULT_PROFILE,...saved}:DEFAULT_PROFILE; } catch {return DEFAULT_PROFILE;} };
const quantity=(item:ListItem)=>`${Number(item.amount.toFixed(1))} ${item.unit}`;
const rupees=(value:number)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(value);
const readPricing=():{quotes:Quotes;fees:Fees}=>{try{const saved=JSON.parse(localStorage.getItem("superhome-pricing-v1")||"null");return {quotes:saved?.quotes||{},fees:{...SAMPLE_FEES,...saved?.fees}};}catch{return {quotes:{},fees:SAMPLE_FEES};}};
const storePricing=(quotes:Quotes,fees:Fees)=>localStorage.setItem("superhome-pricing-v1",JSON.stringify({quotes,fees}));
const searchUrls:Record<Retailer,string>={Amazon:"https://www.amazon.in/s?k=",Blinkit:"https://blinkit.com/s/?q=",Zepto:"https://www.zeptonow.com/search?query=",Instamart:"https://www.swiggy.com/instamart/search?query="};

export function Superhome(){
  const [profile,setProfile]=useState<Profile>(readProfile);
  const [plan,setPlan]=useState(()=>makePlan(readProfile()));
  const [items,setItems]=useState<ListItem[]>(()=>makePlan(readProfile()).items);
  const [extra,setExtra]=useState("");
  const [notice,setNotice]=useState("");
  const [quotes,setQuotes]=useState<Quotes>(()=>readPricing().quotes);
  const [fees,setFees]=useState<Fees>(()=>readPricing().fees);
  const [budgetFocused,setBudgetFocused]=useState(false);
  const update=(change:Partial<Profile>)=>{setProfile(current=>{const next={...current,...change};localStorage.setItem("superhome-profile-v1",JSON.stringify(next));return next;});};
  const generate=(focus=false)=>{const next=focus?makeBudgetPlan(profile,list=>compareBaskets(list,quotes,fees).split?.total??Infinity):makePlan(profile);setPlan(next);setItems(next.items);setBudgetFocused(focus);setNotice(focus?"Budget-focused dinners are ready. Review the estimated basket and quotes below.":"Your week has been refreshed.");};
  const groups=[...new Set(items.map(item=>item.category))];
  const pending=items.filter(item=>!item.checked);
  const comparison=compareBaskets(pending,quotes,fees);
  const best=comparison.split;
  const budget=Number(profile.budget)||0;
  const quoteCount=Object.values(quotes).reduce((sum,row)=>sum+Object.values(row).filter(Boolean).length,0);
  const plain=pending.map(item=>`${item.name} — ${quantity(item)}`).join("\n");
  const copy=async()=>{try{await navigator.clipboard.writeText(plain);setNotice("Shopping list copied.");}catch{setNotice("Copy unavailable. Use Download instead.");}};
  const download=()=>{const csv=["Category,Item,Quantity,Unit,Source",...pending.map(x=>[x.category,x.name,x.amount,x.unit,x.source].map(v=>`"${String(v).replaceAll('"','""')}"`).join(","))].join("\n");const url=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));const a=document.createElement("a");a.href=url;a.download="superhome-shopping-list.csv";a.click();URL.revokeObjectURL(url);};
  const retailer=(name:Retailer,item=pending[0]?.name||"groceries")=>window.open(searchUrls[name]+encodeURIComponent(item),"_blank","noopener,noreferrer");
  const editQuote=(item:ListItem,retailer:Retailer,raw:string)=>{const next={...quotes,[item.id]:{...quotes[item.id],[retailer]:{amount:item.amount,value:raw===""?null:Math.max(0,Number(raw)||0)}}};setQuotes(next);storePricing(next,fees);};
  const editFee=(retailer:Retailer,raw:string)=>{const next={...fees,[retailer]:Math.max(0,Number(raw)||0)};setFees(next);storePricing(quotes,next);};
  const copyRetailer=async(name:Retailer)=>{const rows=best?.assignments.filter(row=>row.retailer===name)||[];await navigator.clipboard.writeText(rows.map(row=>`${row.item.name} — ${quantity(row.item)} — ${rupees(row.price)}`).join("\n"));setNotice(`${name} list copied. Confirm actual products and final charges in the retailer app.`);};
  return <div className="sh-page">
    <div className="sh-wrap">
      <Link to="/projects/superhome" className="sh-back"><ArrowLeft size={16}/> Superhome case study</Link>
      <header className="sh-hero">
        <div><p className="sh-eyebrow"><Sparkles size={15}/> THE HOUSEHOLD STUDIO · INTERACTIVE DEMO</p><h1>A calmer home,<br/><em>one week at a time.</em></h1><p>Plan dinners and home supplies, then compare an estimated complete basket against your weekly budget.</p></div>
        <div className="sh-hero-card"><span>THIS WEEK AT A GLANCE · SAMPLE ESTIMATES</span><strong>{plan.meals.length} dinners</strong><strong>{pending.length} things to pick up</strong><strong>{best?rupees(best.total):"No complete quote"}</strong><small>For {profile.people} {profile.people===1?"person":"people"} · {plan.season} edit</small></div>
      </header>
      <div className="sh-grid">
        <section className="sh-panel sh-settings" aria-label="Household preferences">
          <div className="sh-heading"><span className="sh-number">01</span><div><h2>Your household</h2><p>Set the rules for this week.</p></div></div>
          <div className="sh-field-row"><label>People<input aria-label="Number of people" type="number" min="1" max="12" value={profile.people} onChange={e=>update({people:Math.max(1,Math.min(12,Number(e.target.value)||1))})}/></label><label>Diet<select value={profile.diet} onChange={e=>update({diet:e.target.value as Diet})}><option value="vegetarian">Vegetarian</option><option value="vegan">Vegan</option><option value="eggs">Vegetarian + eggs</option><option value="omnivore">Everything</option></select></label></div>
          <label>Avoid ingredients <span>(comma separated)</span><input placeholder="e.g. peanuts, curd" value={profile.avoid} onChange={e=>update({avoid:e.target.value})}/></label>
          <label>Kitchen appliances</label><div className="sh-chips">{appliances.map(a=><button type="button" key={a} aria-pressed={profile.appliances.includes(a)} className={profile.appliances.includes(a)?"active":""} onClick={()=>update({appliances:profile.appliances.includes(a)?profile.appliances.filter(v=>v!==a):[...profile.appliances,a]})}>{a}</button>)}</div>
          <label>Favourite meals or ingredients<input placeholder="e.g. paneer, dal" value={profile.favourites} onChange={e=>update({favourites:e.target.value})}/></label>
          <div className="sh-field-row"><label>City<input value={profile.city} onChange={e=>update({city:e.target.value})}/></label><label>Month<select value={profile.month} onChange={e=>update({month:Number(e.target.value)})}>{Array.from({length:12},(_,k)=><option key={k} value={k+1}>{new Date(2026,k,1).toLocaleString("en",{month:"long"})}</option>)}</select></label></div>
          <label>Weekly basket budget (₹)<input type="number" min="0" step="50" value={profile.budget} onChange={e=>update({budget:Math.max(0,Number(e.target.value)||0)})}/></label>
          <label>Already in the pantry <span>(one item per line: name: quantity unit)</span><textarea rows={3} value={profile.pantry} onChange={e=>update({pantry:e.target.value})}/></label>
          <label>Home essentials to replenish <span>(edit these each week)</span><textarea rows={3} value={profile.home} onChange={e=>update({home:e.target.value})}/></label>
          <button className="sh-primary" onClick={()=>generate(false)}><RotateCcw size={16}/> Build my week</button>
          <button className="sh-secondary" onClick={()=>generate(true)}>Build a budget-focused week</button>
          <p className="sh-help">Your preferences stay in this browser. Changes affect the list when you build the week again.</p>
        </section>
        <div className="sh-results">
          <section className="sh-panel"><div className="sh-heading"><span className="sh-number">02</span><div><h2>The dinner plan</h2><p>{plan.season} suggestions for {profile.city||"your city"} · {plan.rejected} unsuitable recipes filtered {budgetFocused?"· budget-focused swaps":""}</p></div></div>
            {plan.meals.length?<div className="sh-meals">{plan.meals.map((meal,index)=><div className="sh-meal" key={index}><span className="sh-day">{days[index]}</span><div><strong>{meal.name}</strong><small>{meal.note}</small></div><span className="sh-time">{meal.minutes} min</span></div>)}</div>:<p className="sh-empty">No recipes fit this combination. Enable a stove or adjust avoided ingredients, then rebuild.</p>}
            <p className="sh-help">Seasonal ideas are curated examples. Local availability and individual nutrition needs vary.</p>
          </section>
          <section className="sh-panel" id="shopping-list"><div className="sh-heading"><span className="sh-number">03</span><div><h2>Your shopping list</h2><p>Scaled for {profile.people} · pantry amounts already subtracted</p></div></div>
            <div className="sh-list-actions"><button onClick={copy} disabled={!pending.length}><Clipboard size={15}/> Copy</button><button onClick={download} disabled={!pending.length}><Download size={15}/> CSV</button></div>
            {groups.map(group=><div className="sh-group" key={group}><h3>{group}</h3>{items.filter(item=>item.category===group).map(item=><div className={`sh-item ${item.checked?"done":""}`} key={item.id}><label><input type="checkbox" checked={item.checked} onChange={()=>setItems(current=>current.map(x=>x.id===item.id?{...x,checked:!x.checked}:x))}/><span className="sh-box"><Check size={13}/></span><span><strong>{item.name}</strong><small>{item.source}</small></span></label><span>{quantity(item)}</span><button title={`Remove ${item.name}`} aria-label={`Remove ${item.name}`} onClick={()=>setItems(current=>current.filter(x=>x.id!==item.id))}>×</button></div>)}</div>)}
            <form className="sh-add" onSubmit={e=>{e.preventDefault();const name=extra.trim();if(!name)return;setItems(current=>[...current,{id:"extra|"+Date.now(),name,amount:1,unit:"pc",category:"Added by you",source:"Manual addition",checked:false}]);setExtra("");}}><input aria-label="Add an item" placeholder="Add anything else..." value={extra} onChange={e=>setExtra(e.target.value)}/><button type="submit"><Plus size={16}/> Add</button></form>
            {notice&&<p className="sh-notice" role="status">{notice}</p>}
          </section>
          <section className="sh-panel" id="price-comparison"><div className="sh-heading"><span className="sh-number">04</span><div><h2>Compare complete baskets</h2><p>Four retailers · quoted item totals plus one delivery fee per retailer used</p></div></div>
            <div className="sh-demo-alert"><strong>Demo estimates, not live prices.</strong> The starting numbers and fees are synthetic. Replace each quote with the current price for the <em>full quantity shown</em> in your location; clear a field when an item is unavailable. Edited quotes stay in this browser and reset to sample values if the required quantity changes. No retailer data is scraped.</div>
            <div className="sh-budget"><div><span>Weekly budget</span><strong>{budget?rupees(budget):"No target"}</strong></div><div><span>Lowest complete basket</span><strong>{best?rupees(best.total):"Unavailable"}</strong></div><div><span>Budget position</span><strong className={best&&budget&&best.total>budget?"sh-over":"sh-under"}>{best&&budget?`${best.total>budget?"Over":"Under"} by ${rupees(Math.abs(best.total-budget))}`:"Set a target"}</strong></div></div>
            {best&&budget&&best.total>budget&&<p className="sh-budget-note">This complete list is {rupees(best.total-budget)} above target. Try “Build a budget-focused week” or change items and quotes; the app will not quietly remove essentials.</p>}
            <div className="sh-baskets">{comparison.single.map((basket,index)=><div className="sh-basket" key={basket.retailers[0]}><span>{basket.retailers[0]} {index===0?"· cheapest single store":""}</span><strong>{rupees(basket.total)}</strong><small>{rupees(basket.subtotal)} items + {rupees(basket.fees)} delivery</small></div>)}{best&&<div className="sh-basket featured"><span>Optimized split · {best.retailers.length} {best.retailers.length===1?"store":"stores"}</span><strong>{rupees(best.total)}</strong><small>{rupees(best.subtotal)} items + {rupees(best.fees)} delivery</small></div>}</div>
            <div className="sh-quote-scroll"><table className="sh-quote-table"><thead><tr><th>Item / full quantity</th>{RETAILERS.map(name=><th key={name}>{name}<label className="sh-fee">Delivery ₹<input aria-label={`${name} delivery fee`} type="number" min="0" step="1" value={fees[name]} onChange={e=>editFee(name,e.target.value)}/></label></th>)}</tr></thead><tbody>{pending.map(item=>{const prices=RETAILERS.map(name=>priceFor(item,name,quotes)).filter((value):value is number=>value!==null);const low=Math.min(...prices);const high=Math.max(...prices);return <tr key={item.id}><th>{item.name}<small>{quantity(item)}</small></th>{RETAILERS.map(name=>{const value=priceFor(item,name,quotes);return <td key={name}><div className={value!==null&&value===low?"sh-low":value!==null&&value===high&&high>low?"sh-high":""}><span>₹</span><input aria-label={`${item.name} on ${name}, full quantity`} type="number" min="0" step="0.01" placeholder="N/A" value={value??""} onChange={e=>editQuote(item,name,e.target.value)}/></div></td>;})}</tr>;})}</tbody></table></div>
            <p className="sh-help">Green is the lowest item quote; red is the highest. The cheapest item-by-item combination may cost more once multiple delivery fees are included. {quoteCount} saved manual quote{quoteCount===1?"":"s"}; revisit prices before purchasing.</p>
            {best&&<div className="sh-split"><h3>Your lowest estimated shopping route</h3>{best.retailers.map(name=><div className="sh-route" key={name}><div><strong>{name}</strong><span>{best.assignments.filter(row=>row.retailer===name).length} items · {rupees(best.assignments.filter(row=>row.retailer===name).reduce((sum,row)=>sum+row.price,0)+fees[name])} including delivery</span></div><ul>{best.assignments.filter(row=>row.retailer===name).map(row=><li key={row.item.id}>{row.item.name} · {quantity(row.item)} <span>{rupees(row.price)}</span></li>)}</ul><button onClick={()=>copyRetailer(name)}><Clipboard size={14}/> Copy {name} list</button></div>)}</div>}
          </section>
          <section className="sh-panel"><div className="sh-heading"><span className="sh-number">05</span><div><h2>Shop with a retailer</h2><p>Search handoff for your first unchecked item</p></div></div><p className="sh-shop-intro">Open a retailer search for <strong>{pending[0]?.name||"groceries"}</strong>, then use your copied list to finish the basket. These buttons do not transfer a cart or place an order.</p><div className="sh-retailers">{RETAILERS.map(name=><button key={name} onClick={()=>retailer(name)}>{name} <ExternalLink size={14}/></button>)}</div><p className="sh-help">These quoted totals do not guarantee a purchasable basket. Verify product sizes, stock, service charges, delivery fees and checkout total in each app.</p></section>
        </div>
      </div>
      <footer className="sh-footer">Concept demo by Subandhu Agravanshi · Recipes are illustrative. Check ingredient labels for allergies.</footer>
    </div>
  </div>;
}
