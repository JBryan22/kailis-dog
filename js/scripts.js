$(document).ready(function() {
  $("#dark").click(function() {
    $("body").removeClass("light-background");
    $("body").addClass("dark-background");
  });
  
  $("#light").click(function() {
    $("body").removeClass("dark-background");
    $("body").addClass("light-background");
  });
});
