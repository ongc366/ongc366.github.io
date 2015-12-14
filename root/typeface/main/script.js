var clicked = false;

//Status

var empty = "<div class = 'empty'><div class = 'horizontalLine centerLine'></div><div class = 'horizontalLine topLine'></div><div class = 'horizontalLine bottomLine'></div></div>";

//Purpose

var residential = "<div class = 'residential'><div class = 'solidBlack inner roof '></div><div class = 'solidBlack inner base '></div></div>";
var commercial = "<div class = 'commercial'><div class = 'inner leftbuilding solidBlack'></div><div class = 'inner rightbuilding solidBlack'></div></div>";
var residentialcommercial = "<div class = 'residentialcommercial'><div class = 'inner roof leftComboRoof solidBlack'></div><div class = 'inner roof rightComboRoof solidBlack'></div><div class = 'inner leftbuilding leftComboHeight solidBlack'></div><div class = 'inner rightbuilding rightComboHeight solidBlack'></div></div>";
var legal = "<div class = 'legal'><div class = 'inner base solidBlack'></div><div class = 'inner circle solidBlack'></div></div>";
var industrial = "<div class = 'industrial'><div class = 'inner chimney solidBlack'></div><div class = 'inner factoryRoof solidBlack'></div><div class = 'inner base factory solidBlack'></div><div class = ' inner shingle solidBlack'></div></div>";
var religious = "<div class = 'religious'><div class = 'inner solidBlack'></div><div class = 'circle centered solidBlack'></div></div>";
var government = "<div class = 'government'><div class = 'inner flag solidBlack'></div><div class = 'inner verticalLine pole solidBlack'></div><div class = 'inner pedestal solidBlack'></div><div class = 'inner base solidBlack'></div></div>";
var community = "<div class = 'community'><div class = 'circle communitycircleone solidBlack'></div><div class = 'circle communitycircletwo solidBlack'></div></div>";

//Scale

var supply = "<div class = 'supply'><div class = 'inner solidBlack'></div><div class = 'inner verticalLine cross rightToLeft solidBlack'></div><div class = 'inner verticalLine cross leftToRight solidBlack'></div></div>";
var service = "<div class = 'service'><div class = 'circle solidBlack'></div><div class = 'inner halfcircle solidBlack'></div></div>";
var retail = "<div class = 'retail'><div class = 'inner bag leftSideBag solidBlack'></div><div class = 'inner bag rightSideBag solidBlack'></div><div class = 'halfcircle handle solidBlack'></div></div>";
var manufacturing = "<div class = 'manufacturing'><div class = 'circle centered tube tubeRight solidBlack'></div><div class = 'circle centered tube tubeLeft solidBlack'></div><div class = 'inner strip leftSideStrip solidBlack'></div><div class = 'inner strip rightSideStrip solidBlack'></div><div class = 'inner topSideStrip solidBlack'></div></div>";

//Personality

var medical = "<div class = 'medical'><div class = 'inner medicalCross solidBlack'></div><div class = 'inner medicalCross crossRight solidBlack'></div><div class = 'inner medicalCross crossRight crossLeft solidBlack'></div><div class = 'inner medicalCross crossBottom solidBlack'></div></div>";
var recreation = "<div class = 'recreation'><div class = 'halfcircle handle railTop solidBlack'></div><div class = 'inner step solidBlack'></div><div class = 'inner step stepBottom solidBlack'></div><div class = 'inner slide solidBlack'></div></div>";
var education = "<div class = 'education'><div class = 'inner verticalLine dividePage solidBlack'></div><div class = 'inner page leftPage solidBlack'></div><div class = 'inner page rightPage solidBlack'></div></div>";
var advice = "<div class = 'advice'><div class = 'inner wave firstWave solidBlack'></div><div class = 'inner wave secondWave solidBlack'></div><div class = 'inner wave thirdWave solidBlack'></div><div class = 'circle voice solidBlack'></div></div>";
var dining = "<div class = 'dining'><div class = 'halfcircle handle railTop utensil solidBlack'></div><div class = 'inner verticalLine pole utensilHandle solidBlack'></div><div class = 'halfcircle handle railTop spoon solidBlack'></div><div class = 'inner verticalLine pole utensilHandle spoonHandle solidBlack'></div></div>";
var entertainment = "<div class = 'entertainment'><div class = 'inner roof cup solidBlack'></div><div class = 'inner verticalLine glassstem solidBlack'></div><div class = 'inner cupTop solidBlack'></div></div>";
var market = "<div class = 'market'><div class = 'circle head wheel leftwheel groceryLeft solidBlack'></div><div class = 'circle head wheel rightwheel groceryRight solidBlack'></div><div class = 'inner groceryCartBody solidBlack'></div><div class = 'inner groceryCartHandle solidBlack'></div></div>";
var grooming = "<div class = 'grooming'><div class = 'inner brush solidBlack'></div><div class = 'inner bristle bristleTop solidBlack'></div><div class = 'inner bristle bristleCenter solidBlack'></div><div class = 'inner bristle bristleBottom solidBlack'></div></div>";
var cleaning = "<div class = 'cleaning'><div class = 'inner verticalLine brushpole solidBlack'></div><div class = 'inner brushbase solidBlack'></div><div class = 'inner verticalLine sweeperBristle solidBlack'></div><div class = 'inner verticalLine sweeperBristle brushtwo solidBlack'></div><div class = 'inner verticalLine sweeperBristle brushthree solidBlack'></div><div class = 'inner verticalLine sweeperBristle brushfour solidBlack'></div><div class = 'inner verticalLine sweeperBristle brushfive solidBlack'></div></div>";
var promotion = "<div class = 'promotion'><div class = 'inner ticket solidBlack'></div><div class = 'inner tear tearone solidBlack'></div><div class = 'inner tear teartwo solidBlack'></div></div>";
var construction = "<div class = 'construction'><div class = 'inner constructionBuilding solidBlack'></div><div class = 'inner doorway solidBlack'></div><div class = 'inner doorwayLeft solidBlack'></div><div class = 'inner doorwayLeft doorwayRight solidBlack'></div><div class = 'inner brick solidBlack'></div></div>";
var repair = "<div class = 'repair'><div class = 'inner screwTop solidBlack'></div><div class = 'inner screwStem solidBlack'></div><div class = 'inner screwPoint solidBlack'></div></div>";
var novelty = "<div class = 'novelty'><div class = 'inner circle ribbon solidBlack'></div><div class = 'inner circle ribbon ribbonright solidBlack'></div><div class = 'inner circle endribbon endribbonleft solidBlack'></div><div class = 'inner circle endribbon endribbonright solidBlack'></div></div>";
var clothing = "<div class = 'clothing'><div class = 'inner circle shoulder shirtTop solidBlack'></div><div class = 'inner shirtTopLeft solidBlack'></div><div class = 'inner shirtTopLeft shirtTopRight solidBlack'></div><div class = 'inner shirtLeft solidBlack'></div><div class = 'inner shirtRight solidBlack'></div><div class = 'inner shirtBottom solidBlack'></div></div>";
var gallery = "<div class = 'gallery'><div class = 'inner solidBlack'></div><div class = 'inner frame solidBlack'></div></div>";
var eventSpace = "<div class = 'eventSpace'><div class = 'circle head personOneHead solidBlack'></div><div class = 'inner secondWave shoulder personOneShoulder solidBlack'></div><div class = 'circle head personTwoHead solidBlack'></div><div class = 'inner secondWave shoulder personTwoShoulder solidBlack'></div></div>";
var accomodation = "<div class = 'accomodation'><div class = 'circle head solidBlack'></div><div class = 'inner secondWave shoulder solidBlack'></div><div class = 'inner solidBlack'></div></div>";
var livingRoom = "<div class = 'livingRoom'><div class = 'inner verticalLine socketone solidBlack'></div><div class = 'inner verticalLine sockettwo solidBlack'></div><div class = 'inner cord solidBlack'></div></div>";
var transportation = "<div class = 'transportation'><div class = 'inner carone solidBlack'></div><div class = 'inner cartwo solidBlack'></div><div class = 'inner carthree solidBlack'></div><div class = 'circle head wheel leftwheel solidBlack'></div><div class = 'circle head wheel rightwheel solidBlack'></div></div>";

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
//         $('.street1 .D1').addClass('emptyBuild');
//         $('.street .A3').addClass('expandOnce');
//         $('.street .A4').addClass('expandTwice');
//         $('.street .B4').empty().addClass('forward');
//         $('.street1 .C4').empty().addClass('forward');
//         clicked = false;
//     }
// })

