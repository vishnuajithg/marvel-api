const lat = 8.4833
const lon = 76.9167
const api = 'api goes here'
const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+api;
// url2 ="https://gateway.marvel.com/v1/public/comics?ts=1&apikey=e6b762fdb9b36362807afb13f5e65655&hash=35c39a432e2d5c3b1173fdc744d79075"
url2 = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=e6b762fdb9b36362807afb13f5e65655&hash=f5dfc7954d6cbc7d1e430f604f591a9f"
url2 = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e6b762fdb9b36362807afb13f5e65655&hash=f5dfc7954d6cbc7d1e430f604f591a9f"
url3 = 'https://pro-api.coinmarketcap.com/v1/blockchain/statistics/latest/020479e9-ce08-4c28-8012-fb069fe26365'

async function f(){

response = await fetch(url3)
const re = await response.json()
// promise.(jsonData => console.log(jsonData))
    // console.log(re['main']['temp'])
    // console.log(re.data.results)
    console.log(re)
}
f()
