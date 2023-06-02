let pointFind = document.querySelector(".nav_top_bar_button3")



// var firebaseConfig = {
//     apiKey: "AIzaSyArYfc5A61zRTmKHurBuQ50YccyQjpSFbI",
//     authDomain: "link-f7ff3.firebaseapp.com",
//     projectId: "link-f7ff3",
//     storageBucket: "link-f7ff3.appspot.com",
//     messagingSenderId: "324139020031",
//     appId: "1:324139020031:web:c06cd9ebc043514658e6ca"
//     };
//     firebase.initializeApp(firebaseConfig);
  
//   const db = firebase.firestore();

  pointFind.onclick = () => {
    db.collection('user').doc(localStorage.getItem("userEmail2")).get().then((결과)=>{
        let fgh 
        fgh = Number(결과.data().grade).toLocaleString()
        localStorage.setItem("userPoint2", fgh)
        console.log(1)
        document.querySelector("#point").textContent = fgh
      })
  }
  

