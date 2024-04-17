function setOpacity(selector, opacity) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function(element) {
        element.style.opacity = opacity;
    });
}

document.addEventListener('DOMContentLoaded', function(){

    function ajax(filepath, index) {
        var xhr = new XMLHttpRequest();
        
        // Clear the content of the "details" div 
        document.getElementById("details").innerHTML = '';

        xhr.onload = function() {
            if (xhr.status === 200) {
                var xmlDoc = xhr.responseXML;
                var teamMember = xmlDoc.getElementsByTagName("teamMember");

                if (index >= 0 && index < teamMember.length) {
                    var teamMember = teamMember[index];
                    var name = teamMember.getElementsByTagName("name")[0].textContent; 
                    var description = teamMember.getElementsByTagName("description")[0].textContent;

                    // Display the team member information in the "details" div
                    var detailsDiv = document.getElementById("details");
                    var nameElement = document.createElement("h3");
                    nameElement.textContent = name;
                    var descriptionElement = document.createElement("p");
                    descriptionElement.textContent = description;

                    detailsDiv.appendChild(nameElement);
                    detailsDiv.appendChild(descriptionElement);
                
                }
            }
        };

        xhr.open("GET", filepath, true);
        xhr.send();
    }

    // Call the ajax function to load XML data when the page loads
    ajax("data/team-data.xml", 0);
});