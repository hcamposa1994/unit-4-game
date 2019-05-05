var result;
var losses = 0;
var wins = 0;
var counter = 0;


$("#Lost").html("Losess: " + losses);
$("#Win").html("Wins: " + wins);

function setGame () {
    $(".crystals").empty();

    

    result = Math.floor(Math.random() * 101) + 19;
    $("#Goal").html(result);


    for (var i = 0; i < 4; i++) {

        var randomNum = Math.floor(1 + Math.random() * 12);
        var arrayImages = [
            "./assets/images/drawn-jinjo.jpg",
            "./assets/images/green-jinjo.jpg",
            "./assets/images/grey-jinjo.jpg",
            "./assets/images/purple-jinjo.jpg"];
        
        var loneCrystal = $("<button>");

        loneCrystal.attr({
            "class": 'crystal',
            "random-value": randomNum
        });
        loneCrystal.css({
            "background-image": "url('" + arrayImages[i] + "')",
            "background-size": "cover",
            "justify-content": "space-between"
        });

        $(".crystals").append(loneCrystal);
    }
    $("#currentCount").html("Total score: " + counter);

}

setGame();

$(document).on('click' , ".crystal", function() {
    

    var value = parseInt($(this).attr('random-value'));

    counter += value;
    $("#currentCount").html("Total score: " + counter);

    if (counter > result) {
        losses++;
        $("#Lost").html("Losess: " + losses);
        counter = 0;
        $("#message").html("You Lost!");
        setGame();
    }
    else if (counter === result) {
        wins++;
        $("#Win").html("Wins: " + wins);
        counter = 0;
        $("#message").html("You Won!");
        setGame();
    }

});