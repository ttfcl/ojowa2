let abc, defg, hijk, lmop, qres,tuv
let b10000 = document.querySelector("#b10000")
let b50000 = document.querySelector("#b50000")
let b100000 = document.querySelector("#b100000")
let b300000 = document.querySelector("#b300000")
let b500000 = document.querySelector("#b500000")
let breset = document.querySelector("#breset")
let howPoint = document.querySelector("#howPoint")
let userEmail = document.querySelector("#userEmail")

master = () => { 
    const gesipanR = document.querySelectorAll('.katalkLink')
    for(let a of gesipanR) {
        a.href = abc
    }
    const gesipanD = document.querySelectorAll('.teleLink')
    for(let a of gesipanD) {
        a.href = defg
    }
    const account = document.querySelector("#account")
    account.textContent = lmop
    const bank = document.querySelector("#bank")
    bank.textContent = hijk
    const point2 = document.querySelector("#point2")
    point2.textContent = Number(tuv).toLocaleString()
    userEmail.value = localStorage.getItem('userEmail2')
}


var firebaseConfig = {
    apiKey: "AIzaSyArYfc5A61zRTmKHurBuQ50YccyQjpSFbI",
    authDomain: "link-f7ff3.firebaseapp.com",
    projectId: "link-f7ff3",
    storageBucket: "link-f7ff3.appspot.com",
    messagingSenderId: "324139020031",
    appId: "1:324139020031:web:c06cd9ebc043514658e6ca"
    };
    firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
  db.collection('product').doc('ojowa2bank').get().then((결과)=>{
    hijk = 결과.data().bank
    lmop = 결과.data().account
  })  
  db.collection('user').doc(localStorage.getItem("userEmail2")).get().then((결과)=>{
    tuv = 결과.data().grade
    console.log(tuv)
  })
  db.collection('product').doc('ojowa2').get().then((결과)=>{
    abc = 결과.data().kt
  })
  db.collection('product').doc('ojowa2').get().then((결과)=>{
    defg = 결과.data().te
  }).then(() => {
    master()
  })
  
b10000.onclick = () => {
  howPoint.value = Number(howPoint.value) + 10000
}
b50000.onclick = () => {
  howPoint.value = Number(howPoint.value) + 50000
}
b100000.onclick = () => {
  howPoint.value = Number(howPoint.value) + 100000
}
b300000.onclick = () => {
  howPoint.value = Number(howPoint.value) + 300000
}
b500000.onclick = () => {
  howPoint.value = Number(howPoint.value) + 500000 
}
breset.onclick = () => {
  howPoint.value = 0 
}


