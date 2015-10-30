var bartow = function() {
  var bartow = ['                             ||||||_________________||||||',
'             /////|||||||||||||||||||||||||||||||||||||||||||||||||',
'/////||||||||     [| |]     [| |]     [[ ]]     [| |]     [| |]  ||||||||',
'/////|||||||| ++++++++++++++++++++++++++++++++++++++++++++++++++ ||||||||',
'|    [| |]  |     [| |]     [| |]     [| |]     [| |]     [| |]  |[| |] |',
 '====================++++++++++++++++++++++++++++++++++++====================',
 '                      \\// \\// \\//_________\\// \\// \\//']
  for (var i = 0; i < 12; i++) {
    if (i < 1) {
      console.log(bartow[0]);
      console.log(bartow[1]);
      console.log(bartow[1]);
    } else if (i < 2) {
      console.log(bartow[2]);
    } else if (i < 3) {
      console.log(bartow[3]);
    } else if (i < 6) {
      console.log(bartow[4]);
    } else if (i < 7) {
      console.log(bartow[2]);
    } else if (i < 8) {
      console.log[bartow[5]];
    } else if (i < 12) {
      console.log(bartow[6]);
    }
  }
}

//$('.info').hide();
var clicked = false;
$('.info').hide();

$('.buttonBartow').click(function() {
  if (clicked == false) {
    $('.buttonBartow').click(bartow());
    $('.buttonBartow').css('background-color', 'yellow');
    $('.info').show();
    clicked = true;
  } else {
    $('.buttonBartow').css('background-color', '#FDFF93');
    $('.info').hide();
    clicked = false;
  }
});

$('.exit').click(function() {
  if (clicked == true) {
    $('.buttonBartow').css('background-color', '#FDFF93');
    $('.info').hide();
    clicked = false;
  }
})