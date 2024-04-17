function setOpacity(selector, opacity) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function(element) {
        element.style.opacity = opacity;
    });
}

function loadHTMLFile(filePath) {
    // Create XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Define a function to handle the response
    xhr.onreadystatechange = function() {
        // Check if the request is complete
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // Check if server status is OK
            if (xhr.status === 200) {
                // Update the div with id "details" with the response HTML
                document.getElementById("details").innerHTML = xhr.responseText;
            } else {
                // Log error if server status is not OK
                console.error('Error loading HTML file. Status:', xhr.status);
            }
        }
    };

    // Prepare the request
    xhr.open("GET", filePath, true); // Specify GET method, file path, and make it asynchronous

    // Send the request
    xhr.send();
}

// mom
document.getElementById("roseHead-img").addEventListener('click', function() {
    loadHTMLFile("data/rosemary.html");
    setOpacity("img", 0.5); // Set opacity of all images to 0.5
    setOpacity("#roseHead-img", 1); // Set opacity of clicked image to 1
});

// dad
document.getElementById("andyHead-img").addEventListener('click', function() {
    loadHTMLFile("data/andy.html");
    setOpacity("img", 0.5); 
    setOpacity("#andyHead-img", 1); 
});

// co loan
document.getElementById("tiffHead-img").addEventListener('click', function() {
    loadHTMLFile("data/tiff.html");
    setOpacity("img", 0.5); 
    setOpacity("#tiffHead-img", 1); 
});

//nga
document.getElementById("tinaHead-img").addEventListener('click', function() {
    loadHTMLFile("data/tina.html");
    setOpacity("img", 0.5); 
    setOpacity("#tinaHead-img", 1); 
});

//sue
document.getElementById("lindsHead-img").addEventListener('click', function() {
    loadHTMLFile("data/linds.html");
    setOpacity("img", 0.5); 
    setOpacity("#lindsHead-img", 1); 
});