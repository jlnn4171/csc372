// Wait for the document to be fully loaded before executing the code
$(document).ready(function() {

    // Fade-in elements functionality
    var fadeElements = $(".fadeIn"); // Select elements with the class "fadeIn"

    function isElementInViewport(el) {
        // Check if the element is within the viewport
        var rect = el[0].getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScrollFade() {
        // Check and fade in elements when they come into the viewport
        fadeElements.each(function() {
            var element = $(this);
            if (isElementInViewport(element) && element.css("opacity") !== "1") {
                element.css("opacity", 1); // Set opacity to 1 for a fade-in effect
            }
        });
    }

    // Attach the handleScrollFade function to the scroll event
    $(window).scroll(handleScrollFade);

    handleScrollFade(); // Trigger the handleScrollFade function on page load to check initial visibility
});
