$(document).ready(function () {
    $("a.desplegable").toggle(
        function () {
            $("nav.menu").slideDown('');
        },
        function () {
            $("nav.menu").slideUp('');
        }
    );
    $(window).resize(function () {
        if ($(this).width() > 750) {
            $("nav.menu").show();
        } else {
            $("nav.menu").hide();
        }
    });
});

// $(window).load(function () {
//     $('#slider').nivoSlider({
//         controlNav: false
//     });
// });