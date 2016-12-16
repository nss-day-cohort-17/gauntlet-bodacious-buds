/*
  Test code to generate a human player and an orc player
 */
// var billy = new Gauntlet.Combatants.Human();
// billy.setWeapon(new WarAxe());
// billy.generateClass();
//

var protagonist = new Gauntlet.Combatants.Human();
  protagonist.playerName = $('#player-name').val()
// console.log(protagonist.toString())

// class save text

 $('#warrior').click(function() {
// switch()
// case 'warrior' = new Gauntlet.GuildHall.Warrior()
// case 'valkyrie' =

})


 // $("#generateClass").click(function(){

 //  protagonist.class =  generateClass()
 // })

 $('body').click(function() {
  var target = $(event.target)
  textText = target.find('.btn__class').text()
    // var textText = e.target.text().toLowerCase;
    // var moveAlong = false;
    //
    console.log(textText)

 switch (textText) {
      case "Warrior":

        protagonist.class = new Gauntlet.GuildHall.Warrior;
        break;
      case "Valkyrie":

        protagonist.class = new Gauntlet.GuildHall.Valkyrie;
        break;
      case "Berserker":
         protagonist.class = new Gauntlet.GuildHall.Berserker;
      break;
      case "Monk":
         protagonist.class = new Gauntlet.GuildHall.Monk;
      break;

      case "Wizard":
         protagonist.class = new Gauntlet.GuildHall.Wizard;
      break;
      case "Sorcerer":
         protagonist.class = new Gauntlet.GuildHall.Sorcerer;
      break;

      case "Conjurer":
         protagonist.class = new Gauntlet.GuildHall.Conjurer;
      break;
      case "Thief":
         protagonist.class = new Gauntlet.GuildHall.Thief;
      break;

      case "Ninja":
         protagonist.class = new Gauntlet.GuildHall.Ninja;
      break;
      case "Assassin":
         protagonist.class = new Gauntlet.GuildHall.Assassin;
      break;


      // default:
      //   protagonist.class = "no matches big guy!";
      //   break;
    }
    // this is generate random class
    // if (moveAlong) {
    //   $(".card").hide();
    //   $("." + nextCard).show();
    // }
  });

 $('body').click(function() {
  var target = $(event.target)
  superWeaponweapon = target.find('.btn__class').text()
    // var textText = e.target.text().toLowerCase;
    // var moveAlong = false;
    //
    console.log(superWeaponweapon)

 switch (superWeaponweapon) {
      case "Dagger":

        protagonist.class = Dagger;
        break;

      case "Lucille":

        protagonist.weapon = Lucille;
        break;

      case "Broad Sword":
         protagonist.weapon = BroadSword;
      break;

       case "Battle Axe":
         protagonist.weapon = WarAxe;
      break;



      // default:
      //   protagonist.class = "no matches big guy!";
      //   break;
    }
    // this is generate random class
    // if (moveAlong) {
    //   $(".card").hide();
    //   $("." + nextCard).show();
    // }
  });





$("#name-button").click(function(){

  protagonist.name =  $('#player-name').val()

  // protagonist.class = $("classClicked").click()

// use this to set random class on click
//  // protagonist.generateClass();

//  // console.log(protagonist)




// console.log(Gauntlet.Combatants.Human())
})



// console.log(billy)

// billy.



// This will be used for "Surprise me" option
// console.log(warrior.toString());

// // var orc = new Gauntlet.Combatants.Orc();
// orc.generateClass();
// orc.setWeapon(new BroadSword());
// // console.log(orc.toString());


// gamer character creation

var gamer;
var gamerName;
var gamerClass;
var gamerWeapon;
var gamerStrength;
var gamerIntelligence;

// jQuery event listener for name ---> classes

$('#selectClass').click(function() {
  gamerName = $('#player-name')[0].value
  console.log('gamerName', gamerName);

  gamer =new Gauntlet.Combatants.Player(gamerName)
})

// jQuery event listener for classes ---> weapons : halfway resolved


$('body').click(function() {
  var target = $(event.target)
  gamerClass = target.find('.btn__class').text()
  // console.log(target)
  // gamer.class = gamerClass
  // gamerClass = Gauntlet.GuildHall.$(this)
  console.log("gamer's class", gamerClass)
  return;

})

// jQuery event listener for weapons ---> fight

$('body').click(function() {
  var target = $(event.target)
  gamerWeapon = target.find('.btn__weapon').text()
  // console.log(target)
  // gamer.weapon = gamerWeapon
  // gamerWeapon = Gauntlet.GuildHall.$(this)
  console.log("gamer's weapon", gamerWeapon)
  return;

})
/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());


$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
        moveAlong =($("player-name").val() !== "")
      break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});
