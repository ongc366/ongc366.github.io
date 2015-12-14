var entered;

var x, y;

var randomX, randomY;

var colors = ['#EBCFC4', '#E9CCB1', '#E8E6D9'];

var random_phrases = ['Lorem ipsum dolor sit amet, consectetur adipiscing',
               'sed do eiusmod tempor incididunt ut labo',
               'voluptate velit esse cillum dolor',
               'veniam, quis nostrud exer',
               'liquip ex ea commodo consequat. Duis aute irur'
              ];

var calculateLocation = function() {

  var width = $(window).width();
  var height = $(window).height();

  randomX = Math.floor(Math.random()*width);
  randomY = Math.floor(Math.random()*height);

}

$('.random_phrase').hide();

for (var i = 0; i < 40; i++) {

  calculateLocation();

  var coincidence = "<div style = 'top: " + randomY + "px; left: " + randomX + "px;' class = 'coincidence'></div>";

  $('.drawspace').append(coincidence);

}

$('.drawspace').mousemove(function(event) {

  $('.random_phrase').show();

  x = event.pageX;
  y = event.pageY;

  var point = "<div style='top: " + (y - 5) + "px; left: " + (x - 5) + "px;' class='point'></div>";

  calculateLocation();

  $('.coincidence').css('top', randomY).css('left', randomX);

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
  
  var random_phrase = random_phrases[Math.floor(Math.random()*random_phrases.length)];
  $('.random_phrase').html(random_phrase);

  $('.drawspace').children(':not(.random_phrase, .coincidence)').hide();
  
});

$('.drawspace').click(function() {
  $('.start').show();
  $(this).children(':not(.start, .coincidence)').hide();
  $('.random_phrase').html('');
})

