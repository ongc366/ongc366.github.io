var entered;

var x, y;

var randomX, randomY;

var phrase;

var colors = ['#EBCFC4', '#E9CCB1', '#E8E6D9'];

var random_phrases1 = ['Within a ready blue edge of flow',
                      'At a short kept process',
                      'Between order at effect',
                      'Safe from open experience',
                      'Where they understand the surface'
              ];
              
var random_phrases2 = ['with that true time far away',
                      'with fresh from full gone',
                      'with open conditions at present broken',
                      'with the present well done',
                      'with strong light cut short'
              ];
              
var random_phrases3 = ['outside something sound of sight',
                      'where everything is like something',
                      'over time there is reason',
                      'conditions flow without work',
                      'a silent sense over the particular'
              ];
              
var random_phrases4 = ['a strange voice stretched.',
                      'a warm sight is arrived at.',
                      'a difference themselves.',
                      'a gone good human finally free.',
                      'a voice lost maybe more.'
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
  
  $('.random_phrase').html(random_phrase1() + ', ' + random_phrase2() + ', ' + random_phrase3() + ', ' + random_phrase4());

  $('.drawspace').children(':not(.random_phrase, .coincidence)').hide();
  
});

$('.drawspace').click(function() {
  $('.start').show();
  $(this).children(':not(.start, .coincidence)').hide();
  $('.random_phrase').html('');
})

