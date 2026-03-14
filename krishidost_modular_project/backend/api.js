export async function getWeather(){

const res = await fetch("api/weather")

return res.json()

}