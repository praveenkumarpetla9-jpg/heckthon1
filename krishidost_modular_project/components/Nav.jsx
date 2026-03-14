export default function Nav({tab,setTab,lang,setLang,dark,setDark}){

return(

<nav className="nav">

<div className="nav-logo"
onClick={()=>setTab("home")}>
🌾 KrishiDost
</div>

<div className="nav-tabs">

<button onClick={()=>setTab("home")}>Home</button>

<button onClick={()=>setTab("disease")}>
🌿 Disease
</button>

<button onClick={()=>setTab("prices")}>
📈 Prices
</button>

<button onClick={()=>setTab("crop")}>
🌱 Crop Rec
</button>

</div>

</nav>

)

}