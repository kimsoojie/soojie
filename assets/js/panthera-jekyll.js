jQuery(document).ready(function () {

  (function () {
    jQuery('.pan-layout').on('click', '.pan-layout-header__menutoggle', function (e) {
      var $layout = jQuery(e.delegateTarget);
      $layout.toggleClass('pan-menu-open');
    });

    jQuery('.pan-layout').on('click', '.pan-layout-overlay', function (e) {
      var $layout = jQuery(e.delegateTarget);
      $layout.removeClass('pan-menu-open');
    });

    jQuery('.pan-layout').on('click', '.pan-layout-left__close', function (e) {
      var $layout = jQuery(e.delegateTarget);
      $layout.removeClass('pan-menu-open');
    });
  })();

  (function () {
    var $path = document.location.pathname;
    jQuery('[data-menu-link]').removeClass('active');
    jQuery('[data-menu-link="' + $path + '"]').addClass('active');
  })();

  (function () {
    var emoticons = ['🧚🏻‍♀️', '💘', '💕', '🤔', '🐾', '💝', '😽', '❄️', '⭐', '🥳', '🧐', '❤️', '🧡', '🍿', '🐩', '🍰', '👽', '🧑‍🎄', '💍', '🍓', '☔', '🎂', '🐹', '🥺', '🍔', '✨', '💫', '😻', '👯‍♀️', '💃', '🧞‍♀️', '🐰', '🍒', '💖', '🥰', '🎀', '🎉','💌','👀'];

    jQuery(document).on('click', function (e) {
      var $emoticon = jQuery('<span class="pan-click-emoticon" aria-hidden="true"></span>');
      var index = Math.floor(Math.random() * emoticons.length);

      $emoticon
        .text(emoticons[index])
        .css({
          left: e.clientX + 'px',
          top: e.clientY + 'px'
        })
        .appendTo(document.body);

      $emoticon.on('animationend webkitAnimationEnd', function () {
        $emoticon.remove();
      });
    });
  })();

  (function () {
    var sparkles = ['💜', '💖', '✨', '🎀', '💕'];
    var activeSparkles = 0;
    var maxSparkles = 18;

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    window.setInterval(function () {
      if (document.hidden || activeSparkles >= maxSparkles) {
        return;
      }

      var $sparkle = jQuery('<span class="pan-falling-sparkle" aria-hidden="true"></span>');
      var index = Math.floor(Math.random() * sparkles.length);
      var duration = 4200 + Math.random() * 3600;
      var drift = -40 + Math.random() * 80;
      var size = 0.7 + Math.random() * 0.9;

      activeSparkles += 1;

      $sparkle
        .text(sparkles[index])
        .css({
          left: (Math.random() * 100) + 'vw',
          '--pan-sparkle-drift': drift + 'px',
          '--pan-sparkle-size': size + 'rem',
          animationDuration: duration + 'ms'
        })
        .appendTo(document.body);

      $sparkle.on('animationend webkitAnimationEnd', function () {
        activeSparkles -= 1;
        $sparkle.remove();
      });
    }, 520);
  })();
  
});


jQuery(document).on('pageinit', function () {

  (function () {
    jQuery('.pan-layout').on('swipeleft', function (e) {
      var $layout = jQuery(e.currentTarget);
      $layout.removeClass('pan-menu-open');
    });
  })();

});
