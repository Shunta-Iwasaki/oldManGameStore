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