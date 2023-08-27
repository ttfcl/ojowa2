localStorage.getItem("userDisplayName2")


if(localStorage.getItem("userDisplayName2") === null) {
    localStorage.setItem("alret", "alret")
    location.href = "../login.html"
}