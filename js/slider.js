function createSlick(){
  $('.slider').not('.slick-initialized').slick({
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    fade: true,
    touchMove: false,
    pauseOnHover: false,
    pauseOnFocus: false
  });
}
