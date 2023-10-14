// // チェックボックス
// // 要素すべて取得
const checkbox = document.querySelectorAll(".user-content__action__checkbox"); 
function checkToggle() {
    const check = this.nextElementSibling;
    if (check.style.opacity == 0) {
        check.style.opacity = 1;
    } else {
        check.style.opacity = 0;
    }
}
// for文でjs-acメニューをループ処理
for (let i = 0; i < checkbox.length; i++) { 
    checkbox[i].addEventListener("click", checkToggle);
}

// カテゴリーフレーム切り替え(ログイン)
if (window.matchMedia('(max-width: 640px)').matches) {
        // ウィンドウサイズ640px以下のときの処理
        const text = document.querySelectorAll('.user-content__action__text');
        for (let i = 0; i < text.length; i++) { 
            text[i].setAttribute('src', 'img_true/frame_sp_text.svg');
        }
        const check = document.querySelectorAll('.user-content__action__checkbox');
        for (let i = 0; i < check.length; i++) { 
            check[i].setAttribute('src', 'img_true/frame_sp_checkbox.svg');
        }
        const button = document.querySelectorAll('.user-content__action__button');
        for (let i = 0; i < button.length; i++) { 
            button[i].setAttribute('src', 'img_true/frame_sp_button.svg');
        }
    } else {
        // それ以外の処理
}