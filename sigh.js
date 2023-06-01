if(localStorage.getItem("userEmail")) {
  alert("이미 로그인 되어 있습니다.")
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

let sighUpButton = document.querySelector("#sighUp")
let name = document.querySelector("#name")    
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let rePassword = document.querySelector("#rePassword")
let masterkey = 0;
let controll = 0;
let loginF = () => {
  if(controll === 0) {
    if(name.value === '') {
      alert("이름이 입력되지 않았습니다.")
    }else{
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
                if(rePassword.value === '') {
                  alert('비밀번호 재입력칸이 비었습니다.')
                }else {
                  if(password.value !== rePassword.value) {
                    alert('비밀번호와 비밀번호 재입력이 다릅니다.')
                  }else {
                    document.querySelector("#sighUp").classList.add("hide")
                      document.querySelector("#sighUp2").classList.remove("hide")
                      firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then((result) => {                     
                        result.user.updateProfile({displayName : name.value})
                        masterkey = 1;
                        controll = 1;
                        test3()  
                        setTimeout(function() {
                          alert('가입이 성공적으로 완료되었습니다.') 
                          location.href = "login.html";
                        }, 3000);            
                      }).catch((result) => {
                        if(masterkey === 0) {
                        alert('이미 가입 된 이메일입니다.')
                        location.href = "sigh.html"
                        }}
                      )
                  }
                }
              }
            }
          }
        }
      }
    }
  }else{
    return 0;
  }
}
sighUpButton.onclick = function() {
  loginF()
}
$(document).ready(function(){
  $(document).on('keydown',function(e){
    if (e.keyCode == 13) { 
      loginF()
    }
  });
});

let test3 = () => {
  let directer = email.value
  let name2 = name.value
  let email2 = email.value
  let password2 = password.value
  var save = {
    'displayName' : name2,
    'email' : email2,
    'password' : password2 ,
    'grade' : '0'
  }
  console.log(save)
  db.collection('user').doc(String(directer)).set(save) 
}

