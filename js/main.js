/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : Hayper - Onepage Creative Multipurpose Template
    Version         : 1.0
    
* ================================================================= */
(function($) {
    "use strict";

    $(document).on('ready', function() {


        /* ==================================================
            # Wow Init
         ===============================================*/
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();

        /* ==================================================
            # Smooth Scroll
         ===============================================*/
        $("body").scrollspy({
            target: ".navbar-collapse",
            offset: 200
        });
        $('a.smooth-menu').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '75';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

        /* ==================================================
            # Banner Animation
         ===============================================*/
        function doAnimations(elems) {
            //Cache the animationend event in a variable
            var animEndEv = 'webkitAnimationEnd animationend';
            elems.each(function() {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function() {
                    $this.removeClass($animationType);
                });
            });
        }

        //Variables on page load
        var $immortalCarousel = $('.animate_text'),
            $firstAnimatingElems = $immortalCarousel.find('.item:first').find("[data-animation ^= 'animated']");
        //Initialize carousel
        $immortalCarousel.carousel();
        //Animate captions in first slide on page load
        doAnimations($firstAnimatingElems);
        //Other slides to be animated on carousel slide event
        $immortalCarousel.on('slide.bs.carousel', function(e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });

        /* ==================================================
            # Youtube Video Init
         ===============================================*/
        $('.player').mb_YTPlayer();


        /* ==================================================
            # Equal Height Init
        ===============================================*/
        $(window).on('resize', function() {
            $(".equal-height").equalHeights();
        });

        $(".equal-height").equalHeights().find("img, iframe, object").on('load', function() {
            $(".equal-height").equalHeights();
        });

        /* ==================================================
            # Typed Text Init Init
        ===============================================*/
        $(".element").typed({
            strings: ["Professional Photographer", "Expert in wedding photography", "10+ years experiance"],
            typeSpeed: 10,
            loop: true,
            backDelay: 2000
        });


        /* ==================================================
            # Ripple Effect
        ===============================================*/
        jQuery('#ripple').ripples({
            resolution: 300,
            dropRadius: 20,
            perturbance: 0.04
        });


        /* ==================================================
            # imagesLoaded active
        ===============================================*/
        $('#portfolio-grid,.blog-masonry').imagesLoaded(function() {

            /* Filter menu */
            $('.mix-item-menu').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });

            /* filter menu active class  */
            $('.mix-item-menu button').on('click', function(event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });

            /* Filter active */
            var $grid = $('#portfolio-grid').isotope({
                itemSelector: '.pf-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.pf-item',
                }
            });

            /* Filter active */
            $('.blog-masonry').isotope({
                itemSelector: '.blog-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.blog-item',
                }
            });

        });


        /* ==================================================
            # Magnific popup init
         ===============================================*/
        $(".popup-link").magnificPopup({
            type: 'image',
            // other options
        });

        $(".popup-gallery").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        $('.magnific-mix-gallery').each(function() {
            var $container = $(this);
            var $imageLinks = $container.find('.item');

            var items = [];
            $imageLinks.each(function() {
                var $item = $(this);
                var type = 'image';
                if ($item.hasClass('magnific-iframe')) {
                    type = 'iframe';
                }
                var magItem = {
                    src: $item.attr('href'),
                    type: type
                };
                magItem.title = $item.data('title');
                items.push(magItem);
            });

            $imageLinks.magnificPopup({
                mainClass: 'mfp-fade',
                items: items,
                gallery: {
                    enabled: true,
                    tPrev: $(this).data('prev-text'),
                    tNext: $(this).data('next-text')
                },
                type: 'image',
                callbacks: {
                    beforeOpen: function() {
                        var index = $imageLinks.index(this.st.el);
                        if (-1 !== index) {
                            this.goTo(index);
                        }
                    }
                }
            });
        });

        /* ==================================================
            # Services
         ===============================================*/
        $('.services-items').owlCarousel({
            loop: false,
            margin: 30,
            nav: true,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        /* ==================================================
            # Team Carousel
         ===============================================*/
        $('.team-carousel').owlCarousel({
            loop: false,
            margin: 30,
            nav: false,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });


        /* ==================================================
            # Testomonails Carousel
         ===============================================*/
         $('.policy-maker').owlCarousel({
            loop: false,
            margin: 30,
            nav: false,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        $('.principle-testimonial').owlCarousel({
            loop: false,
            margin: 30,
            nav: false,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        });

        $('.video-evidence').owlCarousel({
            loop: false,
            margin: 30,
            nav: false,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        });

        $('.hero-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: true,
            autoplay: true,
            animateIn: 'fadeIn',
            slideSpeed: 200,
    paginationSpeed: 200,
    animateOut: 'fadeOut',
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });


        $('.testimonials-items').owlCarousel({
            loop: false,
            nav: false,
            dots: true,
            autoplay: true,
            items: 1,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
        });

        $('.b-books').owlCarousel({
            loop: false,
            margin: 30,
            nav: false,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });

        $('.cms-testimonial').owlCarousel({
            loop: false,
            margin: 30,
            nav: false,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        });


        /* ==================================================
            # Fun Factor Init
        ===============================================*/
        $('.timer').countTo();
        $('.fun-fact').appear(function() {
            $('.timer').countTo();
        }, {
            accY: -100
        });


        /* ==================================================
            Preloader Init
         ===============================================*/
        $(window).on('load', function() {
            // Animate loader off screen
            $(".se-pre-con").fadeOut("slow");;
        });


        /* ==================================================
            Contact Form Validations
        ================================================== */
        $('.contact-form').each(function() {
            var formInstance = $(this);
            formInstance.submit(function() {

                var action = $(this).attr('action');

                $("#message").slideUp(750, function() {
                    $('#message').hide();

                    $('#submit')
                        .after('<img src="assets/img/ajax-loader.gif" class="loader" />')
                        .attr('disabled', 'disabled');

                    $.post(action, {
                            name: $('#name').val(),
                            email: $('#email').val(),
                            phone: $('#phone').val(),
                            comments: $('#comments').val()
                        },
                        function(data) {
                            document.getElementById('message').innerHTML = data;
                            $('#message').slideDown('slow');
                            $('.contact-form img.loader').fadeOut('slow', function() {
                                $(this).remove()
                            });
                            $('#submit').removeAttr('disabled');
                        }
                    );
                });
                return false;
            });
        });

    }); // end document ready function
})(jQuery); // End jQuery


