$(function(){

  $(window).scroll(function(){

    var navs = $(window).scrollTop();
    if ( navs > 100 ) {
      $(".header").addClass("scroll");
      $(".site-logo").find("img").attr("src", '../image/logo.png');
    } else {
      $(".header").removeClass("scroll");
      $(".site-logo").find("img").attr("src", '../image/logo2.png');
    }
    
  });
});
