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

var leffertsBuilding = function() {
  var lefferts = ['                                  __|||__________________________|||__',
  '                                ///|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||',
  '                              ///|||||||//     \\\||||||||||//     \\\||||||||||//     \\\||||||||||||||||',
  '      __|||________///|||||||||||||||||||      ||||||||||||      ||||||||||||       ||||||||||||||||',
  '/////|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||',
  '= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =',
  '|     [           ]      ||  [     ]  ||      ||  [     ]  ||    ||          ||    ||  [     ]  | |',
  '|                        ||           ||      ||           ||    ||          ||    ||           | |',
  '==============|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||']

  for (var i = 0; i < 11; i++) {
    if (i < 1) {
      console.log(lefferts[0]);
    } else if (i < 2) {
      console.log(lefferts[1]);
    } else if (i < 3) {
      console.log(lefferts[2]);
    } else if (i < 4) {
      console.log(lefferts[3]);
    } else if (i < 5) {
      console.log(lefferts[4]);
    } else if (i < 6) {
      console.log(lefferts[5]);
    } else if (i < 8) {
      console.log(lefferts[6]);
    } else if (i < 9) {
      console.log(lefferts[7]);
    } else if (i < 10) {
      console.log(lefferts[8]);
    } else {
      console.log(' ');
    }
  }
}

var valentineBuilding = function() {
  var valentine = ['                     __||||||_________________||||||__',
  '/////////||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\\\\\\\\\\',
  ' |       [    ]       [    ]       [    ]       [    ]       [    ]    |',
  ' |                                 //  \\                               |',
  ' |       [    ]       [    ]     //      \\     [    ]       [    ]     |',
  ' |       [    ]       [    ]    || [   ] ||    [    ]       [    ]     |',
  '  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =',
  '________________________________________________________________________',
  '||_||_||_||_||_||_||_||_||_||_||_||______||_||_||_||_||_||_||_||_||_||_||']

  for (var i = 0; i < 13; i++) {
    if (i < 1) {
      console.log(valentine[0]);
    } else if (i < 3) {
      console.log(valentine[1]);
    } else if (i < 5) {
      console.log(valentine[2]);
    } else if (i < 6) {
      console.log(valentine[3]);
    } else if (i < 7) {
      console.log(valentine[4]);
    } else if (i < 9) {
      console.log(valentine[5]);
    } else if (i < 10) {
      console.log(valentine[6]);
    } else if (i < 11) {
      console.log(valentine[7]);
    } else if (i < 12) {
      console.log(valentine[8]);
    } else {
      console.log(' ');
    }
  }
}

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

$('.infoLefferts').hide();

$('.buttonLefferts').click(function() {
  if (clicked == false) {
    $('.buttonLefferts').click(leffertsBuilding());
    $('.buttonLefferts').css('background-color', 'yellow');
    $('.infoLefferts').show();

    clicked = true;
  } else {
    $('.buttonLefferts').css('background-color', '#FDFF93');
    $('.infoLefferts').hide();
    clicked = false;
  }
});

$('.infoValentine').hide();

$('.buttonValentine').click(function() {
  if (clicked == false) {
    $('.buttonValentine').click(valentineBuilding());
    $('.buttonValentine').css('background-color', 'yellow');
    $('.infoValentine').show();

    clicked = true;
  } else {
    $('.buttonValentine').css('background-color', '#FDFF93');
    $('.infoValentine').hide();
    clicked = false;
  }
});