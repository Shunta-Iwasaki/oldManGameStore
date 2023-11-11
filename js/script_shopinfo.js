// マウスオーバー(共通)
function mouseover(nav){
    document.getElementById(nav).innerText = document.getElementById(nav).innerText.replace("　","▶︎");
}
// マウスアウト(共通)
  function mouseout(nav){
    document.getElementById(nav).innerText = document.getElementById(nav).innerText.replace("▶︎","　");
}

// 文字点滅
let flash = document.querySelector(".flash");
function blink() {
    flash.classList.toggle("hidden");
}
setInterval(blink, 800)

// タイピング風文字出現(お店について)
const typeTarget = document.querySelectorAll('.typing');

// スクロール時に動作
window.addEventListener("scroll", () => {
    for (let i = 0; i < typeTarget.length; i++){
        // 要素の先頭までの距離を取得
        const rect = typeTarget[i].getBoundingClientRect().top;                   
        // 天井からの距離を取得
        const scroll = window.pageYOffset || document.documentElement.scrollTop;    
        const offset = rect + scroll;                                               
        // 現在のブラウザの高さを取得
        const windowHeight = window.innerHeight;
        // 条件と一致する時、フェードイン用クラスを付与
        if (scroll > offset - windowHeight + 150 ) {
            // 一度だけ動作するよう制御
            if (typeTarget[i].classList.contains('active')) {
                continue;
            }
            let typeContent = typeTarget[i].innerText;
            let typeSprit = typeContent.split('');
            let typeSpeed = typeTarget[i].dataset.speed;
            typeTarget[i].innerText = '';
            typeTarget[i].classList.add('active');

            let typeLength = 0;
            let typeInterval = setInterval(() => {
                if (typeSprit[typeLength] == undefined) {
                    clearInterval(typeInterval);
                    return false;
                }
                typeTarget[i].innerText += typeSprit[typeLength];
                typeLength++;
            }, typeSpeed);
        }
    }
});

// 検索ボックス動作
const search = document.getElementById("search");
search.addEventListener("keypress",(e) => {
    if(e.keyCode === 13 && e.target.value) {
        window.location.href = "list.html?title=" + "検索結果：" + e.target.value;
    }
})

const searchTab = document.getElementById("search-tab");
searchTab.addEventListener("keypress",(e) => {
    if(e.keyCode === 13 && e.target.value) {
        window.location.href = "list.html?title=" + "検索結果：" + e.target.value;
    }
})

// ページトップ遷移
// スクロール量を取得する関数
function getScrolled() {
    return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
}

// トップに戻るボタンの要素を取得
let topPage = document.querySelectorAll(".page-top");
            
// ボタンの表示・非表示
// スクロール時に動作
window.addEventListener("scroll", function(){
    // 条件と一致する時、フェードイン用/フェードアウト用クラスを付与
    ( getScrolled() > 100 ) ? topPage[0].classList.add("is-fadein"): topPage[0].classList.remove( 'is-fadein' );
});

// トップに移動する関数
function scrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
};
            
// イベント登録
// トップページ遷移ボタン押下時に動作
topPage[0].addEventListener("click", function() {
    scrollToTop();
});