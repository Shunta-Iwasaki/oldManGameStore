// // チェックボックス
// // 要素すべて取得
const checkbox = document.querySelectorAll(".user-content__action__topic__detail__checkbox"); 
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
if (window.matchMedia('(max-width: 1300px)').matches) {
    // ウィンドウサイズ1280px以下のときの処理
    const frame = document.querySelectorAll('.user-content__action__list-frame__frame');
    for (let i = 0; i < frame.length; i++) { 
        frame[i].setAttribute('src', 'img_true/frame_tab_list_4.svg');
    }
} else {
    // それ以外の処理
}
// カテゴリーフレーム切り替え(ログイン)
if (window.matchMedia('(max-width: 640px)').matches) {
    // ウィンドウサイズ640px以下のときの処理
    const check = document.querySelectorAll('.user-content__action__topic__detail__checkbox');
    for (let i = 0; i < check.length; i++) { 
        check[i].setAttribute('src', 'img_true/frame_sp_checkbox.svg');
    }
    const frame = document.querySelectorAll('.user-content__action__list-frame__frame');
    for (let i = 0; i < frame.length; i++) { 
        frame[i].setAttribute('src', 'img_true/frame_sp_list_4.svg');
    }
    const writeButton = document.querySelectorAll('.user-content__action__list-button__write__frame');
    for (let i = 0; i < writeButton.length; i++) { 
        writeButton[i].setAttribute('src', 'img_true/frame_sp_button.svg');
    }
    const deleteButton = document.querySelectorAll('.user-content__action__list-button__delete__frame');
    for (let i = 0; i < deleteButton.length; i++) { 
        deleteButton[i].setAttribute('src', 'img_true/frame_sp_button.svg');
    }
} else {
// それ以外の処理
}

function deleteTopic() {
    const input_check = document.querySelectorAll(".user-content__action__topic__detail__check");
    const deleted = Array.from(input_check).filter( function (value) {
        return value.parentElement.classList.contains("delete");
    }); 
    const checked = Array.from(input_check).filter( function (value) {
        return value.style.opacity == 1;
    }); 
    if( 0 < checked.length ) {
        for(let checked_data of checked) {
            let topic = document.getElementById(checked_data.id);
            topic.classList.add("delete");
            topic.children[1].style.opacity = 0;
        }
        // フレームを切り替え
        const frame = document.querySelector('.user-content__action__list-frame__frame');
        let frameMedia = "";
        if (window.matchMedia('(min-width: 1300px)').matches) {
            frameMedia = "pc";
        }
        else if (window.matchMedia('(min-width: 640px)').matches) {
            frameMedia = "tab";
        }
        else {
            frameMedia = "sp";
        }
        frameSrc = "img_true/frame_" + frameMedia;
        switch (4 - deleted.length - checked.length){
            case 3:
                frameSrc = frameSrc + "_list_3.svg";
                break;
            case 2:
                frameSrc = frameSrc + "_list_2.svg";
                break;
            case 1:
                frameSrc = frameSrc + "_list_1.svg";
                break;
            case 0:
                frameSrc = "img_true/frame_pc_list_0.svg";
                break;
        }
        frame.setAttribute('src', frameSrc);

        alert("記事を削除しました。");
    }
}