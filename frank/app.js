var request = require('request');
var url = 'http://192.168.15.245:8080/webhooks';

matrix.led('blue').render();

matrix.init('demographics').then(function(data) {
    matrix.led('red').render();
    console.log('>>>>>>>>>>>>>>>>', data);

    request({url: url, method: "POST", json: data});
});
