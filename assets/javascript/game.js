// 1 Create a function that generates a different random # at the start of each game
// (the number has to be between 19 and 120)
// 2 Create a function for all the crystal options that generate a random number
// (between 1 and 12) and adds them up until you either match the randomly
//  generated number(win) or go over it(lost)
// 3 Create a function that tracks wins and loses and 
//  that alerts user when he's either won or lost
// 4 Create a function that adds the points as you click the 
// crystals to try to guess the random number

$(document).ready(function () {

  // var randomNumber = Math.floor(Math.random() * 101 + 19);
  var randomNumber = Math.floor(Math.random() * 101) + 19;
  $("#random").html(randomNumber);


  var red = Math.floor(Math.random() * 12);
  $("#total").html(red);

  var blue = Math.floor(Math.random() * 12);
  $("#total").html(blue);

  var yellow = Math.floor(Math.random() * 12);
  $("#total").html(yellow);

  var purple = Math.floor(Math.random() * 12);
  $("#total").html(purple);



  var wins = 0;
  var loses = 0;
  var total = 0;
  $("#total").text(total);



  $("#red").click(function () {
    total = total + red;
    $("#total").text(total);
    if (total === randomNumber) {
      wins++;
      $("#wins").html("wins: " + wins);
      reset();
      resetTwo();

    }
    else if (total > randomNumber) {
      loses++;
      $("#loses").html("loses: " + loses);
      reset();
      resetTwo();
    }
  });
  $("#blue").click(function () {
    total = total + blue;
    $("#total").text(total);
    if (total === randomNumber) {
      wins++;
      $("#wins").html("wins: " + wins);
      reset();
      resetTwo();

    }
    else if (total > randomNumber) {
      loses++;
      $("#loses").html("loses: " + loses);
      reset();
      resetTwo();
    }
  });

  $("#yellow").click(function () {
    total = total + yellow;
    $("#total").text(total);
    if (total === randomNumber) {
      wins++;
      $("#wins").html("wins: " + wins);
      reset();
      resetTwo();
    }
    else if (total > randomNumber) {
      loses++;
      $("#loses").html("loses: " + loses);
      reset();
      resetTwo();
    }

  });

  $("#purple").click(function () {
    total = total + purple;
    $("#total").text(total);
    if (total === randomNumber) {
      wins++;
      $("#wins").html("wins: " + wins);
      reset();
      resetTwo();
    }
    else if (total > randomNumber) {
      loses++;
      $("#loses").html("loses: " + loses);
      reset();
      resetTwo();
    }

  });

  function reset() {
    total = 0;
    $("#total").text(total);
  }

  function resetTwo() {
    var randomNumber = Math.floor(Math.random() * 101) + 19;
    $("#random-number").text(randomNumber);
    red = Math.floor(Math.random() * 11)  + 1;
    blue = Math.floor(Math.random() * 11) + 1;
    yellow = Math.floor(Math.random() * 11) + 1;
    purple = Math.floor(Math.random() * 11)+ 1;
  }

});

