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

// 0.5秒置いて動作
setTimeout(() => {
    for (let i = 0; i < typeTarget.length; i++){
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
}, 500);
// 文字点滅(共通)
let flash = document.querySelectorAll(".flash");
for (let i = 0; i < flash.length; i++) { 
    setInterval(function blink() {
        flash[i].classList.toggle("hidden");
    }, 800);
}