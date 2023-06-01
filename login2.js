let display1 = document.querySelector(".display1")
let display2 = document.querySelector(".display2")
let logout = document.querySelector(".logout")
let displayNameOn = document.querySelector("#displayName")
let point = document.querySelector("#point")

let change = () => {
  if(localStorage.getItem("userDisplayName2") !== null) {
    display2.classList.add("hide") 
    displayNameOn.textContent = localStorage.getItem("userDisplayName2")
    point.textContent = localStorage.getItem("userPoint2")
    display1.classList.remove("hide")    
  }
}
change()
let change2 = () => {
    display1.classList.add("hide")   
    display2.classList.remove("hide") 
}
logout.onclick = function() {
  firebase.auth().signOut().then(()=>{
    localStorage.removeItem("userEmail2")
    localStorage.removeItem("userDisplayName2")
    localStorage.removeItem("userPoint2")
    change2()
    alert("로그아웃 되었습니다.")
  })
}
