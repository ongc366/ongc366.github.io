var clicked = false;
//Purpose
var residential = "<div class = 'solidBlack inner roof '></div><div class = 'solidBlack inner base '></div>";
var commercial = "<<div class = 'inner leftbuilding solidBlack'></div><div class = 'inner rightbuilding solidBlack'></div>";

$('.reference').hide();
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

$('.orchard').click(function() {
    if (clicked == false) {
        $('.A4').html(residential);
        $('.D2').html(commercial);
        $('.D1').addClass('emptyBuild');
        clicked = true;
    } else {
        $('.A4').empty();
        $('.D2').empty();
        $('.D1').removeClass('emptyBuild');
        clicked = false;
    }
})
