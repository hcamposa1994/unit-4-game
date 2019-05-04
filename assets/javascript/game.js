var result = Math.floor(Math.random() * 101) + 19;
var losses;
var wins;
var counter = 0;


$("#Goal").html(result);

for (var i = 0; i < 4; i++) {

    var randomNum = Math.floor(1 + Math.random() * 12);
    
    var loneCrystal = $("<div>");

    loneCrystal.attr({
        "class": 'crystal',
        "data-random": randomNum
    });

    $(".crystals").append(loneCrystal);
}

$(".crystal").on('click', function() {
    

    var value = parseInt($(this).attr('data-random'));

    counter += value;

    console.log(counter);

});