//damage functionality for health progress bar

$(document).ready(function() {
  console.log("Let's go!!");

  var health = 100;



// damage functionality for player

function attack(event) {

    $('.btn').on('click', function(){
      //math placeholder for attack button damage function
      health = health - 10;
      $('.progress').css('width', health + '%')
    });
  }

// damage functionality for enemy

  // function attack(event){
  //   $('.btn').on('click', function(){
  //     //math placeholder for attack button damage function
  //     health = health - 25;
  //     $('.progress').css('width', health + '%')
  //   });
  // }

  attack();


})


if (progress = 0) {
  alert("May tales of your exploits live forever...but you dead.");
}
