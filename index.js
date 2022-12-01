let audio = $("#audioLiliana");
let mainContent = $("#app");

$(document).on("click", "#startPresentation", function () {
  // Play Audio
  $(audio)[0].play();

  $(mainContent);

  setTimeout(() => {}, 10000);
});
