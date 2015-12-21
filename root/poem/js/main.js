var initialized = false;

var x, y;

var start = '';
var end = '';

var randomX, randomY;

var colors = ['#F3ECE7', '#EBCFC4', '#E9CCB1', '#E8E6D9'];

var start_sentence = ['A hundred people', 
                      'You think this one through', 
                      'Someone strange',
                      'A large supply of everything',
                      'The last human',
                      'The material distance between them',
                      'History',
                      'You and the last']

var end_sentence = ['Cut through where we stood', 
                    'Afraid of ahead', 
                    'Finally found the reason for everything',
                    'Said it was not in control',
                    'Had an interest in being above',
                    'Suddenly suggested to be happy',
                    'Suggested value of everything over something',
                    'Entered the nothing and jumped']

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

function randomize_phrases_start() {
  var phrase = start_sentence[Math.floor(Math.random()*start_sentence.length)];
  return phrase;
}

function randomize_phrases_end() {
  var phrase = end_sentence[Math.floor(Math.random()*end_sentence.length)];
  return phrase;
}

function random_phrase_combo() {
    var random = Math.floor(Math.random()*2);
    start = randomize_phrases_start();
    end = randomize_phrases_end();
      $('.message').html(start + ',<br />' + 
                        end);
}

function initializePoem() {
  if (initialized == false) {
    setTimeout(function(){
      $('.message').html('COINCIDENCE');
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
      $('.stop').show();
      }, 9500);
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

$('.stop').mouseenter(function() {
  $('.stop').addClass('coincidence');
  $('.content').children(':not(.log, .coincidence)').hide();
  
  $('.coincidence').mouseenter(function() {
    calculateLocation();
    
    $('.message').show().addClass('shift');
    $('.message').html(random_phrase_combo());
    
    $('.content').css('background-color', randomize_colors());
  
    $('.content').children(':not(.message, .coincidence, .log)').hide();
    
  });
})

$('.content').click(function() {
  $('.content').children(':not(.message, .coincidence, .log, .stop)').hide();
})
