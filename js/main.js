/* -- Custom jQuery code -- */

$(document).ready(function () {

    $('#header').hover(function () {
        alert('Thank you for visiting my Online Resume!');
        $(this).unbind('mouseenter mouseleave');
    });
});

/* -- jQuery Lettering Plugin -- */

$(document).ready(function () {

    $('.fancy_title').lettering();

});


/* -- jQuery ToolTip Plugin -- */

$(document).ready(function () {

    $('.tooltip').tooltipster();

});
