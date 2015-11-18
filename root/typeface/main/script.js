var clicked = false;
//Purpose
var residential = "<div class = 'solidBlack inner roof '></div><div class = 'solidBlack inner base '></div>";
var commercial = "<<div class = 'inner leftbuilding solidBlack'></div><div class = 'inner rightbuilding solidBlack'></div>";
var residentialcommercial = "<div class = 'inner roof leftComboRoof solidBlack'></div><div class = 'inner roof rightComboRoof solidBlack'></div><div class = 'inner leftbuilding leftComboHeight solidBlack'></div><div class = 'inner rightbuilding rightComboHeight solidBlack'></div>";
var legal = "<div class = 'inner base solidBlack'></div><div class = 'inner circle solidBlack'></div>";
var industrial = "<div class = 'inner chimney solidBlack'></div><div class = 'inner factoryRoof solidBlack'></div><div class = 'inner base factory solidBlack'></div><div class = ' inner shingle solidBlack'></div>";
var religious = "<div class = 'inner solidBlack'></div><div class = 'circle centered solidBlack'></div>";
var government = "<div class = 'inner flag solidBlack'></div><div class = 'inner verticalLine pole solidBlack'></div><div class = 'inner pedestal solidBlack'></div><div class = 'inner base solidBlack'></div>";
var community = "<div class = 'circle communitycircleone solidBlack'></div><div class = 'circle communitycircletwo solidBlack'></div>"

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
        $('.A1').html(religious);
        $('.D1').addClass('emptyBuild');
        clicked = true;
    } else {
        $('.A1').empty();
        $('.A4').empty();
        $('.D2').empty();
        $('.D1').removeClass('emptyBuild');
        clicked = false;
    }
})