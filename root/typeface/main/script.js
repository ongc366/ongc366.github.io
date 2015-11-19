var clicked = false;

//Status

var empty = "<div class = 'horizontalLine centerLine'></div><div class = 'horizontalLine topLine'></div><div class = 'horizontalLine bottomLine'></div>";

//Purpose

var residential = "<div class = 'solidBlack inner roof '></div><div class = 'solidBlack inner base '></div>";
var commercial = "<<div class = 'inner leftbuilding solidBlack'></div><div class = 'inner rightbuilding solidBlack'></div>";
var residentialcommercial = "<div class = 'inner roof leftComboRoof solidBlack'></div><div class = 'inner roof rightComboRoof solidBlack'></div><div class = 'inner leftbuilding leftComboHeight solidBlack'></div><div class = 'inner rightbuilding rightComboHeight solidBlack'></div>";
var legal = "<div class = 'inner base solidBlack'></div><div class = 'inner circle solidBlack'></div>";
var industrial = "<div class = 'inner chimney solidBlack'></div><div class = 'inner factoryRoof solidBlack'></div><div class = 'inner base factory solidBlack'></div><div class = ' inner shingle solidBlack'></div>";
var religious = "<div class = 'inner solidBlack'></div><div class = 'circle centered solidBlack'></div>";
var government = "<div class = 'inner flag solidBlack'></div><div class = 'inner verticalLine pole solidBlack'></div><div class = 'inner pedestal solidBlack'></div><div class = 'inner base solidBlack'></div>";
var community = "<div class = 'circle communitycircleone solidBlack'></div><div class = 'circle communitycircletwo solidBlack'></div>";

//Scale

var supply = "<div class = 'inner solidBlack'></div><div class = 'inner verticalLine cross rightToLeft solidBlack'></div><div class = 'inner verticalLine cross leftToRight solidBlack'></div>";
var service = "<div class = 'circle solidBlack'></div><div class = 'inner halfcircle solidBlack'></div>";
var retail = "<div class = 'inner bag leftSideBag solidBlack'></div><div class = 'inner bag rightSideBag solidBlack'></div><div class = 'halfcircle handle solidBlack'></div>";
var manufacturing = "<div class = 'circle centered tube tubeRight solidBlack'></div><div class = 'circle centered tube tubeLeft solidBlack'></div><div class = 'inner strip leftSideStrip solidBlack'></div><div class = 'inner strip rightSideStrip solidBlack'></div><div class = 'inner topSideStrip solidBlack'></div>";

//Personality

var medical = "<div class = 'inner medicalCross solidBlack'></div><div class = 'inner medicalCross crossRight solidBlack'></div><div class = 'inner medicalCross crossRight crossLeft solidBlack'></div><div class = 'inner medicalCross crossBottom solidBlack'></div>";
var recreation = "<div class = 'halfcircle handle railTop solidBlack'></div><div class = 'inner step solidBlack'></div><div class = 'inner step stepBottom solidBlack'></div><div class = 'inner slide solidBlack'></div>";
var education = "<div class = 'inner verticalLine dividePage solidBlack'></div><div class = 'inner page leftPage solidBlack'></div><div class = 'inner page rightPage solidBlack'></div>";
var advice = "<div class = 'inner wave firstWave solidBlack'></div><div class = 'inner wave secondWave solidBlack'></div><div class = 'inner wave thirdWave solidBlack'></div><div class = 'circle voice solidBlack'></div>";
var dining = "<div class = 'halfcircle handle railTop utensil solidBlack'></div><div class = 'inner verticalLine pole utensilHandle solidBlack'></div><div class = 'halfcircle handle railTop spoon solidBlack'></div><div class = 'inner verticalLine pole utensilHandle spoonHandle solidBlack'></div>";
var entertainment = "<div class = 'inner roof cup solidBlack'></div><div class = 'inner verticalLine glassstem solidBlack'></div><div class = 'inner cupTop solidBlack'></div>";
var market = "<div class = 'circle head wheel leftwheel groceryLeft solidBlack'></div><div class = 'circle head wheel rightwheel groceryRight solidBlack'></div><div class = 'inner groceryCartBody solidBlack'></div><div class = 'inner groceryCartHandle solidBlack'></div>";
var grooming = "<div class = 'inner brush solidBlack'></div><div class = 'inner bristle bristleTop solidBlack'></div><div class = 'inner bristle bristleCenter solidBlack'></div><div class = 'inner bristle bristleBottom solidBlack'></div>";
var cleaning = "<div class = 'inner verticalLine brushpole solidBlack'></div><div class = 'inner brushbase solidBlack'></div><div class = 'inner verticalLine sweeperBristle solidBlack'></div><div class = 'inner verticalLine sweeperBristle brushtwo solidBlack'></div><div class = 'inner verticalLine sweeperBristle brushthree solidBlack'></div><div class = 'inner verticalLine sweeperBristle brushfour solidBlack'></div><div class = 'inner verticalLine sweeperBristle brushfive solidBlack'></div>";
var promotion = "<div class = 'inner ticket solidBlack'></div><div class = 'inner tear tearone solidBlack'></div><div class = 'inner tear teartwo solidBlack'></div>";
var construction = "<div class = 'inner constructionBuilding solidBlack'></div><div class = 'inner doorway solidBlack'></div><div class = 'inner doorwayLeft solidBlack'></div><div class = 'inner doorwayLeft doorwayRight solidBlack'></div><div class = 'inner brick solidBlack'></div>";
var repair = "<div class = 'inner screwTop solidBlack'></div><div class = 'inner screwStem solidBlack'></div><div class = 'inner screwPoint solidBlack'></div>";
var novelty = "<div class = 'inner circle ribbon solidBlack'></div><div class = 'inner circle ribbon ribbonright solidBlack'></div><div class = 'inner circle endribbon endribbonleft solidBlack'></div><div class = 'inner circle endribbon endribbonright solidBlack'></div>";
var clothing = "<div class = 'inner circle shoulder shirtTop solidBlack'></div><div class = 'inner shirtTopLeft solidBlack'></div><div class = 'inner shirtTopLeft shirtTopRight solidBlack'></div><div class = 'inner shirtLeft solidBlack'></div><div class = 'inner shirtRight solidBlack'></div><div class = 'inner shirtBottom solidBlack'></div>";
var gallery = "<div class = 'inner solidBlack'></div><div class = 'inner frame solidBlack'></div>";
var eventSpace = "<div class = 'circle head personOneHead solidBlack'></div><div class = 'inner secondWave shoulder personOneShoulder solidBlack'></div><div class = 'circle head personTwoHead solidBlack'></div><div class = 'inner secondWave shoulder personTwoShoulder solidBlack'></div>";
var accomodation = "<div class = 'circle head solidBlack'></div><div class = 'inner secondWave shoulder solidBlack'></div><div class = 'inner solidBlack'></div>";
var livingRoom = "<div class = 'inner verticalLine socketone solidBlack'></div><div class = 'inner verticalLine sockettwo solidBlack'></div><div class = 'inner cord solidBlack'></div>";
var transportation = "<div class = 'inner carone solidBlack'></div><div class = 'inner cartwo solidBlack'></div><div class = 'inner carthree solidBlack'></div><div class = 'circle head wheel leftwheel solidBlack'></div><div class = 'circle head wheel rightwheel solidBlack'></div>";

