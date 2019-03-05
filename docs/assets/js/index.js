$(function() {
        var h = $(window).height(); //ブラウザウィンドウの高さを取得
            $('#main-contents').css('display','none'); //初期状態ではメインコンテンツを非表示
            $('#loader-bg ,#loader').height(h).css('display','block'); //ウィンドウの高さに合わせでローディング画面を表示
            $('#loader-bg').delay(4000).fadeOut(800); //または、$('#loader-bg').fadeOut(800);でも可
            $('#loader').delay(3000).fadeOut(300,function(){}); //または、$('#loader').fadeOut(300);でも可
            $('#main-contents').css('display', 'table-cell'); // ページ読み込みが終わったらメインコンテンツを表示する
        });


//$('#loading').velocity('fadeOut', {complete:function(){$('body').css('position', 'relative')}});


//var animationTivel = lottie.loadAnimation({
//container: document.getElementById('tivel'),
//renderer: 'svg',
//loop: true,
//autoplay: true,
//path: 'assets/json/data.json'
//});
