var clickedWho = false;
var clickedWhat = false;

$('.who').click(function() {
  if(clickedWho == false) {
    $('.who').css('width', '50%').css('height', '5%');
    $('.what').css('width', '50%');
    $('.left').removeClass('back');
    clickedWho = true;
  } else if (clickedWho == true){
    $('.who').css('height', '100%');
    $('.left').addClass('back');
    clickedWho = false;
  }
})

$('.what').click(function() {
  if (clickedWhat == false) {
    $('.who').css('width', '0%');
    $('.who .label').addClass('back');
    $('.what').css('z-index', '1');
    $('.left').addClass('back');
    $('.right').removeClass('back');
    clickedWhat = true;
  } else if (clickedWhat == true) {
    $('.who').css('width', '50%');
    $('.who .label').removeClass('back');
    $('.what').css('z-index', '1');
    $('.what .label').css('z-index', '2');
    $('.right').addClass('back');
    $('.left').addClass('back');
    clickedWhat = false;
  }
})