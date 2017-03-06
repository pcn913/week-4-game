
    var mainMin = 10;     //minimum number to guess
    var mainMax = 100;   //maximum number to guess
    var totalWins = 0;    //total wins to keep track of
    var totalLosses = 0;  //total losses to keep track of
    var counter = 0;     //keeps total count
    var mainNum;



    $( document ).ready(function() {
        resetAll();
    });


    //my initialzer function
    function resetAll(){
        counter = 0;
        $(".current-score").empty();
        $(".wins").text(totalWins);
        $(".losses").text(totalLosses);
        

        mainNum = Math.round(Math.random() * (mainMax-mainMin) + mainMin);
        $(".guess-score").text(mainNum);


    }


    //loop through and create the 4 crystal images.  lifted/modified from the code in class repo
    for(var i=1; i<=4; i++){
        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");

        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr("src", "assets/images/" + i + ".jpg");

        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute is set to a random number between 1 and 10
        var thisCrystalValue = Math.round(Math.random() * (10-1) + 1);
        imageCrystal.attr("data-crystalvalue", thisCrystalValue);

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $(".crystals").append(imageCrystal);
    }



  $(".crystal-image").on("click", function() {


    // mostly lifted from the code in class repo
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter = counter + crystalValue;
    $(".current-score").text(counter);

    if(counter == mainNum){
        $(".status").text('you won dude!!');
        totalWins++;
        $(".wins").text(totalWins);
        resetAll();
    }else if (counter > mainNum){
        $(".status").text('you lost dude!!');
        totalLosses++;
        $(".losses").text(totalLosses);
        resetAll();
    }



  });