document.addEventListener("DOMContentLoaded", function () {
    // Function to activate a tab based on ID
    function activateTab(tabId) {
      // Deactivate all tabs and contents
      document.querySelectorAll(".tab").forEach(function (tab) {
        tab.classList.remove("active");
      });
      document.querySelectorAll(".tab-content").forEach(function (content) {
        content.classList.remove("active");
      });

      // Activate the clicked tab and its content
      document.querySelector(`[data-tab="${tabId}"]`).classList.add("active");
      document.getElementById(tabId).classList.add("active");
    }

    // Check if there's a hash in the URL and activate the corresponding tab
    const currentHash = window.location.hash.substring(1); // Remove the '#' from the hash
    if (currentHash) {
      activateTab(currentHash);
    } else {
      // If no hash, activate the first tab by default
      activateTab("india-impact");
    }

    // Add click event listener to each tab
    document.querySelectorAll(".tab").forEach(function (tab) {
      tab.addEventListener("click", function (e) {
        // Prevent default behavior that causes scrolling
        e.preventDefault();

        const tabId = this.getAttribute("data-tab");
        // Update the URL hash without scrolling the page
        history.pushState(null, null, `#${tabId}`);
        // Activate the clicked tab
        activateTab(tabId);
      });
    });

    // Listen for hash changes (if user navigates using the browser's back/forward buttons)
    window.addEventListener("hashchange", function () {
      const newHash = window.location.hash.substring(1);
      activateTab(newHash);
    });
  });

/*Size is  set in pixels... supports being written as: '250px' */
// var magnifierSize = 250;

/*How many times magnification of image on page.*/
// var magnification = 4;

// function magnifier() {

//   this.magnifyImg = function(ptr, magnification, magnifierSize) {
//     var $pointer;
//     if (typeof ptr == "string") {
//       $pointer = $(ptr);
//     } else if (typeof ptr == "object") {
//       $pointer = ptr;
//     }
    
//     if(!($pointer.is('img'))){
//       alert('Object must be image.');
//       return false;
//     }

//     magnification = +(magnification);

//     $pointer.hover(function() {
//       $(this).css('cursor', 'none');
//       $('.magnify').show();
//       //Setting some variables for later use
//       var width = $(this).width();
//       var height = $(this).height();
//       var src = $(this).attr('src');
//       var imagePos = $(this).offset();
//       var image = $(this);

//       if (magnifierSize == undefined) {
//         magnifierSize = '150px';
//       }

//       $('.magnify').css({
//         'background-size': width * magnification + 'px ' + height * magnification + "px",
//         'background-image': 'url("' + src + '")',
//         'width': magnifierSize,
//         'height': magnifierSize
//       });

//       //Setting a few more...
//       var magnifyOffset = +($('.magnify').width() / 2);
//       var rightSide = +(imagePos.left + $(this).width());
//       var bottomSide = +(imagePos.top + $(this).height());

//       $(document).mousemove(function(e) {
//         if (e.pageX < +(imagePos.left - magnifyOffset / 6) || e.pageX > +(rightSide + magnifyOffset / 6) || e.pageY < +(imagePos.top - magnifyOffset / 6) || e.pageY > +(bottomSide + magnifyOffset / 6)) {
//           $('.magnify').hide();
//           $(document).unbind('mousemove');
//         }
//         var backgroundPos = "" - ((e.pageX - imagePos.left) * magnification - magnifyOffset) + "px " + -((e.pageY - imagePos.top) * magnification - magnifyOffset) + "px";
//         $('.magnify').css({
//           'left': e.pageX - magnifyOffset,
//           'top': e.pageY - magnifyOffset,
//           'background-position': backgroundPos
//         });
//       });
//     }, function() {

//     });
//   };

//   this.init = function() {
//     $('body').prepend('<div class="magnify"></div>');
//   }

//   return this.init();
// }

// var magnify = new magnifier();
// magnify.magnifyImg('#worldalfa', magnification, magnifierSize);