$('.orchardStreet').hide();

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
    $('body').toggleClass('specialPowers');
})

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
        
        $('.street1 .C1').html(community).addClass('forward');
        $('.street1 .B1').html(service).addClass('forward');
        $('.street1 .A1').html(education).addClass('expandTwice');
        
        $('.street1 .C2').html(residentialcommercial).addClass('forward');
        $('.street1 .B2').html(retail).addClass('forward');
        $('.street1 .A2').html(clothing).addClass('expandTwice');
        
        $('.street1 .C3').html(residentialcommercial).addClass('forward');
        $('.street1 .B3').html(retail).addClass('forward');
        $('.street1 .A3').html(gallery).addClass('expandTwice');
        
        $('.street1 .C4').html(residentialcommercial).addClass('forward');
        $('.street1 .B4').html(retail).addClass('forward');
        $('.street1 .A4').html(novelty).addClass('expandTwice');
        
        $('.street1 .C5').html(residentialcommercial).addClass('forward');
        $('.street1 .B5').html(service).addClass('forward');
        $('.street1 .A5').html(construction).addClass('expandTwice');
        
        $('.street1 .C6').html(residentialcommercial).addClass('forward');
        $('.street1 .B6').html(retail).addClass('forward');
        $('.street1 .A6').html(gallery).addClass('expandTwice');
        
        $('.street1 .C7').html(government).addClass('forward');
        $('.street1 .B7').html(service).addClass('forward');
        $('.street1 .A7').html(eventSpace).addClass('expandTwice');
        
        $('.street1 .C8').html(residentialcommercial).addClass('forward');
        $('.street1 .B8').html(retail).addClass('forward');
        $('.street1 .A8').html(gallery).addClass('expandTwice');
        
        $('.street1 .C9').html(residentialcommercial).addClass('forward');
        $('.street1 .B9').html(retail).addClass('forward');
        $('.street1 .A9').html(gallery).addClass('expandTwice');
        
        $('.street1 .C10').html(residentialcommercial).addClass('forward');
        $('.street1 .B10').html(service).addClass('forward');
        $('.street1 .A10').html(education).addClass('expandTwice');
        
        $('.street1 .F1').html(residentialcommercial);
        $('.street1 .E1').html(retail);
        $('.street1 .D1').html(clothing);
        
        $('.street1 .F2').html(residentialcommercial);
        $('.street1 .E2').html(supply);
        $('.street1 .D2').html(clothing);
        
        $('.street1 .F3').html(empty);
        $('.street1 .E3').addClass('emptyBuild')
        $('.street1 .D3').addClass('emptyBuild')
        
        $('.street1 .F4').html(industrial);
        $('.street1 .E4').html(service);
        $('.street1 .D4').html(promotion);
        
        $('.street1 .F5').html(industrial);
        $('.street1 .E5').html(supply);
        $('.street1 .D5').html(dining);
        
        $('.street1 .F6').html(empty);
        $('.street1 .E6').addClass('emptyBuild')
        $('.street1 .D6').addClass('emptyBuild')
        
        $('.street1 .F7').html(empty);
        $('.street1 .E7').addClass('emptyBuild')
        $('.street1 .D7').addClass('emptyBuild')
        
        $('.street1 .F8').html(residentialcommercial);
        $('.street1 .E8').html(retail);
        $('.street1 .D8').html(gallery);
        
        $('.street1 .F9').html(industrial);
        $('.street1 .E9').html(supply);
        $('.street1 .D9').html(dining);
        
        $('.street1 .F10').html(empty);
        $('.street1 .E10').addClass('emptyBuild')
        $('.street1 .D10').addClass('emptyBuild')
        
        $('.street1 .F11').html(empty);
        $('.street1 .E11').addClass('emptyBuild')
        $('.street1 .D11').addClass('emptyBuild')
        
        $('.street1 .F12').html(residentialcommercial);
        $('.street1 .E12').html(retail);
        $('.street1 .D12').html(clothing);
        
        $('.street1 .F13').html(residentialcommercial);
        $('.street1 .E13').html(service);
        $('.street1 .D13').html(dining);
        
        $('.street1 .F14').html(residentialcommercial);
        $('.street1 .E14').html(retail);
        $('.street1 .D14').html(gallery);
        
        $('.street2 .C1').html(legal);
        $('.street2 .B1').html(service);
        $('.street2 .A1').html(advice);
        
        $('.street2 .C2').html(residentialcommercial);
        $('.street2 .B2').html(retail);
        $('.street2 .A2').html(clothing);
        
        $('.street2 .C3').html(residentialcommercial);
        $('.street2 .B3').html(retail);
        $('.street2 .A3').html(novelty);
        
        $('.street2 .C4').html(residentialcommercial);
        $('.street2 .B4').html(service);
        $('.street2 .A4').html(dining);
        
        $('.street2 .C5').html(legal);
        $('.street2 .B5').html(service);
        $('.street2 .A5').html(advice);
        
        $('.street2 .C6').html(residentialcommercial);
        $('.street2 .B6').html(retail);
        $('.street2 .A6').html(gallery);
        
        $('.street2 .C7').html(residentialcommercial);
        $('.street2 .B7').html(retail);
        $('.street2 .A7').html(medical);
        
        $('.street2 .C8').html(residentialcommercial);
        $('.street2 .B8').html(retail);
        $('.street2 .A8').html(novelty);
        
        $('.street2 .C9').html(empty);
        $('.street2 .B9').addClass('emptyBuild')
        $('.street2 .A9').addClass('emptyBuild')
        
        $('.street2 .C10').html(empty);
        $('.street2 .B10').addClass('emptyBuild')
        $('.street2 .A10').addClass('emptyBuild')
        
        $('.street2 .C11').html(residentialcommercial);
        $('.street2 .B11').html(retail);
        $('.street2 .A11').html(clothing);
        
        $('.street2 .C12').html(residentialcommercial);
        $('.street2 .B12').html(supply);
        $('.street2 .A12').html(novelty);
        
        $('.street2 .C13').html(residentialcommercial);
        $('.street2 .B13').html(retail);
        $('.street2 .A13').html(novelty);
        
        $('.street2 .C14').html(residentialcommercial);
        $('.street2 .B14').html(retail);
        $('.street2 .A14').html(gallery);
        
        $('.street2 .C15').html(residential);
        $('.street2 .B15').addClass('emptyBuild')
        $('.street2 .A15').addClass('emptyBuild')
        
        $('.street2 .C16').html(residentialcommercial);
        $('.street2 .B16').html(service);
        $('.street2 .A16').html(dining);
        
        $('.street2 .C17').html(residentialcommercial);
        $('.street2 .B17').html(supply);
        $('.street2 .A17').html(clothing);
        
        $('.street2 .C18').html(residential);
        $('.street2 .B18').html(supply);
        $('.street2 .A18').html(dining);
        
        $('.street2 .F1').html(residentialcommercial);
        $('.street2 .E1').html(retail);
        $('.street2 .D1').html(novelty);
        
        $('.street2 .F2').html(residentialcommercial);
        $('.street2 .E2').html(retail);
        $('.street2 .D2').html(gallery);
        
        $('.street2 .F3').html(residentialcommercial);
        $('.street2 .E3').html(supply);
        $('.street2 .D3').html(clothing);
        
        $('.street2 .F4').html(residentialcommercial);
        $('.street2 .E4').html(retail);
        $('.street2 .D4').html(gallery);
        
        $('.street2 .F5').html(residentialcommercial);
        $('.street2 .E5').html(service);
        $('.street2 .D5').html(cleaning);
        
        $('.street2 .F6').html(residentialcommercial);
        $('.street2 .E6').html(retail);
        $('.street2 .D6').html(gallery);
        
        $('.street2 .F7').html(residentialcommercial);
        $('.street2 .E7').html(service);
        $('.street2 .D7').html(cleaning);
        
        $('.street2 .F8').html(empty);
        $('.street2 .E8').addClass('emptyBuild')
        $('.street2 .D8').addClass('emptyBuild')
        
        $('.street2 .F9').html(residentialcommercial);
        $('.street2 .E9').html(retail);
        $('.street2 .D9').html(gallery);
        
        $('.street2 .F10').html(residentialcommercial);
        $('.street2 .E10').html(retail);
        $('.street2 .D10').html(novelty);
        
        $('.street2 .F11').html(residentialcommercial);
        $('.street2 .E11').html(service);
        $('.street2 .D11').html(dining);
        
        $('.street2 .F12').html(residentialcommercial);
        $('.street2 .E12').html(retail);
        $('.street2 .D12').html(novelty);
        
        $('.street2 .F13').html(residentialcommercial);
        $('.street2 .E13').html(retail);
        $('.street2 .D13').html(livingRoom);
        
        $('.street2 .F14').html(residentialcommercial);
        $('.street2 .E14').html(retail);
        $('.street2 .D14').html(gallery);
        
        $('.street2 .F15').html(residentialcommercial);
        $('.street2 .E15').html(retail);
        $('.street2 .D15').html(gallery);
        
        $('.street2 .F16').html(residentialcommercial);
        $('.street2 .E16').html(retail);
        $('.street2 .D16').html(clothing);
        
        $('.street2 .F17').html(residentialcommercial);
        $('.street2 .E17').html(service);
        $('.street2 .D17').html(entertainment);
        
        $('.street2 .F18').html(residentialcommercial);
        $('.street2 .E18').html(retail);
        $('.street2 .D18').html(novelty);
        
        $('.street2 .F19').html(residential);
        $('.street2 .E19').addClass('emptyBuild')
        $('.street2 .D19').addClass('emptyBuild')
        
        $('.street2 .F20').html(residentialcommercial);
        $('.street2 .E20').html(retail);
        $('.street2 .D20').html(market);
        
        $('.street3 .C1').html(residentialcommercial);
        $('.street3 .B1').html(retail);
        $('.street3 .A1').html(market);
        
        $('.street3 .C2').html(residential);
        $('.street3 .B2').addClass('emptyBuild')
        $('.street3 .A2').addClass('emptyBuild')
        
        $('.street3 .C3').html(residential);
        $('.street3 .B3').addClass('emptyBuild')
        $('.street3 .A3').addClass('emptyBuild')
        
        $('.street3 .C4').html(residential);
        $('.street3 .B4').addClass('emptyBuild')
        $('.street3 .A4').addClass('emptyBuild')
        
        $('.street3 .C5').html(industrial);
        $('.street3 .B5').html(service);
        $('.street3 .A5').html(promotion);
        
        $('.street3 .F1').addClass('dashedBlack');
        $('.street3 .E1').addClass('emptyBuild')
        $('.street3 .D1').addClass('emptyBuild')
        
        $('.street3 .F2').html(community);
        $('.street3 .E2').html(service);
        $('.street3 .D2').html(accomodation);
        
        $('.street3 .F3').html(community);
        $('.street3 .E3').html(service);
        $('.street3 .D3').html(accomodation);
        
        $('.street3 .F4').html(residentialcommercial);
        $('.street3 .E4').html(retail);
        $('.street3 .D4').html(medical);
        
        $('.street3 .F20').hide();
        
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
        
        $('.street1 .C1').empty();
        $('.street1 .B1').empty();
        $('.street1 .A1').empty();
        
        $('.street1 .C2').empty();
        $('.street1 .B2').empty();
        $('.street1 .A2').empty();
        
        $('.street1 .C3').empty();
        $('.street1 .B3').empty();
        $('.street1 .A3').empty();
        
        $('.street1 .C4').empty();
        $('.street1 .B4').empty();
        $('.street1 .A4').empty();
        
        $('.street1 .C5').empty();
        $('.street1 .B5').empty();
        $('.street1 .A5').empty();
        
        $('.street1 .C6').empty();
        $('.street1 .B6').empty();
        $('.street1 .A6').empty();
        
        $('.street1 .C7').empty();
        $('.street1 .B7').empty();
        $('.street1 .A7').empty();
        
        $('.street1 .C8').empty();
        $('.street1 .B8').empty();
        $('.street1 .A8').empty();
        
        $('.street1 .C9').empty();
        $('.street1 .B9').empty();
        $('.street1 .A9').empty();
        
        $('.street1 .C10').empty();
        $('.street1 .B10').empty();
        $('.street1 .A10').empty();
        
        $('.street1 .F1').empty();
        $('.street1 .E1').empty();
        $('.street1 .D1').empty();
        
        $('.street1 .F2').empty();
        $('.street1 .E2').empty();
        $('.street1 .D2').empty();
        
        $('.street1 .F3').empty();
        $('.street1 .E3').addClass('emptyBuild')
        $('.street1 .D3').addClass('emptyBuild')
        
        $('.street1 .F4').empty();
        $('.street1 .E4').empty();
        $('.street1 .D4').empty();
        
        $('.street1 .F5').empty();
        $('.street1 .E5').empty();
        $('.street1 .D5').empty();
        
        $('.street1 .F6').empty();
        $('.street1 .E6').addClass('emptyBuild')
        $('.street1 .D6').addClass('emptyBuild')
        
        $('.street1 .F7').empty();
        $('.street1 .E7').addClass('emptyBuild')
        $('.street1 .D7').addClass('emptyBuild')
        
        $('.street1 .F8').empty();
        $('.street1 .E8').empty();
        $('.street1 .D8').empty();
        
        $('.street1 .F9').empty();
        $('.street1 .E9').empty();
        $('.street1 .D9').empty();
        
        $('.street1 .F10').empty();
        $('.street1 .E10').addClass('emptyBuild')
        $('.street1 .D10').addClass('emptyBuild')
        
        $('.street1 .F11').empty();
        $('.street1 .E11').addClass('emptyBuild')
        $('.street1 .D11').addClass('emptyBuild')
        
        $('.street1 .F12').empty();
        $('.street1 .E12').empty();
        $('.street1 .D12').empty();
        
        $('.street1 .F13').empty();
        $('.street1 .E13').empty();
        $('.street1 .D13').empty();
        
        $('.street1 .F14').empty();
        $('.street1 .E14').empty();
        $('.street1 .D14').empty();
        
        $('.street2 .C1').empty();
        $('.street2 .B1').empty();
        $('.street2 .A1').empty();
        
        $('.street2 .C2').empty();
        $('.street2 .B2').empty();
        $('.street2 .A2').empty();
        
        $('.street2 .C3').empty();
        $('.street2 .B3').empty();
        $('.street2 .A3').empty();
        
        $('.street2 .C4').empty();
        $('.street2 .B4').empty();
        $('.street2 .A4').empty();
        
        $('.street2 .C5').empty();
        $('.street2 .B5').empty();
        $('.street2 .A5').empty();
        
        $('.street2 .C6').empty();
        $('.street2 .B6').empty();
        $('.street2 .A6').empty();
        
        $('.street2 .C7').empty();
        $('.street2 .B7').empty();
        $('.street2 .A7').empty();
        
        $('.street2 .C8').empty();
        $('.street2 .B8').empty();
        $('.street2 .A8').empty();
        
        $('.street2 .C9').empty();
        $('.street2 .B9').addClass('emptyBuild')
        $('.street2 .A9').addClass('emptyBuild')
        
        $('.street2 .C10').empty();
        $('.street2 .B10').addClass('emptyBuild')
        $('.street2 .A10').addClass('emptyBuild')
        
        $('.street2 .C11').empty();
        $('.street2 .B11').empty();
        $('.street2 .A11').empty();
        
        $('.street2 .C12').empty();
        $('.street2 .B12').empty();
        $('.street2 .A12').empty();
        
        $('.street2 .C13').empty();
        $('.street2 .B13').empty();
        $('.street2 .A13').empty();
        
        $('.street2 .C14').empty();
        $('.street2 .B14').empty();
        $('.street2 .A14').empty();
        
        $('.street2 .C15').empty();
        $('.street2 .B15').addClass('emptyBuild')
        $('.street2 .A15').addClass('emptyBuild')
        
        $('.street2 .C16').empty();
        $('.street2 .B16').empty();
        $('.street2 .A16').empty();
        
        $('.street2 .C17').empty();
        $('.street2 .B17').empty();
        $('.street2 .A17').empty();
        
        $('.street2 .C18').empty();
        $('.street2 .B18').empty();
        $('.street2 .A18').empty();
        
        $('.street2 .F1').empty();
        $('.street2 .E1').empty();
        $('.street2 .D1').empty();
        
        $('.street2 .F2').empty();
        $('.street2 .E2').empty();
        $('.street2 .D2').empty();
        
        $('.street2 .F3').empty();
        $('.street2 .E3').empty();
        $('.street2 .D3').empty();
        
        $('.street2 .F4').empty();
        $('.street2 .E4').empty();
        $('.street2 .D4').empty();
        
        $('.street2 .F5').empty();
        $('.street2 .E5').empty();
        $('.street2 .D5').empty();
        
        $('.street2 .F6').empty();
        $('.street2 .E6').empty();
        $('.street2 .D6').empty();
        
        $('.street2 .F7').empty();
        $('.street2 .E7').empty();
        $('.street2 .D7').empty();
        
        $('.street2 .F8').empty();
        $('.street2 .E8').addClass('emptyBuild')
        $('.street2 .D8').addClass('emptyBuild')
        
        $('.street2 .F9').empty();
        $('.street2 .E9').empty();
        $('.street2 .D9').empty();
        
        $('.street2 .F10').empty();
        $('.street2 .E10').empty();
        $('.street2 .D10').empty();
        
        $('.street2 .F11').empty();
        $('.street2 .E11').empty();
        $('.street2 .D11').empty();
        
        $('.street2 .F12').empty();
        $('.street2 .E12').empty();
        $('.street2 .D12').empty();
        
        $('.street2 .F13').empty();
        $('.street2 .E13').empty();
        $('.street2 .D13').empty();
        
        $('.street2 .F14').empty();
        $('.street2 .E14').empty();
        $('.street2 .D14').empty();
        
        $('.street2 .F15').empty();
        $('.street2 .E15').empty();
        $('.street2 .D15').empty();
        
        $('.street2 .F16').empty();
        $('.street2 .E16').empty();
        $('.street2 .D16').empty();
        
        $('.street2 .F17').empty();
        $('.street2 .E17').empty();
        $('.street2 .D17').empty();
        
        $('.street2 .F18').empty();
        $('.street2 .E18').empty();
        $('.street2 .D18').empty();
        
        $('.street2 .F19').empty();
        $('.street2 .E19').addClass('emptyBuild')
        $('.street2 .D19').addClass('emptyBuild')
        
        $('.street2 .F20').empty();
        $('.street2 .E20').empty();
        $('.street2 .D20').empty();
        
        $('.street3 .C1').empty();
        $('.street3 .B1').empty();
        $('.street3 .A1').empty();
        
        $('.street3 .C2').empty();
        $('.street3 .B2').addClass('emptyBuild')
        $('.street3 .A2').addClass('emptyBuild')
        
        $('.street3 .C3').empty();
        $('.street3 .B3').addClass('emptyBuild')
        $('.street3 .A3').addClass('emptyBuild')
        
        $('.street3 .C4').empty();
        $('.street3 .B4').addClass('emptyBuild')
        $('.street3 .A4').addClass('emptyBuild')
        
        $('.street3 .C5').empty();
        $('.street3 .B5').empty();
        $('.street3 .A5').empty();
        
        $('.street3 .F1').addClass('dashedBlack');
        $('.street3 .E1').addClass('emptyBuild')
        $('.street3 .D1').addClass('emptyBuild')
        
        $('.street3 .F2').empty();
        $('.street3 .E2').empty();
        $('.street3 .D2').empty();
        
        $('.street3 .F3').empty();
        $('.street3 .E3').empty();
        $('.street3 .D3').empty();
        
        $('.street3 .F4').empty();
        $('.street3 .E4').empty();
        $('.street3 .D4').empty();
        
        $('.street3 .F20').show();
        
        clicked = false;
    }
})