//function calls...

//Troubleshooting Experiment
// $('.orchard').click(function() {
//     if (clicked == false) {
//         $('.street1 .A4').html(residential);
//         $('.street1 .D2').html(commercial);
//         $('.street1 .A1').html(religious);
//         $('.street1 .D1').addClass('emptyBuild');
//         $('.street1 .A3').addClass('expandOnce');
//         $('.street1 .A4').addClass('expandTwice');
//         $('.street1 .B4').html(religious).addClass('forward');
//         $('.street1 .C4').html(religious).addClass('forward');
//         clicked = true;
//     } else {
//         $('.street1 .A1').empty();
//         $('.street1 .A4').empty();
//         $('.street1 .D2').empty();
//         $('.street1 .D1').removeClass('emptyBuild');
//         $('.street .A3').removeClass('expandOnce');
//         $('.street .A4').removeClass('expandTwice');
//         $('.street .B4').empty().removeClass('forward');
//         $('.street1 .C4').empty().removeClass('forward');
//         clicked = false;
//     }
// })

$('.orchardStreet').hide();
$('.eldridgeStreet').hide();

$('.street1 .D21').hide();
$('.street1 .D22').hide();
$('.street1 .E21').hide();
$('.street1 .E22').hide();
$('.street1 .F21').hide();
$('.street1 .F22').hide();

$('.street2 .D21').hide();
$('.street2 .D22').hide();
$('.street2 .E21').hide();
$('.street2 .E22').hide();
$('.street2 .F21').hide();
$('.street2 .F22').hide();

$('.street3 .D21').hide();
$('.street3 .D22').hide();
$('.street3 .E21').hide();
$('.street3 .E22').hide();
$('.street3 .F21').hide();
$('.street3 .F22').hide();

$('.mottStreet').hide();
$('.template .streetName').hide().css('z-index', '-1');

//Orchard Street

