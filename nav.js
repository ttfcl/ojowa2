let away = document.querySelector("#away")
let test = document.querySelector(".test")
let nav_top_bar_button2 = document.querySelector(".nav_top_bar_button2")
// let away2 = document.querySelector("#away2")
// let test2 = document.querySelector(".test2")
let count = 0
let count2 = 0

// nav_top_bar_button2.onclick = () => {
//     location.href = "https://ojowa.net/point.html"
// }

away.onclick = () => {
    if(count === 0) {
        test.classList.remove("hide")
        count = 1
    }else {
        test.classList.add("hide")
        count = 0
    }
}
// away2.onclick = () => {
//     if(count2 === 0) {
//         test2.classList.remove("hide")
//         count2 = 1
//     }else {
//         test2.classList.add("hide")
//         count2 = 0
//     }
// }