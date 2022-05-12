$(function(){

  
  let spBtn = $('.sp-btn');
  let spMenu = $('.sp-menu');
  let spMenuClose = $('.sp-menu-close');
  let spNavLink = $('.sp-nav ul li a');
  // console.log(spNavLink);

  spBtn.click(function (e) { 
    spMenu.fadeIn();
    $('body').addClass('no-scroll');
  });

  spMenuClose.click(function (e) { 
    spMenu.fadeOut();
    $('body').removeClass('no-scroll');
  });

  spNavLink.click(function (e) { 
    spMenu.fadeOut();
    $('body').removeClass('no-scroll');
  });

  // スクロールでヘッダースタイル変更
  let header = $('.header');
  let scrolled = 'scrolled';
  $(window).scroll(function () {
      // トップからのスクロール量を取得  
      let scroll = $(this).scrollTop();
      // console.log(scroll);
      if ( !(header.hasClass(scrolled)) &&  scroll >= 50) {
          header.addClass(scrolled);
          // console.log("add");
      }
      if ( header.hasClass(scrolled) &&  scroll <= 50) {
          header.removeClass(scrolled);
          // console.log("remove");
      }
  });

  // スマホ100vh再計算
  function setHeight() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setHeight();
  window.addEventListener('resize', setHeight);

});