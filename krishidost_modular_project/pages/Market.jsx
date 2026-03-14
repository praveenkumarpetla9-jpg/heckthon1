import {mandiPrices} from "../database/mandiPrices.js"

export default function Market(){

return(

<div>

<h2>Mandi Prices</h2>

{mandiPrices.map((m,i)=>

<div key={i}>
{m.crop} - {m.price}
</div>

)}

</div>

)

}