import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Clipboard, Download, ExternalLink, Plus, RotateCcw, Sparkles } from "lucide-react";
import { DEFAULT_PROFILE, makePlan, type Appliance, type Diet, type ListItem, type Profile } from "../lib/superhome";
import "./superhome.css";

const days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const appliances: Appliance[]=["stove","oven","air fryer","microwave"];
const readProfile=():Profile=>{try { const saved=JSON.parse(localStorage.getItem("superhome-profile-v1")||"null"); return saved?{...DEFAULT_PROFILE,...saved}:DEFAULT_PROFILE; } catch {return DEFAULT_PROFILE;} };
const quantity=(item:ListItem)=>`${Number(item.amount.toFixed(1))} ${item.unit}`;

export function Superhome(){
  const [profile,setProfile]=useState<Profile>(readProfile);
  const [plan,setPlan]=useState(()=>makePlan(readProfile()));
  const [items,setItems]=useState<ListItem[]>(()=>makePlan(readProfile()).items);
  const [extra,setExtra]=useState("");
  const [notice,setNotice]=useState("");
  const update=(change:Partial<Profile>)=>{setProfile(current=>{const next={...current,...change};localStorage.setItem("superhome-profile-v1",JSON.stringify(next));return next;});};
  const generate=()=>{const next=makePlan(profile);setPlan(next);setItems(next.items);setNotice("Your week has been refreshed.");};
  const groups=[...new Set(items.map(item=>item.category))];
  const pending=items.filter(item=>!item.checked);
  const plain=pending.map(item=>`${item.name} — ${quantity(item)}`).join("\n");
  const copy=async()=>{try{await navigator.clipboard.writeText(plain);setNotice("Shopping list copied.");}catch{setNotice("Copy unavailable. Use Download instead.");}};
  const download=()=>{const csv=["Category,Item,Quantity,Unit,Source",...pending.map(x=>[x.category,x.name,x.amount,x.unit,x.source].map(v=>`"${String(v).replaceAll('"','""')}"`).join(","))].join("\n");const url=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));const a=document.createElement("a");a.href=url;a.download="superhome-shopping-list.csv";a.click();URL.revokeObjectURL(url);};
  const retailer=(base:string)=>{const query=encodeURIComponent(pending[0]?.name||"groceries");window.open(base+query,"_blank","noopener,noreferrer");};
  return <div className="sh-page">
    <div className="sh-wrap">
      <Link to="/projects/superhome" className="sh-back"><ArrowLeft size={16}/> Superhome case study</Link>
      <header className="sh-hero">
        <div><p className="sh-eyebrow"><Sparkles size={15}/> THE HOUSEHOLD STUDIO · INTERACTIVE DEMO</p><h1>A calmer home,<br/><em>one week at a time.</em></h1><p>Tell Superhome how you live. Get seven dinners, a pantry-aware grocery list, and the everyday supplies you tend to forget.</p></div>
        <div className="sh-hero-card"><span>THIS WEEK AT A GLANCE</span><strong>{plan.meals.length} dinners</strong><strong>{pending.length} things to pick up</strong><small>For {profile.people} {profile.people===1?"person":"people"} · {plan.season} edit</small></div>
      </header>
      <div className="sh-grid">
        <section className="sh-panel sh-settings" aria-label="Household preferences">
          <div className="sh-heading"><span className="sh-number">01</span><div><h2>Your household</h2><p>Set the rules for this week.</p></div></div>
          <div className="sh-field-row"><label>People<input aria-label="Number of people" type="number" min="1" max="12" value={profile.people} onChange={e=>update({people:Math.max(1,Math.min(12,Number(e.target.value)||1))})}/></label><label>Diet<select value={profile.diet} onChange={e=>update({diet:e.target.value as Diet})}><option value="vegetarian">Vegetarian</option><option value="vegan">Vegan</option><option value="eggs">Vegetarian + eggs</option><option value="omnivore">Everything</option></select></label></div>
          <label>Avoid ingredients <span>(comma separated)</span><input placeholder="e.g. peanuts, curd" value={profile.avoid} onChange={e=>update({avoid:e.target.value})}/></label>
          <label>Kitchen appliances</label><div className="sh-chips">{appliances.map(a=><button type="button" key={a} aria-pressed={profile.appliances.includes(a)} className={profile.appliances.includes(a)?"active":""} onClick={()=>update({appliances:profile.appliances.includes(a)?profile.appliances.filter(v=>v!==a):[...profile.appliances,a]})}>{a}</button>)}</div>
          <label>Favourite meals or ingredients<input placeholder="e.g. paneer, dal" value={profile.favourites} onChange={e=>update({favourites:e.target.value})}/></label>
          <div className="sh-field-row"><label>City<input value={profile.city} onChange={e=>update({city:e.target.value})}/></label><label>Month<select value={profile.month} onChange={e=>update({month:Number(e.target.value)})}>{Array.from({length:12},(_,k)=><option key={k} value={k+1}>{new Date(2026,k,1).toLocaleString("en",{month:"long"})}</option>)}</select></label></div>
          <label>Already in the pantry <span>(one item per line: name: quantity unit)</span><textarea rows={3} value={profile.pantry} onChange={e=>update({pantry:e.target.value})}/></label>
          <label>Home essentials to replenish <span>(edit these each week)</span><textarea rows={3} value={profile.home} onChange={e=>update({home:e.target.value})}/></label>
          <button className="sh-primary" onClick={generate}><RotateCcw size={16}/> Build my week</button>
          <p className="sh-help">Your preferences stay in this browser. Changes affect the list when you build the week again.</p>
        </section>
        <div className="sh-results">
          <section className="sh-panel"><div className="sh-heading"><span className="sh-number">02</span><div><h2>The dinner plan</h2><p>{plan.season} suggestions for {profile.city||"your city"} · {plan.rejected} unsuitable recipes filtered</p></div></div>
            {plan.meals.length?<div className="sh-meals">{plan.meals.map((meal,index)=><div className="sh-meal" key={index}><span className="sh-day">{days[index]}</span><div><strong>{meal.name}</strong><small>{meal.note}</small></div><span className="sh-time">{meal.minutes} min</span></div>)}</div>:<p className="sh-empty">No recipes fit this combination. Enable a stove or adjust avoided ingredients, then rebuild.</p>}
            <p className="sh-help">Seasonal ideas are curated examples. Local availability and individual nutrition needs vary.</p>
          </section>
          <section className="sh-panel" id="shopping-list"><div className="sh-heading"><span className="sh-number">03</span><div><h2>Your shopping list</h2><p>Scaled for {profile.people} · pantry amounts already subtracted</p></div></div>
            <div className="sh-list-actions"><button onClick={copy} disabled={!pending.length}><Clipboard size={15}/> Copy</button><button onClick={download} disabled={!pending.length}><Download size={15}/> CSV</button></div>
            {groups.map(group=><div className="sh-group" key={group}><h3>{group}</h3>{items.filter(item=>item.category===group).map(item=><div className={`sh-item ${item.checked?"done":""}`} key={item.id}><label><input type="checkbox" checked={item.checked} onChange={()=>setItems(current=>current.map(x=>x.id===item.id?{...x,checked:!x.checked}:x))}/><span className="sh-box"><Check size={13}/></span><span><strong>{item.name}</strong><small>{item.source}</small></span></label><span>{quantity(item)}</span><button title={`Remove ${item.name}`} aria-label={`Remove ${item.name}`} onClick={()=>setItems(current=>current.filter(x=>x.id!==item.id))}>×</button></div>)}</div>)}
            <form className="sh-add" onSubmit={e=>{e.preventDefault();const name=extra.trim();if(!name)return;setItems(current=>[...current,{id:"extra|"+Date.now(),name,amount:1,unit:"pc",category:"Added by you",source:"Manual addition",checked:false}]);setExtra("");}}><input aria-label="Add an item" placeholder="Add anything else..." value={extra} onChange={e=>setExtra(e.target.value)}/><button type="submit"><Plus size={16}/> Add</button></form>
            {notice&&<p className="sh-notice" role="status">{notice}</p>}
          </section>
          <section className="sh-panel"><div className="sh-heading"><span className="sh-number">04</span><div><h2>Shop with a retailer</h2><p>Search handoff for your first unchecked item</p></div></div><p className="sh-shop-intro">Open a retailer search for <strong>{pending[0]?.name||"groceries"}</strong>, then use your copied list to finish the basket. These buttons do not transfer a cart or place an order.</p><div className="sh-retailers"><button onClick={()=>retailer("https://www.amazon.in/s?k=")}>Amazon <ExternalLink size={14}/></button><button onClick={()=>retailer("https://blinkit.com/s/?q=")}>Blinkit <ExternalLink size={14}/></button><button onClick={()=>retailer("https://www.zeptonow.com/search?query=")}>Zepto <ExternalLink size={14}/></button><button onClick={()=>retailer("https://www.swiggy.com/instamart/search?query=")}>Instamart <ExternalLink size={14}/></button></div><p className="sh-help">Live catalog matching, prices, delivery and checkout require retailer access. The future order flow will show a final basket and require your confirmation.</p></section>
        </div>
      </div>
      <footer className="sh-footer">Concept demo by Subandhu Agravanshi · Recipes are illustrative. Check ingredient labels for allergies.</footer>
    </div>
  </div>;
}
