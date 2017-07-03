$(document).ready(function() {
  var light = true;
  // $("#dark").click(function() {
  //   $("body").removeClass("light-background");
  //   $("body").addClass("dark-background");
  // });
  //
  // $("#light").click(function() {
  //   $("body").removeClass("dark-background");
  //   $("body").addClass("light-background");
  //});

  $("#toggle-light").click(function() {
    if (light === true) {
      $("#toggle-light").text("Light!");
      $("body").removeClass("light-background");
      $("body").addClass("dark-background");
      light = false;
    } else {
      $("#toggle-light").text("Dark!");
      $("body").removeClass("dark-background");
      $("body").addClass("light-background");
      light = true;
    };
  });
});
