
var request = require('request')

var MtGox = function(key, secret) {
  this.apiUrl = 'https://data.mtgox.com/api/2/'
}

module.exports = MtGox

MtGox.prototype.connect = function() {

}

MtGox.prototype.ticker = function(currency1, currency2, callback) {
  var pair = (currency1 + currency2).toUpperCase()
  request(this.apiUrl+pair+'/money/ticker', function(err, res, data) {
    callback(err, processData(data))
  })
}

var processData = function(data) {
  try {
    data = JSON.parse(data)
  }
  catch (e) { }
  return data
}
