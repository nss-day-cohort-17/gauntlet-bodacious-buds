//damage functionality for health progress bar

$(document).ready(function() {
  console.log("Let's go!!");

  var health = 100;

  function attack(e){
    $('.btn').on('click', function(){
      //math placeholder for attack button damage function
      health = health - Math.floor(Math.random);
      $('.progressValue').css('width', health + '%')
    });
  }

  attack();

})

if (progressValue = 0) {
  alert("May tales of your exploits live forever...you died, though.");
}
