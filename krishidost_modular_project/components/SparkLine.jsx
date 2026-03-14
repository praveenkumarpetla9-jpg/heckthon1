export default function SparkLine({data}){

return(

<svg width="100" height="40">

{data.map((v,i)=>

<circle
key={i}
cx={i*10}
cy={40-v}
r="2"
/>

)}

</svg>

)

}