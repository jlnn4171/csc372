var clicks = 0;

$("#image").on('click', function(){
    clicks++;
    $("#clickAmount").text("You clicked " + clicks + " times");
});
