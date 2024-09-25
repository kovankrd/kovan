let currentIndex = 0;
let interval;
const slides = $(".carousel-slide");
const indicators = $(".carousel-indicators .indicator");
const totalSlides = slides.length;
function showSlide(index) {
  slides.hide();
  slides.eq(index).show(); // Show the current slide
  indicators.removeClass("active");
  indicators.eq(index).addClass("active");
  updateCounter();
}
function updateCounter() {
  const formattedCurrentIndex = (currentIndex + 1).toString().padStart(2, "0");
  const formattedTotalSlides = totalSlides.toString().padStart(2, "0");
  $(".counter").text(`${formattedCurrentIndex} / ${formattedTotalSlides}`);
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}
function startCarousel() {
  interval = setInterval(nextSlide, 7000);
  $(".toggle img").attr("src", "assets/images/pause.png");
}
function stopCarousel() {
  clearInterval(interval);
  interval = null;
  $(".toggle img").attr("src", "assets/images/play.png");
}
$(".next").on("click", nextSlide);
$(".prev").on("click", prevSlide);
$(".toggle").on("click", function () {
  if (interval) {
    stopCarousel();
  } else {
    startCarousel();
  }
});
$(".carousel-indicators .indicator").on("click", function () {
  currentIndex = $(this).data("index");
  showSlide(currentIndex);
});
showSlide(currentIndex);
startCarousel();