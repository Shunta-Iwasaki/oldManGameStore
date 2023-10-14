// カテゴリーフレーム切り替え(ログイン)
if (window.matchMedia('(max-width: 640px)').matches) {
        // ウィンドウサイズ640px以下のときの処理
        const text = document.querySelectorAll('.user-content__action__text');
        for (let i = 0; i < text.length; i++) { 
            text[i].setAttribute('src', 'img_true/frame_sp_text.svg');
        }
        const passText= document.querySelectorAll('.user-content__action__pass-text');
        for (let i = 0; i < passText.length; i++) { 
            passText[i].setAttribute('src', 'img_true/frame_sp_pass-text.svg');
        }
        const button = document.querySelectorAll('.user-content__action__button');
        for (let i = 0; i < button.length; i++) { 
            button[i].setAttribute('src', 'img_true/frame_sp_button.svg');
        }
    } else {
        // それ以外の処理
}

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