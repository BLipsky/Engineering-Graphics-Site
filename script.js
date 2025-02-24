document.addEventListener("click", function () {
    document.querySelector(".lefty").classList.add("move");
    document.querySelector(".righty").classList.add("move");
});

document.addEventListener("click", function () {
    setTimeout(function () {
        document.querySelector(".temp").classList.remove("temp");
    }, 7000);
});
var myCarousel = document.querySelector('#carouselExampleIndicators');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: true
});


// gallery js start 
$('.gallery ul li a').click(function () {
    var itemID = $(this).attr('href');
    $('.gallery ul').addClass('item_open');
    $(itemID).addClass('item_open');
    return false;
});
$('.close').click(function () {
    $('.port, .gallery ul').removeClass('item_open');
    return false;
});

$(".gallery ul li a").click(function () {
    $('html, body').animate({
        scrollTop: parseInt($("#top").offset().top)
    }, 400);
});
// gallery js end 