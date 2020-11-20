var swiperMain = new Swiper('.main-container', {
  slidesPerView: 4,
  spaceBetween: 16,
  pagination: {
    el: '.team-pagination',
    clickable: true,
  },
});

var swiperMain = new Swiper('.partners-container', {
  slidesPerView: 6,
  spaceBetween: 16,
  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  },
});

var swiperMain = new Swiper('.context-container', {
  slidesPerView: 3,
  spaceBetween: 55,
  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  },
});


$('.faq-title').on('click', function() {
  $(this).next().slideToggle();
})


$('.about').hover(
  function() {
    $('.about-dropdown').addClass('hover');
  },
  function () {
    $('.about-dropdown').removeClass("hover");
  }
);

$('.lang-bar').hover(
  function() {
    $('.about-dropdown2').addClass('hover');
    $('.lang-arrow').addClass('rotate');
  },
  function () {
    $('.about-dropdown2').removeClass('hover');
    $('.lang-arrow').removeClass('rotate');
  }
);

$('.apply-now').click(function(e) {
  $('.apply-form').addClass('opened');
  $('body').css('overflow', 'hidden');
  e.preventDefault();
})

$('.x-btn').click( ()=> { 
  $('.apply-form').removeClass('opened');
  $('body').css('overflow', 'scroll');
});

$('.main-slide').click(function(e) {
  window.scrollTo(0, 0);
  $('.person-info').addClass('opened');
  $('body').css('overflow', 'hidden');
  e.preventDefault();
})

$('.x-btn1').click( ()=> { 
  $('.person-info').removeClass('opened');
  $('body').css('overflow', 'scroll');
});

// var mapOptions = {
//   center: new google.maps.LatLng(40.435833800555567, -78.44189453125),
//   mapTypeId: google.maps.MapTypeId.ROADMAP,
//   zoom: 11
// };     
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);
