$(window).scroll(function() {
    if (checkVisible($('#tester'))) {
        $('.videowrapper').addClass('fullw');    
    } else {
        $('.videowrapper').removeClass('fullw');
    }
});

function checkVisible( elm, eval ) {
    eval = eval || "visible";
    var vpH = $(window).height() / 2, // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();
    
    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (eval == "above") return ((y < (vpH + st)));
}


var video = document.getElementById('video');
var button = document.getElementById('playbtn');

button.addEventListener('click', function () {
  video.play();
  
});

$('.videosection__video').click(function(){
    $('#playbtn').hide();
})