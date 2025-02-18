document.addEventListener("click", function() {
    document.querySelector(".lefty").classList.add("move");
    document.querySelector(".righty").classList.add("move");
  });

  document.addEventListener("click", function() {
    setTimeout(function() {
        document.querySelector(".temp").classList.remove("temp");
    }, 7000);
});
