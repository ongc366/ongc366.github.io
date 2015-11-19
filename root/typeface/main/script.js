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

//Orchard Street

$('.orchard').click(function() {
    if (clicked == false) {
        $('.street1 .A4').html(residential);
        $('.street1 .D2').html(commercial);
        $('.street1 .A1').html(religious);
        $('.street1 .D1').addClass('emptyBuild');
        clicked = true;
    } else {
        $('.street1 .A1').empty();
        $('.street1 .A4').empty();
        $('.street1 .D2').empty();
        $('.street1 .D1').removeClass('emptyBuild');
        clicked = false;
    }
})

//Eldridge Street

//Pell Street

//Grand Street

//Canal Street