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
    var $gallery = jQuery('.photo-gallery');
    if (!$gallery.length) { return; }

    var $image = $gallery.find('.photo-gallery__main-image');
    var $thumbnails = $gallery.find('.photo-gallery__thumbnail');
    var $count = $gallery.find('.photo-gallery__count');
    var activeIndex = 0;

    function photoName($thumbnail) {
      return String($thumbnail.data('photo-src')).split('/').pop().replace(/\.[^.]+$/, '');
    }

    var sortedThumbnails = $thumbnails.get().sort(function (first, second) {
      var firstName = photoName(jQuery(first));
      var secondName = photoName(jQuery(second));
      var firstNumber = /^\d+$/.test(firstName) ? Number(firstName) : Number.POSITIVE_INFINITY;
      var secondNumber = /^\d+$/.test(secondName) ? Number(secondName) : Number.POSITIVE_INFINITY;

      if (firstNumber !== secondNumber) { return firstNumber - secondNumber; }
      return firstName.localeCompare(secondName, undefined, { numeric: true, sensitivity: 'base' });
    });

    jQuery.each(sortedThumbnails, function (_, thumbnail) {
      $gallery.find('.photo-gallery__thumbnails').append(thumbnail);
    });
    $thumbnails = $gallery.find('.photo-gallery__thumbnail');

    function showPhoto(index) {
      activeIndex = (index + $thumbnails.length) % $thumbnails.length;
      var $thumbnail = $thumbnails.eq(activeIndex);

      $image.addClass('is-changing');
      window.setTimeout(function () {
        $image.attr({ src: $thumbnail.data('photo-src'), alt: $thumbnail.data('photo-alt') });
        $image.removeClass('is-changing');
      }, 120);

      $thumbnails.removeClass('is-active').attr('aria-selected', 'false');
      $thumbnail.addClass('is-active').attr('aria-selected', 'true');
      $count.text((activeIndex + 1) + ' / ' + $thumbnails.length);
    }

    $gallery.on('click', '.photo-gallery__thumbnail', function () {
      showPhoto($thumbnails.index(this));
    });
    $gallery.on('click', '.photo-gallery__control--previous, .photo-gallery__stage-control--previous', function () {
      showPhoto(activeIndex - 1);
    });
    $gallery.on('click', '.photo-gallery__control--next, .photo-gallery__stage-control--next', function () {
      showPhoto(activeIndex + 1);
    });
  })();

  (function () {
    var emoticons = ['🧚🏻‍♀️', '💘', '💕', '🤔', '🐾', '💝', '😽', '❄️', '⭐', '🥳', '🧐', '❤️', '🧡', '🍿', '🐩', '🍰', '👽', '🧑‍🎄', '💍', '🍓', '🍑', '☔', '🎂', '🐹', '🥺', '🍔', '✨', '💫', '😻', '👯‍♀️', '💃', '🧞‍♀️', '🐰', '🍒', '💖', '🥰', '🎀', '🎉','💌','👀'];

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
    var sparkles = ['💝', '🎉', '🍬', '🫧', '💖', '✨', '🎀', '💕', '🍰', '🧚‍♀️', '🍒', '⭐',];
    var activeSparkles = 0;
    var maxSparkles = 40;

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
      var size = 1 + Math.random() * 1.1;

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
