let audio = $("#audioLiliana");

$(document).on("click", "#startPresentation", function () {
  $(audio)[0].play();
});
