let audio = $("#audioLiliana");
let mainContent = $("#app");
let counter = 11;

$(document).on("click", "#startPresentation", function () {
  // Play Audio
  $(audio)[0].play();

  $("#mainCard").hide(200);
  $("#counter").removeClass("d-none");

  let dataInterval = setInterval(() => {
    counter -= 1;
    $("#counter h1").text(counter);

    if (counter < 0) {
      clearInterval(dataInterval);
      $("#counter").addClass("d-none");
      $("#quienEsCard").removeClass("d-none");
    }
  }, 1000);
});

$(document).on("click", "#goToGustar", function () {
  // $("#quienEsCard").addClass("d-none");
  // $("#gustaDeLilianaCard").removeClass("d-none");
});