$('.galleryPoint').click(function() {
    if (clicked == false) {
        $('.gallery div').css('border-color', 'red');
        clicked = true;
    } else {
        $('.gallery div').css('border-color', 'black');
        clicked = false;
    }
})

$('.commercialPoint').click(function() {
    if (clicked == false) {
        $('.residentialcommercial div').css('border-color', 'red');
        clicked = true;
    } else {
        $('.residentialcommercial div').css('border-color', 'black');
        clicked = false;
    }
})

$('.daycare').click(function() {
    if (clicked == false) {
        $('.community div').css('border-color', 'red');
        clicked = true;
    } else {
        $('.community div').css('border-color', 'black');
        clicked = false;
    }
})

//Eldridge Street

// $('.eldridge').click(function() {
//     if (clicked == false) {
//         $('.eldridgeStreet').show();
//         $('.eldridgeStreetName').show().css('z-index', '1');;
//         $('.canalStreetName').show().css('z-index', '1');;
//         $('.divisionStreetName').show().css('z-index', '1');;
//         $('.lefthand').css('background-color', '#C4C4C4');
        
//         $('.street1 .A18').hide();
//         $('.street1 .A19').hide();
//         $('.street1 .A20').hide();
        
//         $('.street1 .B18').hide();
//         $('.street1 .B19').hide();
//         $('.street1 .B20').hide();
        