$('.orchard').click(function() {
    if (clicked == false) {
        $('.orchardStreet').show();
        $('.orchardStreetName').show().css('z-index', '1');
        $('.hesterStreetName').show().css('z-index', '1');
        $('.grandStreetName').show().css('z-index', '1');
        $('.lefthand').css('background-color', '#C4C4C4');
        
        $('.street1 .A11').hide();
        $('.street1 .A12').hide();
        $('.street1 .A13').hide();
        $('.street1 .A14').hide();
        $('.street1 .A15').hide();
        $('.street1 .A16').hide();
        $('.street1 .A17').hide();
        $('.street1 .A18').hide();
        $('.street1 .A19').hide();
        $('.street1 .A20').hide();
        
        $('.street1 .B11').hide();
        $('.street1 .B12').hide();
        $('.street1 .B13').hide();
        $('.street1 .B14').hide();
        $('.street1 .B15').hide();
        $('.street1 .B16').hide();
        $('.street1 .B17').hide();
        $('.street1 .B18').hide();
        $('.street1 .B19').hide();
        $('.street1 .B20').hide();
        
        $('.street1 .C11').hide();
        $('.street1 .C12').hide();
        $('.street1 .C13').hide();
        $('.street1 .C14').hide();
        $('.street1 .C15').hide();
        $('.street1 .C16').hide();
        $('.street1 .C17').hide();
        $('.street1 .C18').hide();
        $('.street1 .C19').hide();
        $('.street1 .C20').hide();
        
        $('.street1 .D15').hide();
        $('.street1 .D16').hide();
        $('.street1 .D17').hide();
        $('.street1 .D18').hide();
        $('.street1 .D19').hide();
        $('.street1 .D20').hide();
        $('.street1 .D21').hide();
        $('.street1 .D22').hide();
        
        $('.street1 .E15').hide();
        $('.street1 .E16').hide();
        $('.street1 .E17').hide();
        $('.street1 .E18').hide();
        $('.street1 .E19').hide();
        $('.street1 .E20').hide();
        $('.street1 .E21').hide();
        $('.street1 .E22').hide();

        $('.street1 .F15').hide();
        $('.street1 .F16').hide();
        $('.street1 .F17').hide();
        $('.street1 .F18').hide();
        $('.street1 .F19').hide();
        $('.street1 .F20').hide();
        $('.street1 .F21').hide();
        $('.street1 .F22').hide();
        
        $('.street2 .A19').hide();
        $('.street2 .A20').hide();

        $('.street2 .B19').hide();
        $('.street2 .B20').hide();
        
        $('.street2 .C19').hide();
        $('.street2 .C20').hide();
        
        $('.street3 .A6').hide();
        $('.street3 .A7').hide();
        $('.street3 .A8').hide();
        $('.street3 .A9').hide();
        $('.street3 .A10').hide();
        $('.street3 .A11').hide();
        $('.street3 .A12').hide();
        $('.street3 .A13').hide();
        $('.street3 .A14').hide();
        $('.street3 .A15').hide();
        $('.street3 .A16').hide();
        $('.street3 .A17').hide();
        $('.street3 .A18').hide();
        $('.street3 .A19').hide();
        $('.street3 .A20').hide();
        
        $('.street3 .B6').hide();
        $('.street3 .B7').hide();
        $('.street3 .B8').hide();
        $('.street3 .B9').hide();
        $('.street3 .B10').hide();
        $('.street3 .B11').hide();
        $('.street3 .B12').hide();
        $('.street3 .B13').hide();
        $('.street3 .B14').hide();
        $('.street3 .B15').hide();
        $('.street3 .B16').hide();
        $('.street3 .B17').hide();
        $('.street3 .B18').hide();
        $('.street3 .B19').hide();
        $('.street3 .B20').hide();
        
        $('.street3 .C6').hide();
        $('.street3 .C7').hide();
        $('.street3 .C8').hide();
        $('.street3 .C9').hide();
        $('.street3 .C10').hide();
        $('.street3 .C11').hide();
        $('.street3 .C12').hide();
        $('.street3 .C13').hide();
        $('.street3 .C14').hide();
        $('.street3 .C15').hide();
        $('.street3 .C16').hide();
        $('.street3 .C17').hide();
        $('.street3 .C18').hide();
        $('.street3 .C19').hide();
        $('.street3 .C20').hide();
        
        $('.street3 .D5').hide();
        $('.street3 .D6').hide();
        $('.street3 .D7').hide();
        $('.street3 .D8').hide();
        $('.street3 .D9').hide();
        $('.street3 .D10').hide();
        $('.street3 .D11').hide();
        $('.street3 .D12').hide();
        $('.street3 .D13').hide();
        $('.street3 .D14').hide();
        $('.street3 .D15').hide();
        $('.street3 .D16').hide();
        $('.street3 .D17').hide();
        $('.street3 .D18').hide();
        $('.street3 .D19').hide();
        $('.street3 .D20').hide();
        $('.street3 .D21').hide();
        $('.street3 .D22').hide();
        
        $('.street3 .E5').hide();
        $('.street3 .E6').hide();
        $('.street3 .E7').hide();
        $('.street3 .E8').hide();
        $('.street3 .E9').hide();
        $('.street3 .E10').hide();
        $('.street3 .E11').hide();
        $('.street3 .E12').hide();
        $('.street3 .E13').hide();
        $('.street3 .E14').hide();
        $('.street3 .E15').hide();
        $('.street3 .E16').hide();
        $('.street3 .E17').hide();
        $('.street3 .E18').hide();
        $('.street3 .E19').hide();
        $('.street3 .E20').hide();
        $('.street3 .E21').hide();
        $('.street3 .E22').hide();
        
        $('.street3 .F5').hide();
        $('.street3 .F6').hide();
        $('.street3 .F7').hide();
        $('.street3 .F8').hide();
        $('.street3 .F9').hide();
        $('.street3 .F10').hide();
        $('.street3 .F11').hide();
        $('.street3 .F12').hide();
        $('.street3 .F13').hide();
        $('.street3 .F14').hide();
        $('.street3 .F15').hide();
        $('.street3 .F16').hide();
        $('.street3 .F17').hide();
        $('.street3 .F18').hide();
        $('.street3 .F19').hide();
        $('.street3 .E20').hide();
        $('.street3 .E21').hide();
        $('.street3 .E22').hide();
        
        $('.street2 .street').css('top', '1640px');
        $('.street3 .street').css('top', '3970px')
        
        
        clicked = true;
    } else {
        $('.orchardStreet').hide();
        $('.orchardStreetName').hide();
        $('.hesterStreetName').hide();
        $('.grandStreetName').hide();
        $('.lefthand').css('background-color', '#E8E8E8');
        
        $('.street1 .A11').show();
        $('.street1 .A12').show();
        $('.street1 .A13').show();
        $('.street1 .A14').show();
        $('.street1 .A15').show();
        $('.street1 .A16').show();
        $('.street1 .A17').show();
        $('.street1 .A18').show();
        $('.street1 .A19').show();
        $('.street1 .A20').show();
        
        $('.street1 .B11').show();
        $('.street1 .B12').show();
        $('.street1 .B13').show();
        $('.street1 .B14').show();
        $('.street1 .B15').show();
        $('.street1 .B16').show();
        $('.street1 .B17').show();
        $('.street1 .B18').show();
        $('.street1 .B19').show();
        $('.street1 .B20').show();
        
        $('.street1 .C11').show();
        $('.street1 .C12').show();
        $('.street1 .C13').show();
        $('.street1 .C14').show();
        $('.street1 .C15').show();
        $('.street1 .C16').show();
        $('.street1 .C17').show();
        $('.street1 .C18').show();
        $('.street1 .C19').show();
        $('.street1 .C20').show();
        
        $('.street1 .D15').show();
        $('.street1 .D16').show();
        $('.street1 .D17').show();
        $('.street1 .D18').show();
        $('.street1 .D19').show();
        $('.street1 .D20').show();
        
        $('.street1 .E15').show();
        $('.street1 .E16').show();
        $('.street1 .E17').show();
        $('.street1 .E18').show();
        $('.street1 .E19').show();
        $('.street1 .E20').show();

        $('.street1 .F15').show();
        $('.street1 .F16').show();
        $('.street1 .F17').show();
        $('.street1 .F18').show();
        $('.street1 .F19').show();
        $('.street1 .F20').show();
        
        $('.street2 .A19').show();
        $('.street2 .A20').show();

        $('.street2 .B19').show();
        $('.street2 .B20').show();
        
        $('.street2 .C19').show();
        $('.street2 .C20').show();
        
        $('.street3 .A6').show();
        $('.street3 .A7').show();
        $('.street3 .A8').show();
        $('.street3 .A9').show();
        $('.street3 .A10').show();
        $('.street3 .A11').show();
        $('.street3 .A12').show();
        $('.street3 .A13').show();
        $('.street3 .A14').show();
        $('.street3 .A15').show();
        $('.street3 .A16').show();
        $('.street3 .A17').show();
        $('.street3 .A18').show();
        $('.street3 .A19').show();
        $('.street3 .A20').show();
        
        $('.street3 .B6').show();
        $('.street3 .B7').show();
        $('.street3 .B8').show();
        $('.street3 .B9').show();
        $('.street3 .B10').show();
        $('.street3 .B11').show();
        $('.street3 .B12').show();
        $('.street3 .B13').show();
        $('.street3 .B14').show();
        $('.street3 .B15').show();
        $('.street3 .B16').show();
        $('.street3 .B17').show();
        $('.street3 .B18').show();
        $('.street3 .B19').show();
        $('.street3 .B20').show();
        
        $('.street3 .C6').show();
        $('.street3 .C7').show();
        $('.street3 .C8').show();
        $('.street3 .C9').show();
        $('.street3 .C10').show();
        $('.street3 .C11').show();
        $('.street3 .C12').show();
        $('.street3 .C13').show();
        $('.street3 .C14').show();
        $('.street3 .C15').show();
        $('.street3 .C16').show();
        $('.street3 .C17').show();
        $('.street3 .C18').show();
        $('.street3 .C19').show();
        $('.street3 .C20').show();
        
        $('.street3 .D5').show();
        $('.street3 .D6').show();
        $('.street3 .D7').show();
        $('.street3 .D8').show();
        $('.street3 .D9').show();
        $('.street3 .D10').show();
        $('.street3 .D11').show();
        $('.street3 .D12').show();
        $('.street3 .D13').show();
        $('.street3 .D14').show();
        $('.street3 .D15').show();
        $('.street3 .D16').show();
        $('.street3 .D17').show();
        $('.street3 .D18').show();
        $('.street3 .D19').show();
        $('.street3 .D20').show();
        
        $('.street3 .E5').show();
        $('.street3 .E6').show();
        $('.street3 .E7').show();
        $('.street3 .E8').show();
        $('.street3 .E9').show();
        $('.street3 .E10').show();
        $('.street3 .E11').show();
        $('.street3 .E12').show();
        $('.street3 .E13').show();
        $('.street3 .E14').show();
        $('.street3 .E15').show();
        $('.street3 .E16').show();
        $('.street3 .E17').show();
        $('.street3 .E18').show();
        $('.street3 .E19').show();
        $('.street3 .E20').show();
        
        $('.street3 .F5').show();
        $('.street3 .F6').show();
        $('.street3 .F7').show();
        $('.street3 .F8').show();
        $('.street3 .F9').show();
        $('.street3 .F10').show();
        $('.street3 .F11').show();
        $('.street3 .F12').show();
        $('.street3 .F13').show();
        $('.street3 .F14').show();
        $('.street3 .F15').show();
        $('.street3 .F16').show();
        $('.street3 .F17').show();
        $('.street3 .F18').show();
        $('.street3 .F19').show();
        $('.street3 .F20').show();
        
        $('.street2 .street').css('top', '2330px');
        $('.street3 .street').css('top', '4660px')
        
        clicked = false;
    }
})

