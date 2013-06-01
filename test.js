


var MtGox = require('./mtgox.js')
var apikey = require('./apikey.json')

var gox = new MtGox(apikey.key, apikey.secret)

gox.ticker('btc', 'usd', function(err, data) {
  console.log(data)
})
