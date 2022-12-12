// ハンバーガーメニュー
$(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });

// BBBが選ばれる理由スライド
let slideConts = document.querySelectorAll('.slideConts'); // スライドで表示させる要素の取得
let slideContsRect = []; // 要素の位置を入れるための配列
let slideContsTop = []; // 要素の位置を入れるための配列
let windowY = window.pageYOffset; // ウィンドウのスクロール位置を取得
let windowH = window.innerHeight; // ウィンドウの高さを取得
let remainder = 100; // ちょっとはみ出させる部分
// 要素の位置を取得
for (let i = 0; i < slideConts.length; i++) {
  slideContsRect.push(slideConts[i].getBoundingClientRect());
}
for (let i = 0; i < slideContsRect.length; i++) {
  slideContsTop.push(slideContsRect[i].top + windowY);
}
// ウィンドウがリサイズされたら、ウィンドウの高さを再取得
window.addEventListener('resize', function () {
  windowH = window.innerHeight;
});
// スクロールされたら
window.addEventListener('scroll', function () {
// スクロール位置を取得
windowY = window.pageYOffset;
  
  for (var i = 0; i < slideConts.length; i++) {
  // 要素が画面の下端にかかったら
    if(windowY > slideContsTop[i] - windowH + remainder) {
    // .showを付与
      slideConts[i].classList.add('show');
    } else {
    // 逆に.showを削除
    slideConts[i].classList.remove('show');
    }
  }
});

// 受講生の声ポップアップ表示
window.addEventListener("load", function() {
    const target = document.querySelectorAll('.scr-target')
    const targetArray = Array.prototype.slice.call(target);
    const options = {
        root: null,
        rootMargin: '0px 0px',
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(callback, options)
    targetArray.forEach(function (tgt) {
      observer.observe(tgt)
    });
    
    function callback(entries) {
      entries.forEach(function(entry, i) {
        const target = entry.target;
        if (entry.isIntersecting && !target.classList.contains('is-active')) {
            target.classList.add('is-active');
        }
      });
    };
});