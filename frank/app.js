matrix.led('blue').render();

matrix.init('demographics').then(function(data) {
    matrix.led('red').render();
    console.log('>>>>>>>>>>>>>>>>', data);
});
