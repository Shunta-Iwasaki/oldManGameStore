// URLを取得
const url = new URL(window.location.href);
// URLSearchParamsオブジェクトを取得
const params = url.searchParams;

setEditInfo("title");
setEditInfo("body");
setEditInfo("category");
setEditInfo("tag");

function setEditInfo (infoId) {
    const value = params.get(infoId);
    // IDを使って要素を取得する
    const info = document.getElementById(infoId);
    // 取得した要素に受け取ったパラメータを代入
    info.value = value;
}

const body = document.querySelectorAll('.user-content__action__body');
const bodyId = document.getElementById('body');
// カテゴリーフレーム切り替え(ログイン)
if (window.matchMedia('(max-width: 1280px)').matches) {
    // ウィンドウサイズ1280px以下のときの処理
    for (let i = 0; i < body.length; i++) { 
        body[i].setAttribute('src', 'img_true/frame_tab_body.svg');
    }
    bodyId.rows = 12;
    bodyId.cols = 57;
} else {
    // それ以外の処理
}
// カテゴリーフレーム切り替え(ログイン)
if (window.matchMedia('(max-width: 640px)').matches) {
        // ウィンドウサイズ640px以下のときの処理
        const text = document.querySelectorAll('.user-content__action__text');
        for (let i = 0; i < text.length; i++) { 
            text[i].setAttribute('src', 'img_true/frame_sp_text.svg');
        }
        for (let i = 0; i < body.length; i++) { 
            body[i].setAttribute('src', 'img_true/frame_sp_body.svg');
        }
        bodyId.rows = 9;
        bodyId.cols = 40;
        const button = document.querySelectorAll('.user-content__action__button');
        for (let i = 0; i < button.length; i++) { 
            button[i].setAttribute('src', 'img_true/frame_sp_button.svg');
        }
        const frame = document.querySelectorAll('.user-content__action__image__proc__frame');
        for (let i = 0; i < frame.length; i++) { 
            frame[i].setAttribute('src', 'img_true/frame_sp_add.svg');
        }
} else {
    // それ以外の処理
}

// 画像選択ボタン
const button = document.querySelectorAll(".user-content__action__image");
const selectImg = document.querySelectorAll(".user-content__action__select-image");
let clickCount = 0;

// 画像選択完了前にsetAttributeが行われないようにasync/awaitを設定
button[0].addEventListener("click", async () => {
    clickCount++;
    let idName = ("user-content__action__select-image__img" + clickCount);
    const img = document.getElementById(idName);
    const [handle] = await window.showOpenFilePicker({  
    types: [
        {
        accept: {
            'iamges/*': [
            '.jpg',
            '.jpeg',
            '.png',
            '.gif',
            '.svg'
            ]
        }
        }
    ]
    })
    const file = await handle.getFile();
    img.setAttribute('src', URL.createObjectURL(file));
    img.classList.add("show");
    img.classList.remove("delete");
    // 表示画像が0の場合、表示領域ごと非表示
    if (clickCount > 0 ) {
        selectImg[0].classList.add("show");
    } 
})