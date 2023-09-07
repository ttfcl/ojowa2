localStorage.getItem("userDisplayName2")


if(localStorage.getItem("userDisplayName2") === null) {
    alert("프로필 및 서비스 확인을 원하시면 카카오톡으로 문의주세요.")
    location.href = "../login.html"
}