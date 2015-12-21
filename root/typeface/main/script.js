var clicked = false;
var target = false;

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

//Orchard Street

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

$('.street1 .F1').html(residentialcommercial).addClass('expandTwice');
$('.street1 .F1').addClass('shift');
$('.street1 .E1').html(retail).addClass('forward');
$('.street1 .D1').html(clothing).addClass('forward');

$('.street1 .F2').html(residentialcommercial).addClass('expandTwice');
$('.street1 .F2').addClass('shift');
$('.street1 .E2').html(supply).addClass('forward');
$('.street1 .D2').html(clothing).addClass('forward');

$('.street1 .F3').html(empty).addClass('shift');
$('.street1 .E3').addClass('emptyBuild');
$('.street1 .D3').addClass('emptyBuild');

$('.street1 .F4').html(industrial).addClass('shift').addClass('expandTwice');
$('.street1 .E4').html(service).addClass('forward');
$('.street1 .D4').html(promotion).addClass('forward');

$('.street1 .F5').html(industrial).addClass('shift').addClass('expandTwice');
$('.street1 .E5').html(supply).addClass('forward');
$('.street1 .D5').html(dining).addClass('forward');

$('.street1 .F6').html(empty).addClass('shift');
$('.street1 .E6').addClass('emptyBuild');
$('.street1 .D6').addClass('emptyBuild');

$('.street1 .F7').html(empty).addClass('shift');
$('.street1 .E7').addClass('emptyBuild');
$('.street1 .D7').addClass('emptyBuild');

$('.street1 .F8').html(residentialcommercial).addClass('shift').addClass('expandTwice');
$('.street1 .E8').html(retail).addClass('forward');
$('.street1 .D8').html(gallery).addClass('forward');

$('.street1 .F9').html(industrial).addClass('shift').addClass('expandTwice');
$('.street1 .E9').html(supply).addClass('forward');
$('.street1 .D9').html(dining).addClass('forward');

$('.street1 .F10').html(empty).addClass('shift');
$('.street1 .E10').addClass('emptyBuild');
$('.street1 .D10').addClass('emptyBuild');

$('.street1 .F11').html(empty).addClass('shift');
$('.street1 .E11').addClass('emptyBuild');
$('.street1 .D11').addClass('emptyBuild');

$('.street1 .F12').html(residentialcommercial).addClass('shift').addClass('expandTwice');
$('.street1 .E12').html(retail).addClass('forward');
$('.street1 .D12').html(clothing).addClass('forward');

$('.street1 .F13').html(residentialcommercial).addClass('shift').addClass('expandTwice');
$('.street1 .E13').html(service).addClass('forward');
$('.street1 .D13').html(dining).addClass('forward');

$('.street1 .F14').html(residentialcommercial).addClass('shift').addClass('expandTwice');
$('.street1 .E14').html(retail).addClass('forward');
$('.street1 .D14').html(gallery).addClass('forward');

$('.street2 .C1').html(legal).addClass('forward');
$('.street2 .B1').html(service).addClass('forward');
$('.street2 .A1').html(advice).addClass('expandTwice');

$('.street2 .C2').html(residentialcommercial).addClass('forward');
$('.street2 .B2').html(retail).addClass('forward');
$('.street2 .A2').html(clothing).addClass('expandTwice');

$('.street2 .C3').html(residentialcommercial).addClass('forward');
$('.street2 .B3').html(retail).addClass('forward');
$('.street2 .A3').html(novelty).addClass('expandTwice');

$('.street2 .C4').html(residentialcommercial).addClass('forward');
$('.street2 .B4').html(service).addClass('forward');
$('.street2 .A4').html(dining).addClass('expandTwice');

$('.street2 .C5').html(legal).addClass('forward');
$('.street2 .B5').html(service).addClass('forward');
$('.street2 .A5').html(advice).addClass('expandTwice');

$('.street2 .C6').html(residentialcommercial).addClass('forward');
$('.street2 .B6').html(retail).addClass('forward');
$('.street2 .A6').html(gallery).addClass('expandTwice');

$('.street2 .C7').html(residentialcommercial).addClass('forward');
$('.street2 .B7').html(retail).addClass('forward');
$('.street2 .A7').html(medical).addClass('expandTwice');

$('.street2 .C8').html(residentialcommercial).addClass('forward');
$('.street2 .B8').html(retail).addClass('forward');
$('.street2 .A8').html(novelty).addClass('expandTwice');

$('.street2 .C9').html(empty);
$('.street2 .B9').addClass('emptyBuild');
$('.street2 .A9').addClass('emptyBuild');

$('.street2 .C10').html(empty);
$('.street2 .B10').addClass('emptyBuild');
$('.street2 .A10').addClass('emptyBuild');

$('.street2 .C11').html(residentialcommercial).addClass('forward');
$('.street2 .B11').html(retail).addClass('forward');
$('.street2 .A11').html(clothing).addClass('expandTwice');

$('.street2 .C12').html(residentialcommercial).addClass('forward');
$('.street2 .B12').html(supply).addClass('forward');
$('.street2 .A12').html(novelty).addClass('expandTwice');

$('.street2 .C13').html(residentialcommercial).addClass('forward');
$('.street2 .B13').html(retail).addClass('forward');
$('.street2 .A13').html(novelty).addClass('expandTwice');

$('.street2 .C14').html(residentialcommercial).addClass('forward');
$('.street2 .B14').html(retail).addClass('forward');
$('.street2 .A14').html(gallery).addClass('expandTwice');

$('.street2 .C15').html(residential);
$('.street2 .B15').addClass('emptyBuild');
$('.street2 .A15').addClass('emptyBuild');

$('.street2 .C16').html(residentialcommercial).addClass('forward');
$('.street2 .B16').html(service).addClass('forward');
$('.street2 .A16').html(dining).addClass('expandTwice');

