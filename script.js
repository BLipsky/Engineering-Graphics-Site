document.addEventListener("click", function() {
    document.querySelector(".lefty").classList.add("move");
    document.querySelector(".righty").classList.add("move");
  });

  document.addEventListener("click", function() {
    setTimeout(function() {
        document.querySelector(".temp").classList.remove("temp");
    }, 7000);
});
    var myCarousel = document.querySelector('#carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        wrap: true
    });
