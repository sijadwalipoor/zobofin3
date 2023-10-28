window.addEventListener("scroll", function() {
    window.onscroll = function() {
        // Get the current scroll position
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
    
        // Get the total height of the document, including the scrollable area
        var totalHeight = document.documentElement.scrollHeight;
    
        // Get the height of the viewport (visible area)
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    
        // Calculate how close the user is to the end of the page
        var scrollPercentage = (scrollTop + viewportHeight) / totalHeight * 100;
    
        // Check if the user is near the end (e.g., within the last 10% of the page)
        if (scrollPercentage >= 90) {
            alert("You're at or near the end of the page!");
        }
    };
});
