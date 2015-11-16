var color;
var colorSelection = ['#FF0000', '#0000FF', '#FFF', '#00FF00'];
var change;
var assignment;
var assignmentSelection = ['.archive', '.composition', '.favicon', '.random', '.pattern', '.space', '.typeface']
var typeface;
var typefaceSelection = ['garamond, serif', 'helvetica, sans-serif', 'courier, monospace', 'cursive', 'Times, serif'];
var hold;

var randomColor = function() {
  color = colorSelection[Math.floor(Math.random() * 4)];
  return color;
}

var randomBackground = function() {
  color = colorSelection[Math.floor(Math.random() * 4)];
  return color;
}

var randomAssignment = function() {
  assignment = assignmentSelection[Math.floor(Math.random() * 7)];
  return assignment;
}

var randomTypeface = function() {
  typeface = typefaceSelection[Math.floor(Math.random() * 5)];
  return typeface;
}

for (var i = 0; i < 100; i++) {
  $(randomAssignment()).css('background-color', randomColor()).css('font-family', randomTypeface());
}

$('.button').mousedown(function() {
  for (var i = 0; i < 100; i++) {
    $(randomAssignment()).css('background-color', randomColor()).css('font-family', randomTypeface());
    $('body').css('background-color', randomBackground());
  }
})