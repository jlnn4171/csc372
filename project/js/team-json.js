function setOpacity(selector, opacity) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function(element) {
        element.style.opacity = opacity;
    });
}

document.addEventListener('DOMContentLoaded', function(){

    function loadJSON(filepath) {
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {

                    // get json data from server using responseText property
                    var jsonData = JSON.parse(xhr.responseText);
                    
                    // variable for new html data
                    var newHTML = '';

                    // for loop to add contents to the new variable along with their corresponding HTML words
                    jsonData.teamMember.forEach(function(teamMember) {
                        newHTML += '<h3>' + teamMember.name + '</h3>';
                        newHTML += '<p>' + teamMember.description + '</p>';
                    });

                    document.getElementById("details").innerHTML = newHTML;
                } else {
                    console.error('Error loading JSON file. Status:', xhr.status);
                }
            }
        };

        xhr.open("GET", filepath, true);
        xhr.send();
    }

    //event listener to trigger the function above
    document.getElementById("roseHead-img").addEventListener('click', function() {
        loadJSON("data/team-data.json"); 
    });
});
