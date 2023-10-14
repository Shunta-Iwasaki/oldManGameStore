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
            fadeInTargetImage[i].classList.add("delete");
            let attribute = dissolve.getAttribute('src');
            if (attribute != 'img_true/dissolve.gif' ){
                dissolve.setAttribute('src', 'img_true/dissolve.gif');
                dissolve.classList.add("fade");
                window.setTimeout(() => {
                    dissolve.classList.add("delete");
                }, 1000);
            }
        }
    }
});