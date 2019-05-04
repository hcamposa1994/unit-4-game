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
        
        var loneCrystal = $("<div>");

        loneCrystal.attr({
            "class": 'crystal',
            "data-random": randomNum
        });
        loneCrystal.css({
            "background-image": "url('" + arrayImages[i] + "')",
            "background-size": "cover"
        });

        $(".crystals").append(loneCrystal);
    }
    $("#currentCount").html(counter);

}

setGame();

$(document).on('click' , ".crystal", function() {
    

    var value = parseInt($(this).attr('data-random'));

    counter += value;
    $("#currentCount").html(counter);

    if (counter > result) {
        losses++;
        $("#Lost").html("Losess: " + losses);
        counter = 0;
        setGame();
    }
    else if (counter === result) {
        wins++;
        $("#Win").html("Wins: " + wins);
        counter = 0;
        setGame();
    }

});