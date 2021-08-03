let title = document.querySelector("#title");
// narrowing
// 01 method
if (title != null) {
    title.innerHTML = "반가워요"
}
// 02 method
if (title instanceof Element) {}
// 03 method
title = document.querySelector("#title") as Element; // 타입사기
// 04
if (title?.innerHTML != undefined) { // optional chaining
    title.innerHTML = "반가워요"
}
// 05 strick mode off

let link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com"
}
// optional chaning
let button = document.querySelector("#button");
button?.addEventListener("click", function(){

})
let image = document.querySelector("#image");
if (image instanceof HTMLImageElement) {
    image.src = "new.jpg";
}

let links = document.querySelectorAll(".naver");
links.forEach((a) => {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
})
for (let i = 0; i < 3; i++) {
    let a = links[i];
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com"
    }
}
// 내가 하려던 방식, 안된다.
// if (links instanceof Array<HTMLAnchorElement>) {
// }
