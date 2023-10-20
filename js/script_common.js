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

// マウスオーバー(共通)
function mouseover(nav){
    document.getElementById(nav).innerText = document.getElementById(nav).innerText.replace("　","▶︎");
}
// マウスアウト(共通)
  function mouseout(nav){
    document.getElementById(nav).innerText = document.getElementById(nav).innerText.replace("▶︎","　");
}

// 文字点滅(共通)
let flash = document.querySelectorAll(".flash");
for (let i = 0; i < flash.length; i++) { 
    function blink() {
        flash[i].classList.toggle("hidden");
    }
    setInterval(blink, 800)
}

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

// チャットbot
// チャットbotの表示・非表示
let chatbot = document.querySelectorAll(".chatbot");
// スクロール時に動作
window.addEventListener("scroll", function(){
    // 条件と一致する時、フェードイン用/フェードアウト用クラスを付与
    ( getScrolled() > 300 ) ? chatbot[0].classList.add("chatbot-in"): chatbot[0].classList.remove( 'chatbot-in' );
});

// イベント登録
// チャットbot削除ボタン押下時に動作
const chatbotDelete = document.querySelectorAll(".chatbot__delete-btn");
chatbotDelete[0].addEventListener("click", function() {
    // 非表示用クラスを付与
    chatbot[0].classList.add("delete")
});

const formPc = document.getElementById("chatbot-pc");
formPc.addEventListener("keypress",(e) => {
    if(e.keyCode === 13 && e.target.value) {
        const chatbotImg = document.getElementById("chatbot-img-pc");
        const chatbotInfo = document.getElementById("chatbot-info-pc");
        chatbotImg.setAttribute('src','img_true/chatbot_sad.png')
        chatbotInfo.innerText = "申し訳ありません。　　この機能は準備中です"
    }
});

const formSp = document.getElementById("chatbot-sp");
formSp.addEventListener("keypress",(e) => {
    if(e.keyCode === 13 && e.target.value) {
        const chatbotImg = document.getElementById("chatbot-img-sp");
        const chatbotInfo = document.getElementById("chatbot-info-sp");
        chatbotImg.setAttribute('src','img_true/chatbot_sad_sp.png')
        chatbotInfo.innerText = "申し訳ありません。　　　　この機能は準備中です"
    }
});
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