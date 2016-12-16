
$("#battleTime").click(function(){



// ------player name
      setTimeout(function(){
        // $("#playerName").css("display", "inherit");
        $("#playerName").typed({
            strings: [`${objectName.name}`], // we will access prototype info and put into this array for dynamic content
            typeSpeed: 2, // typing speed
            backDelay: 1000, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    },600);

// ----player class
          setTimeout(function(){
        // $("#playerName").css("display", "inherit");
        $("#playerClass").typed({
            strings: [`${objectName.class}`], // we will access prototype info and put into this array for dynamic content
            typeSpeed: 2, // typing speed
            backDelay: 1000, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    },600);

// -----player weapon
           setTimeout(function(){
        // $("#playerName").css("display", "inherit");
        $("#playerWeapon").typed({
            strings: [`${objectName.weapon}`], // we will access prototype info and put into this array for dynamic content
            typeSpeed: 2, // typing speed
            backDelay: 1000, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    },600);


    setTimeout(function(){
        // $("#playerName").css("display", "inherit");
        $("#playerIntelligence").typed({
            strings: [`${objectName.intelligence}`], // we will access prototype info and put into this array for dynamic content
            typeSpeed: 2, // typing speed
            backDelay: 1000, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    },600);
     setTimeout(function(){
        // $("#playerName").css("display", "inherit");
        $("#playerSkinColor").typed({
            strings: [`${objectName.skinColor}`], // we will access prototype info and put into this array for dynamic content
            typeSpeed: 2, // typing speed
            backDelay: 1000, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    },600);
// =========================ENEMY +++++++++===========================
//
// // ------player name
 setTimeout(function(){
        // $("#playerName").css("display", "inherit");
        $("#enemyName").typed({
            strings: ["Enemy is bad!,"], // we will access prototype info and put into this array for dynamic content
            typeSpeed: 2, // typing speed
            backDelay: 1000, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    },1700);
// // ------player class
 setTimeout(function(){
        // $("#playerName").css("display", "inherit");
        $("#enemyClass").typed({
            strings: ["Class of Enemy,"], // we will access prototype info and put into this array for dynamic content
            typeSpeed: 2, // typing speed
            backDelay: 1000, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    },1700);
// // ------player weapon
         setTimeout(function(){
        // $("#playerName").css("display", "inherit");
        $("#enemyWeapon").typed({
            strings: ["ugly weapons"], // we will access prototype info and put into this array for dynamic content
            typeSpeed: 2, // typing speed
            backDelay: 1000, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    },1700);

})

    //
    // css color toggle colors when attack is clicked.
