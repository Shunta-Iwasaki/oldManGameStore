// 【スクロールフェードイン(記事詳細)】
// アニメーションを実行したいエレメントを取得
const fadeInTargetArticle = document.querySelectorAll(".article-white");
// スクロール時に動作
window.addEventListener("scroll", () => {
    for (let i = 0; i < fadeInTargetArticle.length; i++){
        // 要素の先頭までの距離を取得
        const rect = fadeInTargetArticle[i].getBoundingClientRect().top;                   
        // 天井からの距離を取得
        const scroll = window.pageYOffset || document.documentElement.scrollTop;    
        const offset = rect + scroll;                                               
        // 現在のブラウザの高さを取得
        const windowHeight = window.innerHeight;                                    
        // 条件と一致する時、フェードイン用クラスを付与
        if (scroll > offset - windowHeight + 150) {      
            let dissolveId = 'article-dissolve' + i;                           
            const dissolve = document.getElementById(dissolveId);
            fadeInTargetArticle[i].classList.add("hidden");
            let attribute = dissolve.getAttribute('src');
            if (attribute != 'img_true/dissolve.gif' ){
                dissolve.setAttribute('src', 'img_true/dissolve.gif');
                dissolve.classList.add("fade");
            }
        }
    }
});

// カテゴリーフレーム切り替え(記事詳細)
if (window.matchMedia('(max-width: 640px)').matches) {
        // ウィンドウサイズ640px以下のときの処理
        let category = document.getElementById('category');
        category.setAttribute('src', 'img_true/frame_sp_category.svg');
    } else {
        // それ以外の処理
}

// いいねボタン押下
function pushGood() {
    const goodNum = document.getElementById("goodNum");
    goodNum.textContent = Number(goodNum.textContent) + 1;
    const good = document.getElementById("good");
    good.src = "img_true/icon_good_red.svg";
}