//Eldridge Street

$('.eldridge').click(function() {
    if (clicked == false) {
        $('.eldridgeStreet').show();
        $('.eldridgeStreetName').show().css('z-index', '1');;
        $('.canalStreetName').show().css('z-index', '1');;
        $('.divisionStreetName').show().css('z-index', '1');;
        $('.lefthand').css('background-color', '#C4C4C4');
        
        $('.street1 .A18').hide();
        $('.street1 .A19').hide();
        $('.street1 .A20').hide();
        
        $('.street1 .B18').hide();
        $('.street1 .B19').hide();
        $('.street1 .B20').hide();
        
        $('.street1 .C18').hide();
        $('.street1 .C19').hide();
        $('.street1 .C20').hide();
        
        $('.street1 .D5').hide();
        $('.street1 .D6').hide();
        $('.street1 .D7').hide();
        $('.street1 .D8').hide();
        $('.street1 .D9').hide();
        $('.street1 .D10').hide();
        $('.street1 .D11').hide();
        $('.street1 .D12').hide();
        $('.street1 .D13').hide();
        $('.street1 .D14').hide();
        $('.street1 .D15').hide();
        $('.street1 .D16').hide();
        $('.street1 .D17').hide();
        $('.street1 .D18').hide();
        $('.street1 .D19').hide();
        $('.street1 .D20').hide();
        
        $('.street1 .E5').hide();
        $('.street1 .E6').hide();
        $('.street1 .E7').hide();
        $('.street1 .E8').hide();
        $('.street1 .E9').hide();
        $('.street1 .E10').hide();
        $('.street1 .E11').hide();
        $('.street1 .E12').hide();
        $('.street1 .E13').hide();
        $('.street1 .E14').hide();
        $('.street1 .E15').hide();
        $('.street1 .E16').hide();
        $('.street1 .E17').hide();
        $('.street1 .E18').hide();
        $('.street1 .E19').hide();
        $('.street1 .E20').hide();
        
        $('.street1 .F5').hide();
        $('.street1 .F6').hide();
        $('.street1 .F7').hide();
        $('.street1 .F8').hide();
        $('.street1 .F9').hide();
        $('.street1 .F10').hide();
        $('.street1 .F11').hide();
        $('.street1 .F12').hide();
        $('.street1 .F13').hide();
        $('.street1 .F14').hide();
        $('.street1 .F15').hide();
        $('.street1 .F16').hide();
        $('.street1 .F17').hide();
        $('.street1 .F18').hide();
        $('.street1 .F19').hide();
        $('.street1 .F20').hide();
        
        $('.street2 .A16').hide();
        $('.street2 .A17').hide();
        $('.street2 .A18').hide();
        $('.street2 .A19').hide();
        $('.street2 .A20').hide();
        
        $('.street2 .B16').hide();
        $('.street2 .B17').hide();
        $('.street2 .B18').hide();
        $('.street2 .B19').hide();
        $('.street2 .B20').hide();
        
        $('.street2 .C16').hide();
        $('.street2 .C17').hide();
        $('.street2 .C18').hide();
        $('.street2 .C19').hide();
        $('.street2 .C20').hide();
        
        $('.street3 .A8').hide();
        $('.street3 .A9').hide();
        $('.street3 .A10').hide();
        $('.street3 .A11').hide();
        $('.street3 .A12').hide();
        $('.street3 .A13').hide();
        $('.street3 .A14').hide();
        $('.street3 .A15').hide();
        $('.street3 .A16').hide();
        $('.street3 .A17').hide();
        $('.street3 .A18').hide();
        $('.street3 .A19').hide();
        $('.street3 .A20').hide();
        
        $('.street3 .B8').hide();
        $('.street3 .B9').hide();
        $('.street3 .B10').hide();
        $('.street3 .B11').hide();
        $('.street3 .B12').hide();
        $('.street3 .B13').hide();
        $('.street3 .B14').hide();
        $('.street3 .B15').hide();
        $('.street3 .B16').hide();
        $('.street3 .B17').hide();
        $('.street3 .B18').hide();
        $('.street3 .B19').hide();
        $('.street3 .B20').hide();
        
        $('.street3 .C8').hide();
        $('.street3 .C9').hide();
        $('.street3 .C10').hide();
        $('.street3 .C11').hide();
        $('.street3 .C12').hide();
        $('.street3 .C13').hide();
        $('.street3 .C14').hide();
        $('.street3 .C15').hide();
        $('.street3 .C16').hide();
        $('.street3 .C17').hide();
        $('.street3 .C18').hide();
        $('.street3 .C19').hide();
        $('.street3 .C20').hide();
        
        $('.street3 .D1').hide();
        $('.street3 .D2').hide();
        $('.street3 .D3').hide();
        $('.street3 .D4').hide();
        $('.street3 .D5').hide();
        $('.street3 .D6').hide();
        $('.street3 .D7').hide();
        $('.street3 .D8').hide();
        $('.street3 .D9').hide();
        $('.street3 .D10').hide();
        $('.street3 .D11').hide();
        $('.street3 .D12').hide();
        $('.street3 .D13').hide();
        $('.street3 .D14').hide();
        $('.street3 .D15').hide();
        $('.street3 .D16').hide();
        $('.street3 .D17').hide();
        $('.street3 .D18').hide();
        $('.street3 .D19').hide();
        $('.street3 .D20').hide();
        
        $('.street3 .E1').hide();
        $('.street3 .E2').hide();
        $('.street3 .E3').hide();
        $('.street3 .E4').hide();
        $('.street3 .E5').hide();
        $('.street3 .E6').hide();
        $('.street3 .E7').hide();
        $('.street3 .E8').hide();
        $('.street3 .E9').hide();
        $('.street3 .E10').hide();
        $('.street3 .E11').hide();
        $('.street3 .E12').hide();
        $('.street3 .E13').hide();
        $('.street3 .E14').hide();
        $('.street3 .E15').hide();
        $('.street3 .E16').hide();
        $('.street3 .E17').hide();
        $('.street3 .E18').hide();
        $('.street3 .E19').hide();
        $('.street3 .E20').hide();
        
        $('.street3 .F2').hide();
        $('.street3 .F3').hide();
        $('.street3 .F4').hide();
        $('.street3 .F5').hide();
        $('.street3 .F6').hide();
        $('.street3 .F7').hide();
        $('.street3 .F8').hide();
        $('.street3 .F9').hide();
        $('.street3 .F10').hide();
        $('.street3 .F11').hide();
        $('.street3 .F12').hide();
        $('.street3 .F13').hide();
        $('.street3 .F14').hide();
        $('.street3 .F15').hide();
        $('.street3 .F16').hide();
        $('.street3 .F17').hide();
        $('.street3 .F18').hide();
        $('.street3 .F19').hide();
        $('.street3 .F20').hide();
        
        $('.street2 .street').css('top', '1980px');
        $('.street3 .street').css('top', '4310px');
        
        clicked = true;
    } else {
        $('.eldridgeStreet').hide();
        $('.eldridgeStreetName').hide().css('z-index', '1');;
        $('.canalStreetName').hide().css('z-index', '1');;
        $('.divisionStreetName').hide().css('z-index', '1');;
        $('.lefthand').css('background-color', '#E8E8E8');
        
        $('.street1 .A18').show();
        $('.street1 .A19').show();
        $('.street1 .A20').show();
        
        $('.street1 .B18').show();
        $('.street1 .B19').show();
        $('.street1 .B20').show();
        
        $('.street1 .C18').show();
        $('.street1 .C19').show();
        $('.street1 .C20').show();
        
        $('.street1 .D5').show();
        $('.street1 .D6').show();
        $('.street1 .D7').show();
        $('.street1 .D8').show();
        $('.street1 .D9').show();
        $('.street1 .D10').show();
        $('.street1 .D11').show();
        $('.street1 .D12').show();
        $('.street1 .D13').show();
        $('.street1 .D14').show();
        $('.street1 .D15').show();
        $('.street1 .D16').show();
        $('.street1 .D17').show();
        $('.street1 .D18').show();
        $('.street1 .D19').show();
        $('.street1 .D20').show();
        
        $('.street1 .E5').show();
        $('.street1 .E6').show();
        $('.street1 .E7').show();
        $('.street1 .E8').show();
        $('.street1 .E9').show();
        $('.street1 .E10').show();
        $('.street1 .E11').show();
        $('.street1 .E12').show();
        $('.street1 .E13').show();
        $('.street1 .E14').show();
        $('.street1 .E15').show();
        $('.street1 .E16').show();
        $('.street1 .E17').show();
        $('.street1 .E18').show();
        $('.street1 .E19').show();
        $('.street1 .E20').show();
        
        $('.street1 .F5').show();
        $('.street1 .F6').show();
        $('.street1 .F7').show();
        $('.street1 .F8').show();
        $('.street1 .F9').show();
        $('.street1 .F10').show();
        $('.street1 .F11').show();
        $('.street1 .F12').show();
        $('.street1 .F13').show();
        $('.street1 .F14').show();
        $('.street1 .F15').show();
        $('.street1 .F16').show();
        $('.street1 .F17').show();
        $('.street1 .F18').show();
        $('.street1 .F19').show();
        $('.street1 .F20').show();
        
        $('.street2 .A16').show();
        $('.street2 .A17').show();
        $('.street2 .A18').show();
        $('.street2 .A19').show();
        $('.street2 .A20').show();
        
        $('.street2 .B16').show();
        $('.street2 .B17').show();
        $('.street2 .B18').show();
        $('.street2 .B19').show();
        $('.street2 .B20').show();
        
        $('.street2 .C16').show();
        $('.street2 .C17').show();
        $('.street2 .C18').show();
        $('.street2 .C19').show();
        $('.street2 .C20').show();
        
        $('.street3 .A8').show();
        $('.street3 .A9').show();
        $('.street3 .A10').show();
        $('.street3 .A11').show();
        $('.street3 .A12').show();
        $('.street3 .A13').show();
        $('.street3 .A14').show();
        $('.street3 .A15').show();
        $('.street3 .A16').show();
        $('.street3 .A17').show();
        $('.street3 .A18').show();
        $('.street3 .A19').show();
        $('.street3 .A20').show();
        
        $('.street3 .B8').show();
        $('.street3 .B9').show();
        $('.street3 .B10').show();
        $('.street3 .B11').show();
        $('.street3 .B12').show();
        $('.street3 .B13').show();
        $('.street3 .B14').show();
        $('.street3 .B15').show();
        $('.street3 .B16').show();
        $('.street3 .B17').show();
        $('.street3 .B18').show();
        $('.street3 .B19').show();
        $('.street3 .B20').show();
        
        $('.street3 .C8').show();
        $('.street3 .C9').show();
        $('.street3 .C10').show();
        $('.street3 .C11').show();
        $('.street3 .C12').show();
        $('.street3 .C13').show();
        $('.street3 .C14').show();
        $('.street3 .C15').show();
        $('.street3 .C16').show();
        $('.street3 .C17').show();
        $('.street3 .C18').show();
        $('.street3 .C19').show();
        $('.street3 .C20').show();
        
        $('.street3 .D1').show();
        $('.street3 .D2').show();
        $('.street3 .D3').show();
        $('.street3 .D4').show();
        $('.street3 .D5').show();
        $('.street3 .D6').show();
        $('.street3 .D7').show();
        $('.street3 .D8').show();
        $('.street3 .D9').show();
        $('.street3 .D10').show();
        $('.street3 .D11').show();
        $('.street3 .D12').show();
        $('.street3 .D13').show();
        $('.street3 .D14').show();
        $('.street3 .D15').show();
        $('.street3 .D16').show();
        $('.street3 .D17').show();
        $('.street3 .D18').show();
        $('.street3 .D19').show();
        $('.street3 .D20').show();
        
        $('.street3 .E1').show();
        $('.street3 .E2').show();
        $('.street3 .E3').show();
        $('.street3 .E4').show();
        $('.street3 .E5').show();
        $('.street3 .E6').show();
        $('.street3 .E7').show();
        $('.street3 .E8').show();
        $('.street3 .E9').show();
        $('.street3 .E10').show();
        $('.street3 .E11').show();
        $('.street3 .E12').show();
        $('.street3 .E13').show();
        $('.street3 .E14').show();
        $('.street3 .E15').show();
        $('.street3 .E16').show();
        $('.street3 .E17').show();
        $('.street3 .E18').show();
        $('.street3 .E19').show();
        $('.street3 .E20').show();
        
        $('.street3 .F2').show();
        $('.street3 .F3').show();
        $('.street3 .F4').show();
        $('.street3 .F5').show();
        $('.street3 .F6').show();
        $('.street3 .F7').show();
        $('.street3 .F8').show();
        $('.street3 .F9').show();
        $('.street3 .F10').show();
        $('.street3 .F11').show();
        $('.street3 .F12').show();
        $('.street3 .F13').show();
        $('.street3 .F14').show();
        $('.street3 .F15').show();
        $('.street3 .F16').show();
        $('.street3 .F17').show();
        $('.street3 .F18').show();
        $('.street3 .F19').show();
        $('.street3 .F20').show();
        
        $('.street2 .street').css('top', '2330px');
        $('.street3 .street').css('top', '4660px')
        
        clicked = false;
    }
})

