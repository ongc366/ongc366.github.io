var clicked = false;

$('.reference').hide();
$('.canalStreet').hide();
$('.grandStreet').hide();
$('.streetname').hide();

$('.guideButton').click(function() {
    if (clicked == false) {
        $('.reference').show();
        clicked = true;
    } else {
        $('.reference').hide();
        clicked = false;
    }
})

$('.special').click(function() {
    if (clicked == false) {
        $('.school').addClass('highlight');
        clicked = true;
    } else {
        $('.school').removeClass('highlight');
        clicked = false;
    }
})

$('.grand').click(function() {
    if (clicked == false) {
        $('.template').hide();
        clicked = true;
    } else {
        $('.template').show();
        clicked = false;
    }
})