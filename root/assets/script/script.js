var color;
var colorSelection = ['#FFF', '#FF0000', '#0000FF'];
var change;
var assignment;
var assignmentSelection = ['.archive', '.composition', '.favicon', '.random', '.pattern', '.space', '.typeface']
var typeface;
var typefaceSelection = ['serif', 'sans-serif', 'monospace', 'cursive'];
var resized = false;

var randomColor = function() {
  color = colorSelection[Math.floor(Math.random() * 3)];
  return color;
}

var randomAssignment = function() {
  assignment = assignmentSelection[Math.floor(Math.random() * 7)];
  return assignment;
}

var randomTypeface = function() {
  typeface = typefaceSelection[Math.floor(Math.random() * 4)];
  return typeface;
}

for (var i = 0; i < 100; i++) {
  change = $(randomAssignment()).css('background-color', randomColor()).css('font-family', randomTypeface());
}

$('.button').mousedown(function() {
  for (var i = 0; i < 100; i++) {
  change = $(randomAssignment()).css('background-color', randomColor()).css('font-family', randomTypeface());
  }
})