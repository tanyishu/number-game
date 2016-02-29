$(document).ready(function()
{
    getNames();
    console.log($('td'))
});

function getNames() {
  var qn1 = prompt("Player 1, Enter Your Name", "Player 1");
  var qn2 = prompt("Player 2, Enter Your Name", "Player 2");
  if (qn1 !== null && qn2 !== null) {
    $("#p1").text(qn1);
        $("#p2").text(qn2);
    console.log("Names Entered & Ready");
}}

var table = $('td');


for(var i = 0; i < 12; i++){
     table[i].addEventListener('click', changeColor);
   }

  function changeColor(event)
  {

    var td= $(event.target);
    td.attr("bgcolor","CF000F");

  }
