$('.studies-list').owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    dots: true,
    autoplay: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});

$(document).ready(function () {
    $('.trigger').click(function () {
      const modalId = $(this).data('modal');
      $('.overlay').fadeIn();
      $('#' + modalId).fadeIn();
    });

    $('.close-btn, .overlay').click(function () {
      $('.modal').fadeOut();
      $('.overlay').fadeOut();
    });
  });