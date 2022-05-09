(function($) {
  'use strict';  
    /*---------------------------------
        Preloader JS
    -----------------------------------*/ 
    var prealoaderOption = $(window);
    prealoaderOption.on("load", function () {
        var preloader = jQuery('.lds-ripple');
        var preloaderArea = jQuery('.preloader');
        preloader.fadeOut();
        preloaderArea.delay(350).fadeOut('slow');
    });
    /*---------------------------------
        Preloader JS
    -----------------------------------*/

    /*---------------------------------  
        sticky header JS
    -----------------------------------*/
    $(window).on('scroll',function() {
        var scroll = $(window).scrollTop();
         if (scroll < 200) {
          $(".header_area").removeClass("sticky");
         } else if(!$(".header_area").hasClass("sticky")) {
             $(".header_area").css({"display": "none"})
             $(".header_area").slideDown(500).addClass("sticky")
         }
    }); 
    /*---------------------------------  
        sticky header JS
    -----------------------------------*/
    /*---------------------- 
        Slick slider js
    ------------------------*/
    $('.hero_slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.project_button button').on('click', function() {
        $('.project_button button').removeClass('active_btn');
        var filterValues = $(this).data('filter');
        $('.projects_slider_content').slick('slickUnfilter');
        $('.projects_slider_content').slick('slickFilter', filterValues);
        $(this).addClass('active_btn');
    });
    $('.projects_slider_content').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    $('.testimonial_slide').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1
    });
    /*---------------------- 
        Slick slider js
    ------------------------*/
    /*---------------------- 
        mobile menu js
    ------------------------*/
    $(".menu_icon,.close_btn").on('click', function (e) {
      e.preventDefault();
      $(".menu_icon").toggleClass("active");
    });
    $(".menu_icon,.close_btn").on('click', function (e) {
      e.preventDefault();
      $(".sidenav_menu").toggleClass("active");
    });
    $.sidebarMenu($('.sidebar-menu')) 
    /*---------------------- 
        Isotope js
    ------------------------*/ 
    $('#project').imagesLoaded( function() {
        var $grid = $('.grid_wrapper').isotope({
            itemSelector: '.single_project',
            layoutMode: 'fitRows'
        })
        $('.project_button_2').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
        });
        $('.project_button_2').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.active_btn').removeClass('active_btn');
                $(this).addClass('active_btn');
            });
        });
    });
    /*---------------------- 
        Isotope js
    ------------------------*/
    /*---------------------- 
        Isotope js
    ------------------------*/
    // wow js
    new WOW().init();


if($("#search-input").length >0){
    
    var sjs = SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: '/search.json'
    });
  }

    $(".jm-site-navigation").click(function(e) {
        var targetID = $(this).data("target")
        var scrollDistance = 0
        if(targetID === "#home") {
            scrollDistance = 0
        } else {
            scrollDistance = $(targetID).offset().top - 80
        }

        $('html, body').animate({
            scrollTop: scrollDistance
        }, 1000);
    });
    $("#menu .menu-item").click(function () {
        $("#menu .menu-item.active_link").removeClass('active_link');
        $(this).addClass("active_link");
    });

    $("#jm-email").click(function () {
        console.log($(this)[0].innerText);
        var temp = $("<input>");
        $("body").append(temp);
        temp.val($(this)[0].innerText).select();
        document.execCommand("copy");
        $("#copy-notifier").css({
            "display": "inline-block",
            "color": "#6f6d6d",
            "font-size": "18px"
        });
        $("#copy-notifier").fadeOut(1500, function () {
        });
        temp.remove();
    });
})(window.jQuery);   