var left;
var right;
var leftImage;
var rightImage;
var pressed = false;
var speech;
var speechOne;
var speechTwo;
var hold = false;
var sayingsLeft = [
  'So, what do you do for a living?',
  'Do you like dogs?',
  'Do you do this often?',
  'Say, when is your birthday? How old are you?',
  'So, do you live around here? I live in Chelsea.',
  'Where are you from?',
  'Tell me something about yourself. Anything.',
  'You oddly remind me of someone I have met before.',
  'Is the weather the worst or what?',
  "How's it going?"
];

var sayingsRight = [
  'I work in accounting with the worst boss in the world.',
  "I'm not too into the 'lifestyle' it comes with.",
  'A friend of mine brought me here for moral support.',
  "I'd rather not answer that question. But, I'm 47.",
  'Nice, I live pretty close by too.',
  "Oh man, its complicated.",
  "Wow, I don't quite know how to answer that.",
  'I get that quite a lot. Maybe its my hair.',
  "It's pretty horrible, but I've definitely had worse.",
  'Great, How about you?',
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
  speechOne = Math.floor(Math.random()*10);
  speech = sayingsLeft[speechOne];
  return speech;
}

var calculateSayingsRight = function() {
  speechTwo = Math.floor(Math.random()*10);
  speech = sayingsRight[speechTwo];
  return speech;
}

var checkSayings = function() {
  if (speechOne == speechTwo) {
    console.log('match!');
    $('.heart').css('display', 'inline-block');
    $('.leftspeaker').css('color', 'red');
    $('.rightspeaker').css('color', 'red');
  } else {
    console.log('no match!');
    $('.heart').css('display', 'none');
    $('.leftspeaker').css('color', 'black');
    $('.rightspeaker').css('color', 'black');
  }
}

$('.button').click(function() {
  if (pressed == false) {
    $('.leftperson').html(calculateLeft());
    $('.rightperson').html(calculateRight());
    $('.leftSpeaker').html(calculateSayingsLeft());
    $('.rightSpeaker').html(calculateSayingsRight());
    checkSayings();
    $('.start').hide();
    $('.explain').hide();
    $('.here').hide();
    pressed = true;
  } else {
    $('.leftperson').html(calculateLeft());
    $('.rightperson').html(calculateRight());
    $('.leftSpeaker').html(calculateSayingsLeft());
    $('.rightSpeaker').html(calculateSayingsRight());
    checkSayings();
    pressed = false;
  }
})