$(document).ready(function() {
  function Game() {
    this.player1 = 'Player 1';
    this.player2 = 'Player 2';

    var getPlayerNames = function() {
      this.player1 = prompt("Player 1, Enter Your Name", "Player 1");
      this.player2 = prompt("Player 2, Enter Your Name", "Player 2");
    }

    var displayPlayerNames = function() {
      $("#p1").text(this.player1);
      $("#p2").text(this.player2);
      console.log("Names Entered & Ready");
    }
    this.gameOver = function(player1Score, player2Score) {
      var winner = null;
      var message = null;
      if (player1Score > player2Score) {
        var winner = $("#p1").text();
        var message = 'Winner is ' + winner;
      } else if (player1Score < player2Score) {
        var winner = $("#p2").text();
        var message = 'Winner is ' + winner;
      } else {
        winner = 'Tie!';
        message = "It's A Tie! Play Again!";
      }
      console.log(message);
      $('#winner').text(winner)
    }
    this.start = function() {
      getPlayerNames()
      displayPlayerNames()
    }
  } // Game object

  var game = new Game();
  game.start();


  var table = $('td');


  for (var i = 0; i < 12; i++) {
    table[i].addEventListener('click', changeColor);
  }

  function changeColor(event) {

    var td = $(event.target);
    td.attr("bgcolor", "CF000F");

  }


  var lock = $('#block');

  lock.on('click', function() {
    for (var i = 0; i < 12; i++) {
      table[i].removeEventListener('click', changeColor);
      lock.hide();
    }
  })

  var start = $('#bstart');
  start.on('click', function() {
    p1hit.show();
    start.hide();
  })

  var restart = $('#brestart');
  restart.on('click', function() {
      location.reload();
    })
    // Player 1 Round 1
  var p1hit = $('#p1hitb');

  function random() {
    return Math.floor((Math.random() * 12) + 1);
  }

  var p1r1Value = random()
  var p1r2Value = random()
  var p1r3Value = random()
  var level = 1
  var p2hit = $('#p2hitb');
  var whowin = $('.whowin');

  p1hit.on('click', function() {
    if (level === 1) {
      document.getElementById("p1r1");
      $("#p1").text(this.player1);
      p1r1.innerText = "Round 1 : " + p1r1Value;
      p1hit.hide();
      p2hit.show();
    } else if (level === 2) {
      document.getElementById("p1r2");
      $("#p1").text(this.player1);
      p1r2.innerText = "Round 2 : " + p1r2Value;
      p1hit.hide();
      p2hit.show();
    } else if (level === 3) {
      document.getElementById("p1r3");
      p1r3.innerText = "Round 3 : " + p1r3Value;
      p1hit.hide();
      p2hit.show();
    }

  });
  var p2r1Value = random()
  var p2r2Value = random()
  var p2r3Value = random()

  p2hit.on('click', function() {
    if (level === 1) {
      document.getElementById("p2r1");
      p2r1.innerText = "Round 1 :" + " " + p2r1Value;
      p2hit.hide();
      p1hit.show();
      level = level + 1;
    } else if (level === 2) {

      document.getElementById("p2r2");
      p2r2.innerText = "Round 2 :" + " " + p2r2Value;
      p2hit.hide();
      p1hit.show();
      level = level + 1;
    } else if (level === 3) {
      document.getElementById("p2r3");
      p2r3.innerText = "Round 3 :" + " " + p2r3Value;
      p2hit.hide();
      p1hit.hide();

      p1t.innerText = "Total Score :" + " " + (p1r1Value + p1r2Value + p1r3Value);
      p2t.innerText = "Total Score :" + " " + (p2r1Value + p2r2Value + p2r3Value);
      var total1 = (p1r1Value + p1r2Value + p1r3Value);
      var total2 = (p2r1Value + p2r2Value + p2r3Value);

      whowin.show();

      game.gameOver(total1, total2);

    }
  })

});
