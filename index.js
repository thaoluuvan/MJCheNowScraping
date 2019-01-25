const rp = require('request-promise');
const cheerio = require('cheerio');
const url= "https://www.now.vn/ha-noi/tra-sua-heytea-nga-tu-so";
const options = {
    uri: url,
    transform: function (body) {
      return cheerio.load(body);
    }
  };
  rp(options)
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });