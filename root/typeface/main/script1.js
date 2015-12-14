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


$('.orchard').click(function() {
    // $('.street1 .A1').toggleClass('specialPowers');
    $('.street1 .A1').html(livingRoom);
    $('.street1 .A1 div').toggle();
    
})