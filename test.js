

var MtGox = require('./mtgox.js')

// apikey.json file:
// { "key": "YOUR_API_KEY", "secret": "YOUR_API_SECRET" }
var apikey = require('./apikey.json')

var gox = new MtGox(apikey.key, apikey.secret)

/*
gox.ticker('btc', 'usd', function(err, data) {
  console.log(data)
})

gox.tickerFast('btc', 'usd', function(err, data) {
  console.log(data)
})
*/

gox.hotpGen(function(err, data) {
  console.log(data)
})

gox.listPublic(function(err, data) {
  console.log(data)
})
