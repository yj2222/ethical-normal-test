$(function(){

  let headerHtml = `
  <!-- Header[S] -->
  <header class="header">
      <h1 class="header-logo"><a href="/"><img src="./img/header_logo-blue.svg" alt="エシカルノーマル"></a></h1>

      <nav class="g-nav">
          <ul>
              <li><a href="/">ホーム</a></li>
              <li><a href="/">サービス</a></li>
              <li><a href="/">実績・事例一覧</a></li>
              <li><a href="/">お客様の声</a></li>
              <li><a href="/">メンバー紹介</a></li>
              <li><a href="/">よくある質問</a></li>
              <li><a href="/">お問い合わせ</a></li>
          </ul>
      </nav>

      <div class="sp-btn sp-only">
          <img src="./img/header_sp-btn.svg" alt="MENU">
      </div>
  </header>
  <!-- Header[E] -->

  <!-- SP Menu[S] -->
  <div class="sp-menu sp-only">
      <div class="sp-menu-top">
          <a href="/" class="sp-menu-logo">
              <img src="./img/sp-menu_logo.svg" alt="エシカルノーマル">
          </a>
          <img class="sp-menu-close" src="./img/sp-munu_close.svg" alt="CLOSE"> 
      </div>
      <nav class="sp-nav">
          <ul>
              <li><a href="/">ホーム</a> </li>
              <li><a href="/">サービス</a> </li>
              <li><a href="/">実績・事例一覧</a> </li>
              <li><a href="/">お客様の声</a> </li>
              <li><a href="/">メンバー紹介</a> </li>
              <li><a href="/">製品紹介</a> </li>
              <li><a href="/">よくある質問</a> </li>
              <li><a href="/">ブランドプロミス</a> </li>
              <li class="is-borde-bottom"><a href="/">ブログ</a></li>
              <li class="is-borde-bottom"><a href="/">会社概要</a></li>
              <li class="is-full-size"><a href="/">パートナー提携を<br>お考えの企業さまへ</a></li>
              <li class="is-full-size"><a href="/">お問い合わせ<br>ご相談はこちら</a></li>
          </ul>
      </nav>
      <div class="sp-menu-sns">
          <p>Follow us ! ETHICAL NORMAL</p>
          <div class="sp-menu-sns-wrap">
              <a href="#" target="_blank"><img src="./img/sp-menu_facebook.svg" alt="facebook"></a>
              <a href="#" target="_blank"><img src="./img/sp-menu_instagram.svg" alt="instagram"></a>
              <a href="https://lin.ee/t4XulbZ" target="_blank"><img src="./img/sp-menu_line.svg" alt="LINE"></a>
          </div>
      </div>
  </div>
  <!-- SP Menu[E] -->

  <!-- FloatBtn[S] -->
  <a class="float-btn-line" href="https://lin.ee/t4XulbZ" target="_blank">
      <img class="pc-only" src="./img/float-btn_line.svg" alt="LINE">
  </a>
  <div class="float-btn-wrap">
      <a href="/contact"><img src="./img/float-btn-mail.svg" alt="Contact"></a>
      <a href="tel:080-0600-8456"><img src="./img/float-btn-tel.svg" alt="電話"></a>
      <a href="https://lin.ee/t4XulbZ" target="_blank"><img src="./img/sp-menu_line.svg" alt="LINE"></a>
  </div>
  <!-- FloatBtn[E] -->

  <!-- Outline[S] -->
  <div class="outline"></div>
  <!-- Outline[E] -->
  `;
  $('#header').after(headerHtml);


  let footerHtml = `
  <!-- Footer[S] -->
  <footer class="footer sec-wave-parent">
      <canvas class="sec-wave" id="waveBlue2"></canvas>
      <div class="footer-top">
          <div class="inner">
              <img src="./img/footer-logo.svg" alt="エシカルノーマル">
              <nav class="footer-nav">
                  <ul>
                      <li><a href="/">- ホーム</a> </li>
                      <li><a href="/">- サービス</a> </li>
                      <li><a href="/">- 実績・事例一覧</a> </li>
                      <li><a href="/">- お客様の声</a> </li>
                      <li><a href="/">- よくある質問</a> </li>
                      <li><a href="/">- メンバー紹介</a> </li>
                      <li><a href="/">- 製品紹介</a> </li>
                      <li><a href="/">- ブランドプロミス</a> </li>
                      <li class="is-border-bottom"><a href="/">- ブログ</a></li>
                      <li class="is-border-bottom"><a href="/">- 会社概要</a></li>
                      <li class="more-btn"><a href="/">パートナー提携を<br class="sp-only">お考えの企業さまへ</a></li>
                      <li class="more-btn is-margin-top"><a href="/">お問い合わせ<br class="sp-only">ご相談はこちら</a></li>
                  </ul>
              </nav>
          </div>
      </div>

      <div class="footer-bottom">
          <div class="inner">
              <div class="footer-sns">
                  <p>Follow us ! ETHICAL NORMAL</p>
                  <div class="footer-sns__icon">
                      <a href="#" target="_blank"><img src="./img/sp-menu_facebook.svg" alt="facebook"></a>
                      <a href="#" target="_blank"><img src="./img/sp-menu_instagram.svg" alt="instagram"></a>
                      <a href="https://lin.ee/t4XulbZ" target="_blank"><img src="./img/sp-menu_line.svg" alt="LINE"></a>
                  </div>
              </div>

              <div class="footer-copy">
                  <p>© 株式会社エシカルノーマル</p>
              </div>
          </div>
      </div>

  </footer>
  <!-- Footer[E] -->
  `;
  $('#footer').after(footerHtml);


  
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