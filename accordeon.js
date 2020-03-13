$(document).ready(function() {
  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("icon-icon-fa-minus")
        .addClass("icon-fa-plus");
    } else {
      $(".set > a i")
        .removeClass("icon-fa-minus")
        .addClass("icon-fa-plus");
      $(this)
        .find("i")
        .removeClass("icon-fa-plus")
        .addClass("icon-fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});