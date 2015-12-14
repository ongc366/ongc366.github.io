var hovered = false;
var clicked = false;

$('.left').mouseenter(function() {
  $('.left').css('width', '90%');
  $('.right').css('width', '10%').css('left', '90%');
  hovered = true;
  console.log(hovered);
})

$('.left').mouseleave(function() {
  $('.left').css('width', '50%');
  $('.right').css('width', '50%').css('left', '50%');
  hovered = false;
  console.log(hovered);
})

$('.right').mouseenter(function() {
  $('.right').css('width', '90%');
  $('.right').css('left', '10%')
  $('.left').css('width', '10%');
  hovered = true;
  console.log(hovered);
})

$('.right').mouseleave(function() {
  $('.left').css('width', '50%');
  $('.right').css('width', '50%').css('left', '50%');
  hovered = false;
  console.log(hovered);
})

$('.who').click(function() {
  $('.whoLink').html('ongc366');
  $('.whoLink').css('left', '34%');
})

var entered = false;;

$('.what').click(function() {
  $('.main').css('height', '25%');
})

$('.studio').click(function() {
  $('.main').css('height', '25%');
  $('.classes').css('height', '25%');
  $('.classes').css('top', '25%');
})

$('.lab').click(function() {
  $('.main').css('height', '25%');
  $('.classes').css('height', '25%');
  $('.classes').css('top', '25%');
})
