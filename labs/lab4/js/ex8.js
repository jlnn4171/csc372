$("#snake").hide();
$("#announcement").hide();

$("#snake").slideDown(3000,
    () => {
        $("#announcement").text("The snake has arrived!"); 
        $("#announcement").show();
    }
);