//         $('.street1 .C18').hide();
//         $('.street1 .C19').hide();
//         $('.street1 .C20').hide();
        
//         $('.street1 .D5').hide();
//         $('.street1 .D6').hide();
//         $('.street1 .D7').hide();
//         $('.street1 .D8').hide();
//         $('.street1 .D9').hide();
//         $('.street1 .D10').hide();
//         $('.street1 .D11').hide();
//         $('.street1 .D12').hide();
//         $('.street1 .D13').hide();
//         $('.street1 .D14').hide();
//         $('.street1 .D15').hide();
//         $('.street1 .D16').hide();
//         $('.street1 .D17').hide();
//         $('.street1 .D18').hide();
//         $('.street1 .D19').hide();
//         $('.street1 .D20').hide();
        
//         $('.street1 .E5').hide();
//         $('.street1 .E6').hide();
//         $('.street1 .E7').hide();
//         $('.street1 .E8').hide();
//         $('.street1 .E9').hide();
//         $('.street1 .E10').hide();
//         $('.street1 .E11').hide();
//         $('.street1 .E12').hide();
//         $('.street1 .E13').hide();
//         $('.street1 .E14').hide();
//         $('.street1 .E15').hide();
//         $('.street1 .E16').hide();
//         $('.street1 .E17').hide();
//         $('.street1 .E18').hide();
//         $('.street1 .E19').hide();
//         $('.street1 .E20').hide();
        
