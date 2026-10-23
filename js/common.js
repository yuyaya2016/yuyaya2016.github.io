$(document).ready(function() {
  'use strict';

  var headerOverlay = $(".header__overlay"),
    menuOpenIcon = $(".nav__icon-menu"),
    menuCloseIcon = $(".nav-icon__close"),
    menuList = $(".main-nav"),
    searchOpenIcon = $(".nav__icon-search"),
    searchCloseIcon = $(".search__close"),
    searchBox = $(".search");

  /* =======================
  // Menu and Search
  ======================= */
  menuOpenIcon.click(function() {
    menuOpen();
  })

  menuCloseIcon.click(function () {
    menuClose();
  })

  searchOpenIcon.click(function () {
    searchOpen();
  });

  searchCloseIcon.click(function () {
    searchClose();
  });

  headerOverlay.click(function () {
    menuClose();
    searchClose();
  });

  function menuOpen() {
    menuList.addClass("is-open");
    headerOverlay.addClass("is-visible");
  }

  function menuClose() {
    menuList.removeClass("is-open");
    headerOverlay.removeClass("is-visible");
  }

  function searchOpen() {
    searchBox.addClass("is-visible");
  }

  function searchClose() {
    searchBox.removeClass("is-visible");
  }

  /* =======================
  // Responsive Videos
  ======================= */
  $(".post__content, .page__content").fitVids({
    customSelector: ['iframe[src*="ted.com"]']
  });

  /* =======================
  // Zoom Image
  ======================= */
  $(".page img, .post img").attr("data-action", "zoom");
  $(".page a img, .post a img").removeAttr("data-action", "zoom");

  /* =======================
  // Scroll Top Button
  ======================= */
  $(".top").click(function() {
    $("html, body")
      .stop()
      .animate({ scrollTop: 0 }, "slow", "swing");
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()) {
      $(".top").addClass("is-active");
    } else {
      $(".top").removeClass("is-active");
    }
  });

  /* =======================
  // Project Carousel
  ======================= */
  $(".carousel").each(function () {
    var $carousel = $(this),
      $track = $carousel.find(".carousel__track"),
      $prev = $carousel.find(".carousel__arrow--prev"),
      $next = $carousel.find(".carousel__arrow--next");

    function scrollByCard(direction) {
      var $card = $track.find(".carousel__item").first();
      var cardWidth = $card.outerWidth(true) || 300;
      $track.stop().animate({ scrollLeft: $track.scrollLeft() + direction * cardWidth }, 350);
    }

    $prev.click(function () { scrollByCard(-1); });
    $next.click(function () { scrollByCard(1); });
  });

  /* =======================
  // Sidebar Scroll-Spy
  ======================= */
  var $navLinks = $(".sidebar__nav-link");
  var sections = $navLinks.map(function () {
    var id = $(this).attr("href");
    return document.querySelector(id);
  }).get().filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = $('.sidebar__nav-link[href="#' + entry.target.id + '"]');
        if (entry.isIntersecting) {
          $navLinks.removeClass("is-active");
          link.addClass("is-active");
        }
      });
    }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

});