var initialized = false;

var x, y;

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

var end_sentence = ['Cut through where we stood on the beach', 
                    'Was afraid of the past ahead', 
                    'Finally found the long lost reason for everything',
                    'Was better when it was not in control',
                    'Had an interest in being above the ground.',
                    'Suddenly suggested that we should be happy',
                    'Has suggested that you value everything over something',
                    'Entered the big blue in nothing but fear and jumped']

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
    if (random == 1) {
      $('.message').html(randomize_phrases_start() + ',<br />' + 
                        randomize_phrases_end());
    } else {
      $('.message').html(randomize_phrases_end() + ',<br />' + 
                          randomize_phrases_start());
    }
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
  $('.content').children(':not(.coincidence)').hide();
  
  $('.coincidence').mouseenter(function() {
    calculateLocation();
    
    $('.message').show().addClass('shift');
    $('.message').html(random_phrase_combo());
    
    $('.content').css('background-color', randomize_colors());
  
    $('.content').children(':not(.message, .coincidence)').hide();
    
  });
})

$('.content').click(function() {
  $('.content').children(':not(.message, .coincidence)').hide();
})