//         $('.street1 .F5').hide();
//         $('.street1 .F6').hide();
//         $('.street1 .F7').hide();
//         $('.street1 .F8').hide();
//         $('.street1 .F9').hide();
//         $('.street1 .F10').hide();
//         $('.street1 .F11').hide();
//         $('.street1 .F12').hide();
//         $('.street1 .F13').hide();
//         $('.street1 .F14').hide();
//         $('.street1 .F15').hide();
//         $('.street1 .F16').hide();
//         $('.street1 .F17').hide();
//         $('.street1 .F18').hide();
//         $('.street1 .F19').hide();
//         $('.street1 .F20').hide();
        
//         $('.street2 .A16').hide();
//         $('.street2 .A17').hide();
//         $('.street2 .A18').hide();
//         $('.street2 .A19').hide();
//         $('.street2 .A20').hide();
        
//         $('.street2 .B16').hide();
//         $('.street2 .B17').hide();
//         $('.street2 .B18').hide();
//         $('.street2 .B19').hide();
//         $('.street2 .B20').hide();
        
//         $('.street2 .C16').hide();
//         $('.street2 .C17').hide();
//         $('.street2 .C18').hide();
//         $('.street2 .C19').hide();
//         $('.street2 .C20').hide();
        
//         $('.street3 .A8').hide();
//         $('.street3 .A9').hide();
//         $('.street3 .A10').hide();
//         $('.street3 .A11').hide();
//         $('.street3 .A12').hide();
//         $('.street3 .A13').hide();
//         $('.street3 .A14').hide();
//         $('.street3 .A15').hide();
//         $('.street3 .A16').hide();
//         $('.street3 .A17').hide();
//         $('.street3 .A18').hide();
//         $('.street3 .A19').hide();
//         $('.street3 .A20').hide();
        
