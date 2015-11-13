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

$('.button').click(function() {
  if (pressed == false) {
    $('.leftperson').html(calculateLeft());
    $('.rightperson').html(calculateRight());
    $('.leftSpeaker').html(calculateSayingsLeft());
    $('.rightSpeaker').html(calculateSayingsRight());
    $('.start').hide()
    pressed = true;
  } else {
    $('.leftperson').html(calculateLeft());
    $('.rightperson').html(calculateRight());
    $('.leftSpeaker').html(calculateSayingsLeft());
    $('.rightSpeaker').html(calculateSayingsRight());
    pressed = false;
  }
})