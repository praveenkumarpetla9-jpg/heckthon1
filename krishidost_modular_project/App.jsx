import Nav from "./components/Nav.jsx"
import Chatbot from "./components/Chatbot.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Market from "./pages/Market.jsx"
import Weather from "./pages/Weather.jsx"
import CropDoctor from "./pages/CropDoctor.jsx"

function App(){

const [tab,setTab] = React.useState("home")

return (

<div>

<Nav tab={tab} setTab={setTab}/>

{tab==="home" && <Dashboard/>}
{tab==="prices" && <Market/>}
{tab==="weather" && <Weather/>}
{tab==="disease" && <CropDoctor/>}

<Chatbot/>

</div>

)

}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)