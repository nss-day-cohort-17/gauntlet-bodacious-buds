//damage functionality for health progress bar

$(document).ready(function() {
  console.log("Let's go!!");

  var health = 100;

// damage functionality for player and enemy

function attack(e) {
    $('#attackButton').on('click', function(){
      //math placeholder for attack button damage function
      health = health - 10;
      $('#playerHealth').css('width', health + '%')
      $('#enemyHealth').css('width', health + '%')
    });
  }

  attack();

})


if (playerHealth = 0) {
  alert("May tales of your exploits live forever...but you dead.");
}
