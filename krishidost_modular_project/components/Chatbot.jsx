export default function Chatbot(){

const [msg,setMsg] = React.useState("")
const [chat,setChat] = React.useState([])

function send(){

setChat([...chat,msg])
setMsg("")

}

return(

<div className="chatbox">

<div className="messages">

{chat.map((m,i)=>
<div key={i}>{m}</div>
)}

</div>

<input
value={msg}
onChange={e=>setMsg(e.target.value)}
/>

<button onClick={send}>Send</button>

</div>

)

}