$('.street2 .C17').html(residentialcommercial).addClass('forward');
$('.street2 .B17').html(supply).addClass('forward');
$('.street2 .A17').html(clothing).addClass('expandTwice');

$('.street2 .C18').html(residential).addClass('forward');
$('.street2 .B18').html(supply).addClass('forward');
$('.street2 .A18').html(dining).addClass('expandTwice');

$('.street2 .F1').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street2 .E1').html(retail).addClass('forward');
$('.street2 .D1').html(novelty).addClass('forward');

$('.street2 .F2').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street2 .E2').html(retail).addClass('forward');
$('.street2 .D2').html(gallery).addClass('forward');

$('.street2 .F3').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street2 .E3').html(supply).addClass('forward');
$('.street2 .D3').html(clothing).addClass('forward');

$('.street2 .F4').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street2 .E4').html(retail).addClass('forward');
$('.street2 .D4').html(gallery).addClass('forward');

$('.street2 .F5').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street2 .E5').html(service).addClass('forward');
$('.street2 .D5').html(cleaning).addClass('forward');

$('.street2 .F6').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street2 .E6').html(retail).addClass('forward');
$('.street2 .D6').html(gallery).addClass('forward');

$('.street2 .F7').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street2 .E7').html(service).addClass('forward');
$('.street2 .D7').html(cleaning).addClass('forward');

$('.street2 .F8').html(empty).addClass('shift');
$('.street2 .E8').addClass('emptyBuild')
$('.street2 .D8').addClass('emptyBuild')

$('.street2 .F9').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street2 .E9').html(retail).addClass('forward');
$('.street2 .D9').html(gallery).addClass('forward');

$('.street2 .F10').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street2 .E10').html(retail).addClass('forward');
$('.street2 .D10').html(novelty).addClass('forward');

$('.street2 .F11').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street2 .E11').html(service).addClass('forward');
$('.street2 .D11').html(dining).addClass('forward');

$('.street2 .F12').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street2 .E12').html(retail).addClass('forward');
$('.street2 .D12').html(novelty).addClass('forward');

$('.street2 .F13').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street2 .E13').html(retail).addClass('forward');
$('.street2 .D13').html(livingRoom).addClass('forward');

$('.street2 .F14').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street2 .E14').html(retail).addClass('forward');
$('.street2 .D14').html(gallery).addClass('forward');

$('.street2 .F15').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street2 .E15').html(retail).addClass('forward');
$('.street2 .D15').html(gallery).addClass('forward');

$('.street2 .F16').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street2 .E16').html(retail).addClass('forward');
$('.street2 .D16').html(clothing).addClass('forward');

$('.street2 .F17').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street2 .E17').html(service).addClass('forward');
$('.street2 .D17').html(entertainment).addClass('forward');

$('.street2 .F18').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street2 .E18').html(retail).addClass('forward');
$('.street2 .D18').html(novelty).addClass('forward');

$('.street2 .F19').html(residential).addClass('shift');
$('.street2 .E19').addClass('emptyBuild');
$('.street2 .D19').addClass('emptyBuild');

$('.street2 .F20').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street2 .E20').html(retail).addClass('forward');
$('.street2 .D20').html(market).addClass('forward');

$('.street3 .C1').html(residentialcommercial).addClass('forward');
$('.street3 .B1').html(retail).addClass('forward');
$('.street3 .A1').html(market).addClass('expandTwice');

$('.street3 .C2').html(residential);
$('.street3 .B2').addClass('emptyBuild');
$('.street3 .A2').addClass('emptyBuild');

$('.street3 .C3').html(residential);
$('.street3 .B3').addClass('emptyBuild');
$('.street3 .A3').addClass('emptyBuild');

$('.street3 .C4').html(residential);
$('.street3 .B4').addClass('emptyBuild');
$('.street3 .A4').addClass('emptyBuild');

$('.street3 .C5').html(industrial).addClass('forward');
$('.street3 .B5').html(service).addClass('forward');
$('.street3 .A5').html(promotion).addClass('expandTwice');

$('.street3 .F1').addClass('dashedBlack').addClass('shift');
$('.street3 .E1').addClass('emptyBuild');
$('.street3 .D1').addClass('emptyBuild');

$('.street3 .F2').html(community).addClass('expandTwice').addClass('shift');
$('.street3 .E2').html(service).addClass('forward');
$('.street3 .D2').html(accomodation).addClass('forward');

$('.street3 .F3').html(community).addClass('expandTwice').addClass('shift');
$('.street3 .E3').html(service).addClass('forward');
$('.street3 .D3').html(accomodation).addClass('forward');

$('.street3 .F4').html(residentialcommercial).addClass('expandTwice').addClass('shift');
$('.street3 .E4').html(retail).addClass('forward');
$('.street3 .D4').html(medical).addClass('forward');

$('.street3 .F20').hide();

$('.orchard').css('background-color', '#FFFDD6');
$('.orchard').click(function() {
        $('.orchard').css('text-decoration', 'underline');
        $('.commercialPoint').css('background-color', '#FFFDD6');
        $('.galleryPoint').css('background-color', '#FFFDD6');
         $('daycare').css('background-color', '#FFFDD6');
        $('.commercialPoint').click(function() {
            $('.commercialPoint').css('text-decoration', 'underline');
            $('.residentialcommercial div').css('border-color', 'red');
        })
        
         $('.galleryPoint').click(function() {
             $('.galleryPoint').css('text-decoration', 'underline');
            $('.gallery div').css('border-color', 'red');
        })
        
         $('.daycare').click(function() {
             $('.daycare').css('text-decoration', 'underline');
            $('.community div').css('border-color', 'red');
        })
})