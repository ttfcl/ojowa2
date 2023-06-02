if(localStorage.getItem("userEmail")) {
  location.href = 'index.html'
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

let registerButton = document.querySelector("#register")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let masterkey = 0;
let tyui

let loginF = () => {
  if(localStorage.getItem("userEmail")) {
    alert("이미 로그인 되어 있습니다.")
    location.href = 'index.html'
  }
  if(email.value === '') {
    alert('이메일 칸이 비어 있습니다.')
  }else {
    if(email.value.search('@') === -1) {
      alert('올바른 형식의 이메일이 아닙니다.')
    }else {
      if(email.value.search('@') + 1 >= email.value.length){
        alert('올바른 형식의 이메일이 아닙니다.')
      }else {
        if(password.value === '') {
          alert('비밀번호가 입력되지 않았습니다.')
        }else {
          if(password.value.length < 6) {
            alert('비밀번호가 6자리 미만입니다.')
          }else {
            firebase.auth().signInWithEmailAndPassword(email.value, password.value).then((result)=> {
              localStorage.setItem("userEmail2" , email.value)
              db.collection('user').doc(email.value).get().then((결과)=>{
                tyui = Number(결과.data().grade).toLocaleString()
                console.log(tyui)
                localStorage.setItem("userPoint2", tyui)
                localStorage.setItem("userDisplayName2" , result.user.displayName)
                masterkey = 1;
              }).then(() => {
                alert("성공적으로 로그인 되었습니다.")
                location.href = "./index.html";
              })
            }).catch((result) => {
              if(masterkey === 0) {
              alert('이메일이 존재하지 않거나 비밀번호가 일치하지 않습니다.')
              }}
            )
          }
        }
      }
    }
  }
}

registerButton.onclick = function() {
  loginF()
}
$(document).ready(function(){
  $(document).on('keydown',function(e){
    if (e.keyCode == 13) { 
      loginF()
    }
  });
});