//Mott Street 

$('.mott').click(function() {
    if (clicked == false) {
        $('.mottStreet').show();
        $('.mottStreetName').show().css('z-index', '1');
        $('.bayardStreetName').show().css('z-index', '1');
        $('.moscoStreetName').show().css('z-index', '1');
        $('.lefthand').css('background-color', '#C4C4C4');
        
        $('.street1 .A18').hide();
        $('.street1 .A19').hide();
        $('.street1 .A20').hide();

        $('.street1 .B18').hide();
        $('.street1 .B19').hide();
        $('.street1 .B20').hide();
        
        $('.street1 .C18').hide();
        $('.street1 .C19').hide();
        $('.street1 .C20').hide();
        
        $('.street1 .D21').show();
        $('.street1 .D22').show();
        
        $('.street1 .E21').show();
        $('.street1 .E22').show();
        
        $('.street1 .F21').show();
        $('.street1 .F22').show();
        
        $('.street2 .A18').hide();
        $('.street2 .A19').hide();
        $('.street2 .A20').hide();

        $('.street2 .B18').hide();
        $('.street2 .B19').hide();
        $('.street2 .B20').hide();
        
        $('.street2 .C18').hide();
        $('.street2 .C19').hide();
        $('.street2 .C20').hide();
        
        $('.street2 .D16').hide();
        $('.street2 .D17').hide();
        $('.street2 .D18').hide();
        $('.street2 .D19').hide();
        $('.street2 .D20').hide();
        
        $('.street2 .E16').hide();
        $('.street2 .E17').hide();
        $('.street2 .E18').hide();
        $('.street2 .E19').hide();
        $('.street2 .E20').hide();
        
        $('.street2 .F16').hide();
        $('.street2 .F17').hide();
        $('.street2 .F18').hide();
        $('.street2 .F19').hide();
        $('.street2 .F20').hide();
        
        $('.street3 .A12').hide();
        $('.street3 .A13').hide();
        $('.street3 .A14').hide();
        $('.street3 .A15').hide();
        $('.street3 .A16').hide();
        $('.street3 .A17').hide();
        $('.street3 .A18').hide();
        $('.street3 .A19').hide();
        $('.street3 .A20').hide();
        
        $('.street3 .B12').hide();
        $('.street3 .B13').hide();
        $('.street3 .B14').hide();
        $('.street3 .B15').hide();
        $('.street3 .B16').hide();
        $('.street3 .B17').hide();
        $('.street3 .B18').hide();
        $('.street3 .B19').hide();
        $('.street3 .B20').hide();
        
        $('.street3 .C12').hide();
        $('.street3 .C13').hide();
        $('.street3 .C14').hide();
        $('.street3 .C15').hide();
        $('.street3 .C16').hide();
        $('.street3 .C17').hide();
        $('.street3 .C18').hide();
        $('.street3 .C19').hide();
        $('.street3 .C20').hide();
        
        $('.street3 .D13').hide();
        $('.street3 .D14').hide();
        $('.street3 .D15').hide();
        $('.street3 .D16').hide();
        $('.street3 .D17').hide();
        $('.street3 .D18').hide();
        $('.street3 .D19').hide();
        $('.street3 .D20').hide();
        
        $('.street3 .E13').hide();
        $('.street3 .E14').hide();
        $('.street3 .E15').hide();
        $('.street3 .E16').hide();
        $('.street3 .E17').hide();
        $('.street3 .E18').hide();
        $('.street3 .E19').hide();
        $('.street3 .E20').hide();
        
        $('.street3 .F13').hide();
        $('.street3 .F14').hide();
        $('.street3 .F15').hide();
        $('.street3 .F16').hide();
        $('.street3 .F17').hide();
        $('.street3 .F18').hide();
        $('.street3 .F19').hide();
        $('.street3 .F20').hide();
        
        $('.street2 .street').css('top', '2555px');
        $('.street3 .street').css('top', '4535px');
        
        clicked = true;
    } else {
        $('.lefthand').css('background-color', '#E8E8E8');
        $('.mottStreet').hide();
        $('.mottStreetName').hide().css('z-index', '1');
        $('.bayardStreetName').hide().css('z-index', '1');
        $('.moscoStreetName').hide().css('z-index', '1');
        
        $('.street1 .A18').show();
        $('.street1 .A19').show();
        $('.street1 .A20').show();

        $('.street1 .B18').show();
        $('.street1 .B19').show();
        $('.street1 .B20').show();
        
        $('.street1 .C18').show();
        $('.street1 .C19').show();
        $('.street1 .C20').show();
        
        $('.street1 .D21').hide();
        $('.street1 .D22').hide();
        
        $('.street1 .E21').hide();
        $('.street1 .E22').hide();
        
        $('.street1 .F21').hide();
        $('.street1 .F22').hide();
        
        $('.street2 .A18').show();
        $('.street2 .A19').show();
        $('.street2 .A20').show();

        $('.street2 .B18').show();
        $('.street2 .B19').show();
        $('.street2 .B20').show();
        
        $('.street2 .C18').show();
        $('.street2 .C19').show();
        $('.street2 .C20').show();
        
        $('.street2 .D16').show();
        $('.street2 .D17').show();
        $('.street2 .D18').show();
        $('.street2 .D19').show();
        $('.street2 .D20').show();
        
        $('.street2 .E16').show();
        $('.street2 .E17').show();
        $('.street2 .E18').show();
        $('.street2 .E19').show();
        $('.street2 .E20').show();
        
        $('.street2 .F16').show();
        $('.street2 .F17').show();
        $('.street2 .F18').show();
        $('.street2 .F19').show();
        $('.street2 .F20').show();
        
        $('.street3 .A12').show();
        $('.street3 .A13').show();
        $('.street3 .A14').show();
        $('.street3 .A15').show();
        $('.street3 .A16').show();
        $('.street3 .A17').show();
        $('.street3 .A18').show();
        $('.street3 .A19').show();
        $('.street3 .A20').show();
        
        $('.street3 .B12').show();
        $('.street3 .B13').show();
        $('.street3 .B14').show();
        $('.street3 .B15').show();
        $('.street3 .B16').show();
        $('.street3 .B17').show();
        $('.street3 .B18').show();
        $('.street3 .B19').show();
        $('.street3 .B20').show();
        
        $('.street3 .C12').show();
        $('.street3 .C13').show();
        $('.street3 .C14').show();
        $('.street3 .C15').show();
        $('.street3 .C16').show();
        $('.street3 .C17').show();
        $('.street3 .C18').show();
        $('.street3 .C19').show();
        $('.street3 .C20').show();
        
        $('.street3 .D13').show();
        $('.street3 .D14').show();
        $('.street3 .D15').show();
        $('.street3 .D16').show();
        $('.street3 .D17').show();
        $('.street3 .D18').show();
        $('.street3 .D19').show();
        $('.street3 .D20').show();
        
        $('.street3 .E13').show();
        $('.street3 .E14').show();
        $('.street3 .E15').show();
        $('.street3 .E16').show();
        $('.street3 .E17').show();
        $('.street3 .E18').show();
        $('.street3 .E19').show();
        $('.street3 .E20').show();
        
        $('.street3 .F13').show();
        $('.street3 .F14').show();
        $('.street3 .F15').show();
        $('.street3 .F16').show();
        $('.street3 .F17').show();
        $('.street3 .F18').show();
        $('.street3 .F19').show();
        $('.street3 .F20').show();
        
        $('.street2 .street').css('top', '2330px');
        $('.street3 .street').css('top', '4660px')
        clicked = false;
    }
})