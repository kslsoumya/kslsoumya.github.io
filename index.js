$(document).ready(() => {


  var $nav = $(".navbar");
  var $info = $(".basicInfo");
  if ($(this).scrollTop() > $info.height() - 80) {
    $(".navbar").addClass("bg-light");
    $(".navbar")
      .removeClass("navbar-dark")
      .addClass("navbar-light");
    $("#name,#caption").css("color", "black");
  } else {
    $(".navbar").removeClass("bg-light");
    $(".navbar")
      .removeClass("navbar-light")
      .addClass("navbar-dark");

    $("#name,#caption").css("color", "aliceblue");
  }
  var pathname = window.location.href.split("html")[1];

  $('#navbarNav > ul>li > a[href="' + pathname + '"]')
    .parent()
    .addClass("active");

  $(document).scroll(function() {
    if ($(this).scrollTop() > $info.height()) {
      $(".navbar").addClass("bg-light");
      $(".navbar")
        .removeClass("navbar-dark")
        .addClass("navbar-light");
      $("#name,#caption").css("color", "black");
    } else {
      $(".navbar").removeClass("bg-light");
      $(".navbar")
        .removeClass("navbar-light")
        .addClass("navbar-dark");
      $("#name,#caption").css("color", "aliceblue");
    }
    var scrollPos = $(document).scrollTop();
    $("#navbarNav ul li a").each(function() {
      $('#navbarNav > ul>li > a[href="#intro"]')
        .parent()
        .removeClass("active");

      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $("#navbarNav ul li a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });

    if ($(this).scrollTop() >= 50) {
      // If page is scrolled more than 50px
      $("#scrollTop").fadeIn(200); // Fade in the arrow
    } else {
      $("#scrollTop").fadeOut(200); // Else fade out the arrow
    }
  });
  $("#scrollTop").click(function() {
    // When arrow is clicked
    $("body,html").animate(
      {
        scrollTop: 0 // Scroll to top of body
      },
      500
    );
  });

});
