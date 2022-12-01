let audio = $("#audioLiliana");
let mainContent = $("#app");
let counter = 11;

$(document).on("click", "#startPresentation", function () {
  // Play Audio
  $(audio)[0].play();

  $("#mainCard").hide(200);

  setInterval(() => {
    counter -= 1;
    console.log(counter);
    $("#counter h1").text(counter);
  }, 1001);
});
