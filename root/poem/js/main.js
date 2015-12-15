var entered;

var x, y;

var randomX, randomY;

var phrase;

var pronoun;
var pronounLower;

var colors = ['#EBCFC4', '#E9CCB1', '#E8E6D9'];

var random_pronoun = ['They', 'We', 'You']

var random_phrases1 = ['are similar people',
                      'think of the other',
                      'were there past the surface',
                      'pushed past people',
                      'sometimes sound special'
              ];
              
var random_phrases2 = ['with a ready blue edge of flow',
                      'with much natural feeling',
                      'with the current cut above us',
                      'with the heavy raised from the ground',
                      'with a lost voice rich with use'
              ];
              
var random_phrases3 = ['under certain conditions of control',
                      'under the present pretty process',
                      'under a movement held there still',
                      'under a speed held by force',
                      'under a material distance '
              ];
              
var random_phrases4 = ['stop short of home.',
                      'think fair feeling in the particular.',
                      'suppose true time is far away.',
                      'were lifted with the sharp sense of the young.',
                      'are suddenly joined with other people.'
              ];

var calculateLocation = function() {

  var width = $(window).width();
  var height = $(window).height();

  randomX = Math.floor(Math.random()*width);
  randomY = Math.floor(Math.random()*height);

}

$('.random_phrase').hide();

for (var i = 0; i < 50; i++) {

  calculateLocation();

  var coincidence = "<div style = 'top: " + (randomY + 15) + "px; left: " + (randomX - 20) + "px;' class = 'coincidence'></div>";

  $('.drawspace').append(coincidence);

}

$('.drawspace').mousemove(function(event) {

  $('.random_phrase').show();

  x = event.pageX;
  y = event.pageY;

  var point = "<div style='top: " + y + "px; left: " + x + "px;' class='point'></div>";

  calculateLocation();

  $('.coincidence').css('top', (randomY - 15)).css('left', (randomX - 20));

  // $('.point').addClass('shift');
  $('.drawspace').append(point);

});

$('.coincidence').mouseenter(function() {
  
  $('.start').hide();
  $('.p').hide();

  calculateLocation();
  
  var randomColor = colors[Math.floor(Math.random()*colors.length)];
  $('.drawspace').css('background-color', randomColor);
  // $('.coincidence').addClass()
  
  // var random_phrase = random_phrases[Math.floor(Math.random()*random_phrases.length)];
  var random_phrase1 = function() {
    var phrase = random_phrases1[Math.floor(Math.random()*random_phrases1.length)];
    return phrase;
  }
  
  var random_phrase2 = function() {
    var phrase = random_phrases2[Math.floor(Math.random()*random_phrases1.length)];
    return phrase;
  }
  
  var random_phrase3 = function() {
    var phrase = random_phrases3[Math.floor(Math.random()*random_phrases1.length)];
    return phrase;
  }
  
  var random_phrase4 = function() {
    var phrase = random_phrases4[Math.floor(Math.random()*random_phrases1.length)];
    return phrase;
  }
  
  var random_pronouns = function() {
    pronoun = random_pronoun[Math.floor(Math.random()*random_pronoun.length)];
  }
  
  random_pronouns();
  
  var random_pronouns_lower = function() {
    pronounLower = pronoun.toLowerCase();
  }
  
  random_pronouns_lower();
  
  $('.random_phrase').html(pronoun + ' ' + random_phrase1() + ', ' + random_phrase2() + ', ' + random_phrase3() + ', ' + pronounLower + ' ' + random_phrase4());

  $('.drawspace').children(':not(.random_phrase, .coincidence)').hide();
  
});

$('.drawspace').click(function() {
  $('.start').show();
  $(this).children(':not(.start, .coincidence)').hide();
  $('.random_phrase').html('');
})

