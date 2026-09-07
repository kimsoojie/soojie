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
    var emoticons = ['🧚🏻‍♀️', '✨', '💫', '🐰', '🍒', '💖', '🥰', '🎀', '🎉'];

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
  
});


jQuery(document).on('pageinit', function () {

  (function () {
    jQuery('.pan-layout').on('swipeleft', function (e) {
      var $layout = jQuery(e.currentTarget);
      $layout.removeClass('pan-menu-open');
    });
  })();

});
