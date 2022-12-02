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

  const canvas = document.getElementById("canvas");
  const jsConfetti = new JSConfetti({ canvas });

  setInterval(() => {
    jsConfetti.addConfetti({
      emojis: ["🌸"],
    });
  }, 1000);

  setTimeout(() => {
    $("#finalCard").addClass("d-none");

    $(".content .container-fluid .row #app").html(`
      <h1 class="text-center col-12 text-white fw-bold" style="font-size: 3.5rem">ADIÓS ❤️</h1>
    `);
  });
});
