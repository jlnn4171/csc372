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

// cervantes
document.getElementById("don-quixote-img").addEventListener('click', function() {
    loadHTMLFile("data/cervantes-data.html");
    setOpacity("img", 0.5); // Set opacity of all images to 0.5
    setOpacity("#don-quixote-img", 1); // Set opacity of clicked image to 1
});

// dickens
document.getElementById("two-cities-img").addEventListener('click', function() {
    loadHTMLFile("data/dickens-data.html");
    setOpacity("img", 0.5); // Set opacity of all images to 0.5
    setOpacity("#two-cities-img", 1); // Set opacity of clicked image to 1
});

// tolkien
document.getElementById("lotr-img").addEventListener('click', function() {
    loadHTMLFile("data/tolkien-data.html");
    setOpacity("img", 0.5); // Set opacity of all images to 0.5
    setOpacity("#lotr-img", 1); // Set opacity of clicked image to 1
});
