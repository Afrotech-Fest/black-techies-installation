$(window).scroll(function(){
    $(".arrow-side").css("opacity", 1 - $(window).scrollTop() / 250);
  });

/*win.scroll(function(){
  scrollPosition = win.scrollTop();
  scrollRatio = 1 - scrollPosition / 300;
  $(".arrow-side").css("opacity", scrollRatio);
*/





/*$(window).scroll(function(){
    var scrollVar = $(window).scrollTop();
    $('.arrow-side').css("opacity", 1 - scrollVar/300);
})*/