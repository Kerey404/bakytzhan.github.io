$(document).ready(function() {
  console.log("jQuery is ready!");
  
  // Task 0
  $("#checkReady").click(() => {
    $("#readyStatus").text("✅ jQuery is ready!");
  });

  // Task 1
  $("#changeText").click(() => {
    $("#byId").text("Changed by ID!");
    $(".byClass").html("<b>Changed by Class!</b>");
    $("p").css("color", "#2c3e50");
  });

  // Task 2
  $("#hide").click(() => $("#text").hide());
  $("#show").click(() => $("#text").show());
  $("#toggle").click(() => $("#text").toggle());

  // Task 3
  $("#fadeIn").click(() => $("#fadeImg").fadeIn());
  $("#fadeOut").click(() => $("#fadeImg").fadeOut());
  $("#fadeToggle").click(() => $("#fadeImg").fadeToggle());

  // Task 4
  $("#slideBtn").click(() => $("#panel").slideToggle());

  // Task 5
  let count = 1;
  $("#addItem").click(() => {
    count++;
    $("#itemList").append(`<li>Item ${count}</li>`);
  });
  $("#removeItem").click(() => {
    $("#itemList li:last").remove();
  });

  // Task 6
  $("#changeSrc").click(() => {
    $("#switchImg").attr("src", `https://picsum.photos/150?random=${Math.random()}`);
  });
  $("#changeLink").click(() => {
    $("#myLink").attr("href", "https://www.wikipedia.org").text("Go to Wikipedia");
  });

  // Task 7
  $("#nameInput, #emailInput").on("input", () => {
    $("#showName").text($("#nameInput").val());
    $("#showEmail").text($("#emailInput").val());
  });

  // Task 8
  $("#animateBox").click(() => {
    $("#box").animate({ left: "200px", width: "150px", height: "150px" }, 1000);
  });

  // Task 9
  $("#seqAnimate").click(() => {
    $("#seqBox")
      .animate({ left: "200px" }, 800)
      .animate({ top: "100px" }, 800)
      .animate({ width: "50px", height: "50px" }, 800)
      .animate({ left: "0px", top: "0px", width: "100px", height: "100px" }, 800);
  });

  // Task 10
  $("#comboAnimate").click(() => {
    $("#comboBox").animate({
      left: "150px",
      opacity: 0.5,
      width: "120px",
      height: "120px"
    }, 1000);
  });

  // Task 11 — Accordion
  $(".accordion h3").click(function() {
    $(this).next(".content").slideToggle().siblings(".content").slideUp();
  });
});