//         $('.street3 .B8').hide();
//         $('.street3 .B9').hide();
//         $('.street3 .B10').hide();
//         $('.street3 .B11').hide();
//         $('.street3 .B12').hide();
//         $('.street3 .B13').hide();
//         $('.street3 .B14').hide();
//         $('.street3 .B15').hide();
//         $('.street3 .B16').hide();
//         $('.street3 .B17').hide();
//         $('.street3 .B18').hide();
//         $('.street3 .B19').hide();
//         $('.street3 .B20').hide();
        
//         $('.street3 .C8').hide();
//         $('.street3 .C9').hide();
//         $('.street3 .C10').hide();
//         $('.street3 .C11').hide();
//         $('.street3 .C12').hide();
//         $('.street3 .C13').hide();
//         $('.street3 .C14').hide();
//         $('.street3 .C15').hide();
//         $('.street3 .C16').hide();
//         $('.street3 .C17').hide();
//         $('.street3 .C18').hide();
//         $('.street3 .C19').hide();
//         $('.street3 .C20').hide();
        
//         $('.street3 .D1').hide();
//         $('.street3 .D2').hide();
//         $('.street3 .D3').hide();
//         $('.street3 .D4').hide();
//         $('.street3 .D5').hide();
//         $('.street3 .D6').hide();
//         $('.street3 .D7').hide();
//         $('.street3 .D8').hide();
//         $('.street3 .D9').hide();
//         $('.street3 .D10').hide();
//         $('.street3 .D11').hide();
//         $('.street3 .D12').hide();
//         $('.street3 .D13').hide();
//         $('.street3 .D14').hide();
//         $('.street3 .D15').hide();
//         $('.street3 .D16').hide();
//         $('.street3 .D17').hide();
//         $('.street3 .D18').hide();
//         $('.street3 .D19').hide();
//         $('.street3 .D20').hide();
        
//         $('.street3 .E1').hide();
//         $('.street3 .E2').hide();
//         $('.street3 .E3').hide();
//         $('.street3 .E4').hide();
//         $('.street3 .E5').hide();
//         $('.street3 .E6').hide();
//         $('.street3 .E7').hide();
//         $('.street3 .E8').hide();
//         $('.street3 .E9').hide();
//         $('.street3 .E10').hide();
//         $('.street3 .E11').hide();
//         $('.street3 .E12').hide();
//         $('.street3 .E13').hide();
//         $('.street3 .E14').hide();
//         $('.street3 .E15').hide();
//         $('.street3 .E16').hide();
//         $('.street3 .E17').hide();
//         $('.street3 .E18').hide();
//         $('.street3 .E19').hide();
//         $('.street3 .E20').hide();
        
//         $('.street3 .F2').hide();
//         $('.street3 .F3').hide();
//         $('.street3 .F4').hide();
//         $('.street3 .F5').hide();
//         $('.street3 .F6').hide();
//         $('.street3 .F7').hide();
//         $('.street3 .F8').hide();
//         $('.street3 .F9').hide();
//         $('.street3 .F10').hide();
//         $('.street3 .F11').hide();
//         $('.street3 .F12').hide();
//         $('.street3 .F13').hide();
//         $('.street3 .F14').hide();
//         $('.street3 .F15').hide();
//         $('.street3 .F16').hide();
//         $('.street3 .F17').hide();
//         $('.street3 .F18').hide();
//         $('.street3 .F19').hide();
//         $('.street3 .F20').hide();
        
//         $('.street2 .street').css('top', '1980px');
//         $('.street3 .street').css('top', '4310px');
        
//         clicked = true;
//     } else {
//         $('.eldridgeStreet').hide();
//         $('.eldridgeStreetName').hide().css('z-index', '1');;
//         $('.canalStreetName').hide().css('z-index', '1');;
//         $('.divisionStreetName').hide().css('z-index', '1');;
//         $('.lefthand').css('background-color', '#E8E8E8');
        
//         $('.street1 .A18').show();
//         $('.street1 .A19').show();
//         $('.street1 .A20').show();
        
//         $('.street1 .B18').show();
//         $('.street1 .B19').show();
//         $('.street1 .B20').show();
        
//         $('.street1 .C18').show();
//         $('.street1 .C19').show();
//         $('.street1 .C20').show();
        
//         $('.street1 .D5').show();
//         $('.street1 .D6').show();
//         $('.street1 .D7').show();
//         $('.street1 .D8').show();
//         $('.street1 .D9').show();
//         $('.street1 .D10').show();
//         $('.street1 .D11').show();
//         $('.street1 .D12').show();
//         $('.street1 .D13').show();
//         $('.street1 .D14').show();
//         $('.street1 .D15').show();
//         $('.street1 .D16').show();
//         $('.street1 .D17').show();
//         $('.street1 .D18').show();
//         $('.street1 .D19').show();
//         $('.street1 .D20').show();
        
//         $('.street1 .E5').show();
//         $('.street1 .E6').show();
//         $('.street1 .E7').show();
//         $('.street1 .E8').show();
//         $('.street1 .E9').show();
//         $('.street1 .E10').show();
//         $('.street1 .E11').show();
//         $('.street1 .E12').show();
//         $('.street1 .E13').show();
//         $('.street1 .E14').show();
//         $('.street1 .E15').show();
//         $('.street1 .E16').show();
//         $('.street1 .E17').show();
//         $('.street1 .E18').show();
//         $('.street1 .E19').show();
//         $('.street1 .E20').show();
        
