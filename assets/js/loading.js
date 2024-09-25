$(document).ready(function () {
  var percentage = 0;
  var maxPercentage = 100;
  var circumference = 2 * Math.PI * 54;

  var interval = setInterval(function () {
    percentage += 1; // Simulate progress increment

    if (percentage <= maxPercentage) {
      $("#percentage").text(percentage + "%");

      // Calculate the offset based on percentage
      var offset = circumference - (percentage / maxPercentage) * circumference;
      $(".circle-progress").css("stroke-dashoffset", offset);
    }

    if (percentage >= maxPercentage) {
      clearInterval(interval);
      $("#loader").fadeOut("slow", function () {
        $("#display-body").fadeIn("slow");
      });
    }
  }, 4);
});