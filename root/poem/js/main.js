var initialized = false;

var x, y;

var randomX, randomY;

var colors = ['#F3ECE7', '#EBCFC4', '#E9CCB1', '#E8E6D9'];

var random_phrases = ['are similar people',
                      'think of the other',
                      'were there past the surface',
                      'pushed past people',
                      'sometimes sound special',
                      'with a ready edge of flow',
                      'with much natural feeling',
                      'with the current cut above us',
                      'with the heavy raised from the ground'
                      ];

function calculateLocation() {
  var width = $(window).width();
  var height = $(window).height();
  randomX = Math.floor(Math.random()*width);
  randomY = Math.floor(Math.random()*height);
}

function randomize_coincidences() {
  $('.coincidence').each(function() {
    calculateLocation();
    $(this).css({ top: randomY, left: randomX });
  });
}

function randomize_colors() {
  var color = colors[Math.floor(Math.random()*colors.length)];
  return color;
}

function randomize_phrases() {
  var phrase = random_phrases[Math.floor(Math.random()*random_phrases.length)];
  return phrase;
}

function initializePoem() {
  if (initialized == false) {
    setTimeout(function(){
      $('.message').html('A COINCIDENCE');
      $('.content').css('background-color', randomize_colors());
      }, 1500);
    setTimeout(function(){
      $('.message').html('IS THE');
      $('.content').css('background-color', randomize_colors());
      }, 3000);
    setTimeout(function(){
      $('.message').html('UNSEEN FUTURE');
      $('.content').css('background-color', randomize_colors());
      }, 4500);
    setTimeout(function(){
      $('.message').html('HIDDEN IN');
      $('.content').css('background-color', randomize_colors());
      }, 6000);
    setTimeout(function(){
      $('.message').html('THE ORDINARY');
      $('.content').css('background-color', randomize_colors());
      }, 7500);
    setTimeout(function() {
      $('.coincidence').show();
      }, 9000);
    setTimeout(function() {
      $('.message').hide();
      $('.message').html('');
    }, 10500);
  }
  initialized = true;
}

$('.content').mousemove(function(event) {
  initializePoem();
  x = event.pageX;
  y = event.pageY;
  var point = "<div style='top: " + y + "px; left: " + x + "px;' class='point'></div>";
  $('.content').append(point);
  randomize_coincidences();
});

$('.coincidence').mouseenter(function() {
  calculateLocation();
  
  $('.message').show().addClass('shift');
  
  $('.content').css('background-color', randomize_colors());

  $('.message').append(randomize_phrases() + '<br />');

  $('.content').children(':not(.message, .coincidence)').hide();
  
});