//         $('.street1 .F5').show();
//         $('.street1 .F6').show();
//         $('.street1 .F7').show();
//         $('.street1 .F8').show();
//         $('.street1 .F9').show();
//         $('.street1 .F10').show();
//         $('.street1 .F11').show();
//         $('.street1 .F12').show();
//         $('.street1 .F13').show();
//         $('.street1 .F14').show();
//         $('.street1 .F15').show();
//         $('.street1 .F16').show();
//         $('.street1 .F17').show();
//         $('.street1 .F18').show();
//         $('.street1 .F19').show();
//         $('.street1 .F20').show();
        
//         $('.street2 .A16').show();
//         $('.street2 .A17').show();
//         $('.street2 .A18').show();
//         $('.street2 .A19').show();
//         $('.street2 .A20').show();
        
//         $('.street2 .B16').show();
//         $('.street2 .B17').show();
//         $('.street2 .B18').show();
//         $('.street2 .B19').show();
//         $('.street2 .B20').show();
        
//         $('.street2 .C16').show();
//         $('.street2 .C17').show();
//         $('.street2 .C18').show();
//         $('.street2 .C19').show();
//         $('.street2 .C20').show();
        
//         $('.street3 .A8').show();
//         $('.street3 .A9').show();
//         $('.street3 .A10').show();
//         $('.street3 .A11').show();
//         $('.street3 .A12').show();
//         $('.street3 .A13').show();
//         $('.street3 .A14').show();
//         $('.street3 .A15').show();
//         $('.street3 .A16').show();
//         $('.street3 .A17').show();
//         $('.street3 .A18').show();
//         $('.street3 .A19').show();
//         $('.street3 .A20').show();
        
//         $('.street3 .B8').show();
//         $('.street3 .B9').show();
//         $('.street3 .B10').show();
//         $('.street3 .B11').show();
//         $('.street3 .B12').show();
//         $('.street3 .B13').show();
//         $('.street3 .B14').show();
//         $('.street3 .B15').show();
//         $('.street3 .B16').show();
//         $('.street3 .B17').show();
//         $('.street3 .B18').show();
//         $('.street3 .B19').show();
//         $('.street3 .B20').show();
        
//         $('.street3 .C8').show();
//         $('.street3 .C9').show();
//         $('.street3 .C10').show();
//         $('.street3 .C11').show();
//         $('.street3 .C12').show();
//         $('.street3 .C13').show();
//         $('.street3 .C14').show();
//         $('.street3 .C15').show();
//         $('.street3 .C16').show();
//         $('.street3 .C17').show();
//         $('.street3 .C18').show();
//         $('.street3 .C19').show();
//         $('.street3 .C20').show();
        
//         $('.street3 .D1').show();
//         $('.street3 .D2').show();
//         $('.street3 .D3').show();
//         $('.street3 .D4').show();
//         $('.street3 .D5').show();
//         $('.street3 .D6').show();
//         $('.street3 .D7').show();
//         $('.street3 .D8').show();
//         $('.street3 .D9').show();
//         $('.street3 .D10').show();
//         $('.street3 .D11').show();
//         $('.street3 .D12').show();
//         $('.street3 .D13').show();
//         $('.street3 .D14').show();
//         $('.street3 .D15').show();
//         $('.street3 .D16').show();
//         $('.street3 .D17').show();
//         $('.street3 .D18').show();
//         $('.street3 .D19').show();
//         $('.street3 .D20').show();
        
//         $('.street3 .E1').show();
//         $('.street3 .E2').show();
//         $('.street3 .E3').show();
//         $('.street3 .E4').show();
//         $('.street3 .E5').show();
//         $('.street3 .E6').show();
//         $('.street3 .E7').show();
//         $('.street3 .E8').show();
//         $('.street3 .E9').show();
//         $('.street3 .E10').show();
//         $('.street3 .E11').show();
//         $('.street3 .E12').show();
//         $('.street3 .E13').show();
//         $('.street3 .E14').show();
//         $('.street3 .E15').show();
//         $('.street3 .E16').show();
//         $('.street3 .E17').show();
//         $('.street3 .E18').show();
//         $('.street3 .E19').show();
//         $('.street3 .E20').show();
        
//         $('.street3 .F2').show();
//         $('.street3 .F3').show();
//         $('.street3 .F4').show();
//         $('.street3 .F5').show();
//         $('.street3 .F6').show();
//         $('.street3 .F7').show();
//         $('.street3 .F8').show();
//         $('.street3 .F9').show();
//         $('.street3 .F10').show();
//         $('.street3 .F11').show();
//         $('.street3 .F12').show();
//         $('.street3 .F13').show();
//         $('.street3 .F14').show();
//         $('.street3 .F15').show();
//         $('.street3 .F16').show();
//         $('.street3 .F17').show();
//         $('.street3 .F18').show();
//         $('.street3 .F19').show();
//         $('.street3 .F20').show();
        
//         $('.street2 .street').css('top', '2330px');
//         $('.street3 .street').css('top', '4660px')
        
//         clicked = false;
//     }
// })

// //Mott Street 

// $('.mott').click(function() {
//     if (clicked == false) {
//         $('.mottStreet').show();
//         $('.mottStreetName').show().css('z-index', '1');
//         $('.bayardStreetName').show().css('z-index', '1');
//         $('.moscoStreetName').show().css('z-index', '1');
//         $('.lefthand').css('background-color', '#C4C4C4');
        
//         $('.street1 .A18').hide();
//         $('.street1 .A19').hide();
//         $('.street1 .A20').hide();

//         $('.street1 .B18').hide();
//         $('.street1 .B19').hide();
//         $('.street1 .B20').hide();
        
//         $('.street1 .C18').hide();
//         $('.street1 .C19').hide();
//         $('.street1 .C20').hide();
        
//         $('.street1 .D21').show();
//         $('.street1 .D22').show();
        
//         $('.street1 .E21').show();
//         $('.street1 .E22').show();
        
//         $('.street1 .F21').show();
//         $('.street1 .F22').show();
        
//         $('.street2 .A18').hide();
//         $('.street2 .A19').hide();
//         $('.street2 .A20').hide();

//         $('.street2 .B18').hide();
//         $('.street2 .B19').hide();
//         $('.street2 .B20').hide();
        
//         $('.street2 .C18').hide();
//         $('.street2 .C19').hide();
//         $('.street2 .C20').hide();
        
//         $('.street2 .D16').hide();
//         $('.street2 .D17').hide();
//         $('.street2 .D18').hide();
//         $('.street2 .D19').hide();
//         $('.street2 .D20').hide();
        
