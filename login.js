localStorage.clear()


var firebaseConfig = {
  apiKey: "AIzaSyCb44FGoUhJ2swDDTkG8uhFsn3V72oc4Hk",
  authDomain: "login-7ab5b.firebaseapp.com",
  projectId: "login-7ab5b",
  storageBucket: "login-7ab5b.appspot.com",
  messagingSenderId: "758773760067",
  appId: "1:758773760067:web:376883ad21ee41080754f6"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let registerButton = document.querySelector("#register")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let masterkey = 0;
let tyui

let loginF = () => {
  if(localStorage.getItem("userEmail2")) {
    alert("이미 로그인 되어 있습니다.")
    location.href = 'index.html'
  }
  if(email.value === '') {
    alert('이메일 칸이 비어 있습니다.')
  }else {
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).then((result)=> {
      localStorage.setItem("userEmail2" , email.value)
      localStorage.setItem("userDisplayName2" , result.user.displayName)
      localStorage.setItem("masterkey2" , '1')
      masterkey = 1;
      alert("성공적으로 로그인 되었습니다.")
      location.href = "./index.html";
    }).catch((result) => {
      if(masterkey === 0) {
      alert('이메일이 존재하지 않거나 비밀번호가 일치하지 않습니다.')
      }}
    )
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