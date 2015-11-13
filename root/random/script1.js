var left;
var right;
var leftImage;
var rightImage;
var pressed = false;
var speech;
var sayingsLeft = [
  'So, what do you do for a living?',
  'Do you like dogs?',
  'Sayings3',
  'Saying4',
  'Saying5',
  'Saying6',
  'Saying7',
  'Saying8',
  'Saying9',
  'Saying10',
];

var sayingsRight = [
  'Sayings1',
  'Sayings2',
  'Oh cool, I have relatives in New Jersey.',
  'Saying4',
  'Saying5',
  'Saying6',
  'Saying7',
  'Saying8',
  'Saying9',
  'Saying10',
];

var parsons = ['right4.png', 'right5.png', 'right6.png', 'right7.png', 'right8.png'];

var additions = ['one', 'two', 'three']

var calculateLeft = function() {
  left = Math.floor(Math.random()*10 + 1);
  leftImage = '<img class = "leftperson" src = "assets/left' + left + '.png"/>';
  return leftImage;
}

var calculateRight = function() {
  right = Math.floor(Math.random()*10 + 1);
  rightImage = '<img class = "rightperson" src = "assets/right' + right + '.png"/>';
  return rightImage;
}

var calculateSayingsLeft = function() {
  speech = Math.floor(Math.random()*10);
  speech = sayingsLeft[speech];
  return speech;
}

var calculateSayingsRight = function() {
  speech = Math.floor(Math.random()*10);
  speech = sayingsRight[speech];
  return speech;
}

for (var i = 0; i < 100; i++) {
  $('body').append('<div class = "square"></div>');
}

var randomGen2 = additions[Math.floor(Math.random() * 3)];
$('.square').addClass('randomGen2');

var randomGen = parsons[Math.floor(Math.random() * 5)];
$('.square1').html('<img src = "assets/' + randomGen + '"/>');
$('.square2').html('<img src = "assets/' + randomGen + '"/>');
$('.square3').html('<img src = "assets/' + randomGen + '"/>');