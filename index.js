const canvas = document.getElementById("canvas");
const jsConfetti = new JSConfetti({ canvas });
let audio = $("#audioLiliana");
let mainContent = $("#app");
let counter = 24;

$(document).on("click", "#startPresentation", function () {
  // Play Audio
  $(audio)[0].play();

  $("#mainCard").addClass("d-none");
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
  $("#quienEsCard").addClass("d-none");
  $("#gustaDeLilianaCard").removeClass("d-none");
});

$(document).on("click", "#goToFeel", function () {
  $("#gustaDeLilianaCard").addClass("d-none");
  $("#lilianaFeelCard").removeClass("d-none");
});

$(document).on("click", "#goToFinalCard", function () {
  $("#lilianaFeelCard").addClass("d-none");
  $("#finalCard").removeClass("d-none");

  setInterval(() => {
    jsConfetti.addConfetti({
      emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"],
    });
  }, 2000);
});
