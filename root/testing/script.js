var track;
var array = [ ];

for (var i = 0; i < 10; i++) {
    track = 5 * i + 'px';
    array.push(track);
}

for (var i = 0; i < 10; i++) {
    $('.line').css('left', array[i]).css('position', 'fixed');
}