
$(document).ready(function () {
    // Offset for the fixed nav bar
    var navHeight = 2 * $('.nav').outerHeight();

    // Smooth scroll when clicking on navigation links
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = $($(this).attr('href')); // Get the target section
        var targetOffset = target.offset().top - navHeight; // Adjust position by nav height

        // Scroll to the target with an offset
        $('html, body').animate({
            scrollTop: targetOffset
        }, 600); // Adjust the duration as needed
    });
});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

document.querySelectorAll('.more-info').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link action
        alert('You clicked more info on ' + this.parentNode.querySelector('h4').textContent);
        // You can replace this alert with a modal or redirection logic.
    });
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});


