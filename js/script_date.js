// アコーディオンメニュー
// js-ac要素すべて取得
const dateButton = document.querySelectorAll(".main-content__date__list__button"); 
function toggleDate() {
    const month = this.nextElementSibling.children;
    for (let i = 0; i < month.length; i++) {
        if (month[i].localName != "button") {
            continue;
        }
        month[i].classList.toggle("open-date-date");
    }
    this.classList.toggle("minus-date");
    if (this.classList.contains("minus-date")) {
    } else {
        for (let i = 0; i < month.length; i++) {
            month[i].classList.remove("open-date-date2");
            month[i].classList.remove("minus-date2");
        }
    }
}
// for文でjs-acメニューをループ処理
for (let i = 0; i < dateButton.length; i++) { 
    dateButton[i].addEventListener("click", toggleDate);
}

// // アコーディオンメニュー(第二階層)
// // js-ac要素すべて取得
const dateButton2 = document.querySelectorAll(".main-content__date__list__button2__button"); 
function toggleDate2() {
    const month = this.nextElementSibling.children;
    this.nextElementSibling.classList.toggle("open-date-date2")
    this.classList.toggle("minus-date2");
    if ( this.classList.contains("minus-date2") ) {
        for (let i = 0; i < month.length; i++) {
            month[i].classList.add("open-date-date");
        }
    }
}
// for文でjs-acメニューをループ処理
for (let i = 0; i < dateButton2.length; i++) { 
    dateButton2[i].addEventListener("click", toggleDate2);
}