//         $('.street2 .E16').hide();
//         $('.street2 .E17').hide();
//         $('.street2 .E18').hide();
//         $('.street2 .E19').hide();
//         $('.street2 .E20').hide();
        
//         $('.street2 .F16').hide();
//         $('.street2 .F17').hide();
//         $('.street2 .F18').hide();
//         $('.street2 .F19').hide();
//         $('.street2 .F20').hide();
        
//         $('.street3 .A12').hide();
//         $('.street3 .A13').hide();
//         $('.street3 .A14').hide();
//         $('.street3 .A15').hide();
//         $('.street3 .A16').hide();
//         $('.street3 .A17').hide();
//         $('.street3 .A18').hide();
//         $('.street3 .A19').hide();
//         $('.street3 .A20').hide();
        
//         $('.street3 .B12').hide();
//         $('.street3 .B13').hide();
//         $('.street3 .B14').hide();
//         $('.street3 .B15').hide();
//         $('.street3 .B16').hide();
//         $('.street3 .B17').hide();
//         $('.street3 .B18').hide();
//         $('.street3 .B19').hide();
//         $('.street3 .B20').hide();
        
//         $('.street3 .C12').hide();
//         $('.street3 .C13').hide();
//         $('.street3 .C14').hide();
//         $('.street3 .C15').hide();
//         $('.street3 .C16').hide();
//         $('.street3 .C17').hide();
//         $('.street3 .C18').hide();
//         $('.street3 .C19').hide();
//         $('.street3 .C20').hide();
        
//         $('.street3 .D13').hide();
//         $('.street3 .D14').hide();
//         $('.street3 .D15').hide();
//         $('.street3 .D16').hide();
//         $('.street3 .D17').hide();
//         $('.street3 .D18').hide();
//         $('.street3 .D19').hide();
//         $('.street3 .D20').hide();
        
//         $('.street3 .E13').hide();
//         $('.street3 .E14').hide();
//         $('.street3 .E15').hide();
//         $('.street3 .E16').hide();
//         $('.street3 .E17').hide();
//         $('.street3 .E18').hide();
//         $('.street3 .E19').hide();
//         $('.street3 .E20').hide();
        
//         $('.street3 .F13').hide();
//         $('.street3 .F14').hide();
//         $('.street3 .F15').hide();
//         $('.street3 .F16').hide();
//         $('.street3 .F17').hide();
//         $('.street3 .F18').hide();
//         $('.street3 .F19').hide();
//         $('.street3 .F20').hide();
        
//         $('.street2 .street').css('top', '2555px');
//         $('.street3 .street').css('top', '4535px');
        
//         clicked = true;
//     } else {
//         $('.lefthand').css('background-color', '#E8E8E8');
//         $('.mottStreet').hide();
//         $('.mottStreetName').hide().css('z-index', '1');
//         $('.bayardStreetName').hide().css('z-index', '1');
//         $('.moscoStreetName').hide().css('z-index', '1');
        
//         $('.street1 .A18').show();
//         $('.street1 .A19').show();
//         $('.street1 .A20').show();

//         $('.street1 .B18').show();
//         $('.street1 .B19').show();
//         $('.street1 .B20').show();
        
//         $('.street1 .C18').show();
//         $('.street1 .C19').show();
//         $('.street1 .C20').show();
        
//         $('.street1 .D21').hide();
//         $('.street1 .D22').hide();
        
//         $('.street1 .E21').hide();
//         $('.street1 .E22').hide();
        
//         $('.street1 .F21').hide();
//         $('.street1 .F22').hide();
        
//         $('.street2 .A18').show();
//         $('.street2 .A19').show();
//         $('.street2 .A20').show();

//         $('.street2 .B18').show();
//         $('.street2 .B19').show();
//         $('.street2 .B20').show();
        
//         $('.street2 .C18').show();
//         $('.street2 .C19').show();
//         $('.street2 .C20').show();
        
//         $('.street2 .D16').show();
//         $('.street2 .D17').show();
//         $('.street2 .D18').show();
//         $('.street2 .D19').show();
//         $('.street2 .D20').show();
        
//         $('.street2 .E16').show();
//         $('.street2 .E17').show();
//         $('.street2 .E18').show();
//         $('.street2 .E19').show();
//         $('.street2 .E20').show();
        
//         $('.street2 .F16').show();
//         $('.street2 .F17').show();
//         $('.street2 .F18').show();
//         $('.street2 .F19').show();
//         $('.street2 .F20').show();
        
//         $('.street3 .A12').show();
//         $('.street3 .A13').show();
//         $('.street3 .A14').show();
//         $('.street3 .A15').show();
//         $('.street3 .A16').show();
//         $('.street3 .A17').show();
//         $('.street3 .A18').show();
//         $('.street3 .A19').show();
//         $('.street3 .A20').show();
        
//         $('.street3 .B12').show();
//         $('.street3 .B13').show();
//         $('.street3 .B14').show();
//         $('.street3 .B15').show();
//         $('.street3 .B16').show();
//         $('.street3 .B17').show();
//         $('.street3 .B18').show();
//         $('.street3 .B19').show();
//         $('.street3 .B20').show();
        
//         $('.street3 .C12').show();
//         $('.street3 .C13').show();
//         $('.street3 .C14').show();
//         $('.street3 .C15').show();
//         $('.street3 .C16').show();
//         $('.street3 .C17').show();
//         $('.street3 .C18').show();
//         $('.street3 .C19').show();
//         $('.street3 .C20').show();
        
//         $('.street3 .D13').show();
//         $('.street3 .D14').show();
//         $('.street3 .D15').show();
//         $('.street3 .D16').show();
//         $('.street3 .D17').show();
//         $('.street3 .D18').show();
//         $('.street3 .D19').show();
//         $('.street3 .D20').show();
        
//         $('.street3 .E13').show();
//         $('.street3 .E14').show();
//         $('.street3 .E15').show();
//         $('.street3 .E16').show();
//         $('.street3 .E17').show();
//         $('.street3 .E18').show();
//         $('.street3 .E19').show();
//         $('.street3 .E20').show();
        
//         $('.street3 .F13').show();
//         $('.street3 .F14').show();
//         $('.street3 .F15').show();
//         $('.street3 .F16').show();
//         $('.street3 .F17').show();
//         $('.street3 .F18').show();
//         $('.street3 .F19').show();
//         $('.street3 .F20').show();
        
//         $('.street2 .street').css('top', '2330px');
//         $('.street3 .street').css('top', '4660px')
//         clicked = false;
//     }
// })