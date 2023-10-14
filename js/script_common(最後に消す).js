// アコーディオンメニュー(共通)
// js-ac要素すべて取得
const button = document.querySelectorAll(".main-content__aside__date__topic__button"); 
function toggleDate() {
    const month = this.nextElementSibling;
    month.classList.toggle("open-date");
    this.classList.toggle("minus");
}
// for文でjs-acメニューをループ処理
for (let i = 0; i < button.length; i++) { 
    button[i].addEventListener("click", toggleDate);
}

// マウスオーバー(共通)
function mouseover(nav){
    document.getElementById(nav).innerText = document.getElementById(nav).innerText.replace("　","▶︎");
}
// マウスアウト(共通)
  function mouseout(nav){
    document.getElementById(nav).innerText = document.getElementById(nav).innerText.replace("▶︎","　");
}

// 【スクロールフェードイン】
// アニメーションを実行したいエレメントを取得
const fadeInTarget = document.querySelectorAll(".white");
// スクロール時に動作
window.addEventListener("scroll", () => {
    for (let i = 0; i < fadeInTarget.length; i++){
        // 要素の先頭までの距離を取得
        const rect = fadeInTarget[i].getBoundingClientRect().top;                   
        // 天井からの距離を取得
        const scroll = window.pageYOffset || document.documentElement.scrollTop;    
        const offset = rect + scroll;                                               
        // 現在のブラウザの高さを取得
        const windowHeight = window.innerHeight;                                    
        // 条件と一致する時、フェードイン用クラスを付与
        if (scroll > offset - windowHeight + 150) {      
            let dissolveId = 'dissolve' + i;                           
            const dissolve = document.getElementById(dissolveId);
            fadeInTarget[i].classList.add("hidden");
            let attribute = dissolve.getAttribute('src');
            if (attribute != 'img_true/dissolve.gif' ){
                dissolve.setAttribute('src', 'img_true/dissolve.gif');
                dissolve.classList.add("fade");
            }
        }
    }
});

// 【スクロールフェードイン(画像一覧)】
// アニメーションを実行したいエレメントを取得
const fadeInTargetImage = document.querySelectorAll(".image-white");
// スクロール時に動作
window.addEventListener("scroll", () => {
    for (let i = 0; i < fadeInTargetImage.length; i++){
        // 要素の先頭までの距離を取得
        const rect = fadeInTargetImage[i].getBoundingClientRect().top;                   
        // 天井からの距離を取得
        const scroll = window.pageYOffset || document.documentElement.scrollTop;    
        const offset = rect + scroll;                                               
        // 現在のブラウザの高さを取得
        const windowHeight = window.innerHeight;                                    
        // 条件と一致する時、フェードイン用クラスを付与
        if (scroll > offset - windowHeight + 150) {      
            let dissolveId = 'image-dissolve' + i;                           
            const dissolve = document.getElementById(dissolveId);
            fadeInTargetImage[i].classList.add("hidden");
            let attribute = dissolve.getAttribute('src');
            if (attribute != 'img_true/dissolve.gif' ){
                dissolve.setAttribute('src', 'img_true/dissolve.gif');
                dissolve.classList.add("fade");
            }
        }
    }
});

// 文字点滅
let flash = document.querySelector(".flash");
function blink() {
    flash.classList.toggle("hidden");
}
setInterval(blink, 800)

// カテゴリーフレーム切り替え(記事詳細)
// if (window.matchMedia('(max-width: 640px)').matches) {
//         // ウィンドウサイズ640px以下のときの処理
//         let category = document.getElementById('category');
//         category.setAttribute('src', 'img_true/frame_sp_category.svg');
//     } else {
//         // それ以外の処理
// }


// タイピング風文字出現(お店について)
const typeTarget = document.querySelectorAll('.typing');

let options = {
    rootMargin: '0px',
    threshold: .5
}

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

// URLを取得
const url = new URL(window.location.href);
// URLSearchParamsオブジェクトを取得
const params = url.searchParams;

// パラメータから「title」を取得
const titleValue = params.get("title");
// IDを使って要素を取得する
const title = document.getElementById("title");
// 取得した要素に受け取ったパラメータを代入
title.innerText = titleValue;