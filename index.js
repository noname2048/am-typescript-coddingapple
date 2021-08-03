var title = document.querySelector("#title");
// narrowing
// 01 method
if (title != null) {
    title.innerHTML = "반가워요";
}
// 02 method
if (title instanceof Element) { }
// 03 method
title = document.querySelector("#title"); // 타입사기
// 04
if ((title === null || title === void 0 ? void 0 : title.innerHTML) != undefined) { // optional chaining
    title.innerHTML = "반가워요";
}
// 05 strick mode off
var link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com";
}
// 06 narrowing
var button = document.querySelector("#button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
});
var image = document.querySelector("#image");
if (image instanceof HTMLImageElement) {
    image.src = "new.jpg";
}
var links = document.querySelectorAll(".naver");
links.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
for (var i = 0; i < 3; i++) {
    var a = links[i];
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
}
// 내가 하려던 방식, 안된다.
// if (links instanceof Array<HTMLAnchorElement>) {
// }
