/*

https://bitbucket.org/nitrous/mtgox-api/

*/


var request = require('request')

var MtGox = function(key, secret) {
  this.apiUrl = 'https://data.mtgox.com/api/2/'
}

module.exports = MtGox

MtGox.prototype.connect = function() {

}

/**
 * MONEY/TICKER
 * Get the most recent information for a currency pair
 *
 * Response:
 * "vwap" is the volume-weighted average price
 * "last_local" is the last trade in your selected auxiliary currency
 * "last_orig" is the last trade (any currency)
 * "last_all" is that last trade converted to the auxiliary currency
 * "last" is the same as last_local
 * "now" is the unix timestamp, but with a resolution of 1 microsecond
 */
MtGox.prototype.ticker = function(currency1, currency2, callback) {
  var pair = (currency1 + currency2).toUpperCase()
  request(this.apiUrl+pair+'/money/ticker', function(err, res, data) {
    callback(err, processData(data))
  })
}

/**
 * MONEY/TICKER_FAST
 * Get the most recent information for a currency pair. This method is similar
 * to money/ticker, except it returns less information, and is supposedly
 * lag-free.
 */
MtGox.prototype.tickerFast = function(currency1, currency2, callback) {
  var pair = (currency1 + currency2).toUpperCase()
  request(this.apiUrl+pair+'/money/ticker_fast', function(err, res, data) {
    callback(err, processData(data))
  })
}

MtGox.prototype.tickerFast = function(currency1, currency2, callback) {
  var pair = (currency1 + currency2).toUpperCase()
  request(this.apiUrl+pair+'/money/ticker_fast', function(err, res, data) {
    callback(err, processData(data))
  })
}

/**
 * SECURITY/HOTP/GEN
 * Generates a new HOTP key, what this is used for is unclear, though it may
 * have some use for application developers
 */
MtGox.prototype.hotpGen = function(callback) {
  request(this.apiUrl+'/security/hotp/gen', function(err, res, data) {
    callback(err, processData(data))
  })
}

/**
 * STREAM/LIST_PUBLIC
 * Lists the public depth, ticker and trade channels supported by the streaming
 * API. Note that many more currencies seem to be available with this,
 * including Litecoins and Namecoins, although these are not available for
 * trading over MtGox.
 */
MtGox.prototype.listPublic = function(callback) {
  request(this.apiUrl+'/stream/list_public', function(err, res, data) {
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
