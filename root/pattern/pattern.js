var bartowBuilding = function() {
  
  var bartow = ['                             ||||||_________________||||||',
  '             /////|||||||||||||||||||||||||||||||||||||||||||||||||',
  '/////||||||||     [| |]     [| |]     [[ ]]     [| |]     [| |]  ||||||||',
  '/////|||||||| ++++++++++++++++++++++++++++++++++++++++++++++++++ ||||||||',
  '|    [| |]  |     [| |]     [| |]     [| |]     [| |]     [| |]  |[| |] |',
   '====================++++++++++++++++++++++++++++++++++++====================',
   '                      \\// \\// \\//_________\\// \\// \\//']
   
  for (var i = 0; i < 13; i++) {
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
    } else if (i < 13) {
      console.log(' ');
    }
  }
}

var edgarBuilding = function() {
  
  var edgar = ['       __________________||||||_',
  '//////||||||||||||||||||||||||||||||||||||||||||\\\\\\\\',
  '|      [       ]                 [       ]      |',
  '//////||||||||||||||||||||||||||||||||||||||||||\\\\\\\\\\\\\\',
  '_______________________________________________________________||||||',
  '  |||   |    |||    [       ]    |||   [       ]   ||| [      ] |||\\',
  '====================================================== |_____|______|',
  '|_||_||_||_||_||_||_||_||_||_||_||_||_||_||_||_||_||_  |_____| [  ] |']

  for (var i = 0; i < 11; i++) {
    if (i < 1) {
      console.log(edgar[0]);
    } else if (i < 3) {
      console.log(edgar[1]);
    } else if (i < 4) {
      console.log(edgar[2]);
    } else if (i < 5) {
      console.log(edgar[3]);
    } else if (i < 6) {
      console.log(edgar[4]);
    } else if (i < 7) {
      console.log(edgar[5]);
    } else if (i < 8) {
      console.log(edgar[6]);
    } else if (i < 9) {
      console.log(edgar[7])
    } else if (i < 10) {
      console.log(edgar[6]);
    } else if (i < 11) {
      console.log(' ');
    }
  }
};

var clicked = false;

$('.infoBartow').hide();

$('.buttonBartow').click(function() {
  if (clicked == false) {
    $('.buttonBartow').click(bartowBuilding());
    $('.buttonBartow').css('background-color', 'yellow');
    $('.infoBartow').show();
    
    clicked = true;
  } else {
    $('.buttonBartow').css('background-color', '#FDFF93');
    $('.infoBartow').hide();
    clicked = false;
  }
});

$('.infoEdgar').hide();

$('.buttonEdgar').click(function() {
  if (clicked == false) {
    $('.buttonEdgar').click(edgarBuilding());
    $('.buttonEdgar').css('background-color', 'yellow');
    $('.infoEdgar').show();
    
    clicked = true;
  } else {
    $('.buttonEdgar').css('background-color', '#FDFF93');
    $('.infoEdgar').hide();
    clicked = false;
  }
});