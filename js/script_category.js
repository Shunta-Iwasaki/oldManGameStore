// アコーディオンメニュー
// js-ac要素すべて取得
const categoryButton = document.querySelectorAll(".main-content__category__list__button"); 
function toggleDate() {
    const month = this.nextElementSibling;
    month.classList.toggle("open-date");
    this.classList.toggle("minus-cate");
}
// for文でjs-acメニューをループ処理
for (let i = 0; i < button.length; i++) { 
    categoryButton[i].addEventListener("click", toggleDate);
}

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