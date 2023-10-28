window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var totalHeight = document.documentElement.scrollHeight;
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    var scrollPercentage = (scrollTop + viewportHeight) / totalHeight * 100;

    if (scrollPercentage >= 99) {
        var arrowIcon = document.querySelector(".fa-solid.fa-arrow-up.fa-2xl");

        // Add the "fa-bounce" class to the arrow icon
        arrowIcon.classList.add("fa-bounce");

        // Start the bounce animation for 3 seconds
        setTimeout(function () {
            arrowIcon.classList.remove("fa-bounce"); // Remove the class after the animation
        }, 5000);
    }
});