//Calculate a random task from the array.
alert();

var recordTaskNumber;
var task;
var calculateTask;
var listedTask = [
  'exercise',
  'read',
  'organize',
  'cook',
  'order',
  'call',
  'draw',
  'walk',
  'sleep',
  'repair'
]

var randomTask = function() {
  recordTaskNumber = Math.floor(Math.random()*listedTask.length);
  return recordTaskNumber;
}

var randomTaskCall = function() {
  task = listedTask[randomTask()];
  return task;
}

//Shuffle random tasks with a default option.

var defaultTask;
var shuffle;
var shuffleWithTime;
var calculateTask;

var shuffleWithTime = function() {
  shuffle = Math.floor(Math.random()*2);
  if (shuffle == 0) {
    calculateTask = randomTaskCall();
    calculateTask = '<scpan class = "' + calculateTask + '">' + calculateTask + '</scpan>'
    return calculateTask;
  } else {
    defaultTask = '00:00';
    defaultTask = '<scpan class = "default">' + defaultTask + '</scpan>'
    return defaultTask;
  }
}

//Make random tasks into a horizontal list.

var line;
var text;

var shuffleMachine = function() {
  text = '';
  for (var i = 0; i < 40; i++) {
    line = '<div class = "item">' + shuffleWithTime() + '</div>' + '&nbsp;';
    text += line;
  }
  return text;
}

//Make horizontal lists into marquees.

for (var i = 0; i < 70; i++) {
  shuffle = Math.floor(Math.random()*2);
  if (shuffle == 0) {
    $('.content').append('<marquee scrollamount = "10" direction = "right" onmouseover="this.stop();" onmouseout="this.start();">' + shuffleMachine() + '</marquee>');
  } else {
    $('.content').append('<marquee scrollamount = "10" direction = "left" onmouseover="this.stop();" onmouseout="this.start();">' + shuffleMachine() + '</marquee>');
  }
}

//Calculate a random placement for the DO— statement.

var motivation;
var calculateLocation;

var randomLocation = function() {
  motivation = Math.floor(Math.random() * 70);
  return motivation;
}

//Hide and show the motivation through focus.

var clicked = false;
$('.motivation').hide();

$('.item').click(function() {
  $('.motivation').show();
  $('.motivation').css('top', randomLocation() + '%').css('left', (randomLocation() + '%'));
})

//Specifics.

$('.default').click(function() {
  $('.default').css('text-decoration', 'line-through');
  // $('.default').addClass('shine');
})
