$(document).ready(function() {
  $('.cardSlide').on('click', function() {
    var $currentCard = $(this);
    var $currentDesc = $currentCard.next();
    var $currentIcon = $currentCard.find('.fa');

    var isCurrentlyVisible = $currentDesc.is(':visible');
    if (isCurrentlyVisible) {
      $currentIcon.removeClass('fa-minus').addClass('fa-plus');
    } else {
      $currentIcon.removeClass('fa-plus').addClass('fa-minus');
    }

    $currentDesc.stop(true, true).fadeToggle('slow');

    $('.cardSlide').not($currentCard).each(function() {
      var $otherCard = $(this);
      var $otherDesc = $otherCard.next();
      var $otherIcon = $otherCard.find('.fa');

      $otherDesc.stop(true, true).hide();
      $otherIcon.removeClass('fa-minus').addClass('fa-plus');
    });
  });
});