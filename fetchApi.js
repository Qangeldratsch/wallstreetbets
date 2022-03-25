const finnhub = require('finnhub');
init()

function init () {
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "c8uve9iad3iaocnjnsq0"

    const finnhubClient = new finnhub.DefaultApi()

    finnhubClient.stockCandles("TSLA", "D", 1590988249, 1591852249, (error, data, response) => {
        console.log(data)
    });

}