let menu = document.getElementById("menu");
let close = document.getElementById("close");
let navlinks = document.getElementById("nav-links")
menu.onclick = function showMenu() {
    navlinks.style.right="-45px"
}
close.onclick =function hideMenu() {
    navlinks.style.right = "-180px";
}
let speciality = document.getElementById("speciality");
speciality.onclick = function () {
    window.scrollTo({
        top: 600,
        behavior:"smooth"
        
    })
}
let popular = document.getElementById("popular");
popular.onclick = function () {
    window.scrollTo({
        top: 1450,
        behavior:"smooth"
        
    })
}
let home = document.getElementById("home");
home.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
        
    })
}
let gallery = document.getElementById("gallery");
gallery.onclick = function () {
    window.scrollTo({
        top: 2725,
        behavior:"smooth"
        
    })
}
let review = document.getElementById("review");
review.onclick = function () {
    window.scrollTo({
        top: 3680,
        behavior:"smooth"
        
    })
}
let order = document.getElementById("order");
order.onclick = function () {
    window.scrollTo({
        top: 4110,
        behavior:"smooth"
        
    })
}
let userName = document.getElementById("userName");
let mail = document.getElementById("mail");
let phone = document.getElementById("phone");
let foodName = document.getElementById("foodName");
let address = document.getElementById("address");
let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    let masseges = []
    if (userName.value === "" || userName.value == null) {
        masseges.push("user-name is required")
    }
    if (mail.value === "" || mail.value == null) {
        masseges.push("user-name is required")
    }
    if (phone.value === "" || phone.value == null) {
        masseges.push("user-name is required")
    }
    if (foodName.value === "" || foodName.value == null) {
        masseges.push("user-name is required")
    }
    if (address.value === "" || address.value == null) {
        masseges.push("user-name is required")
    }
    if (masseges.length > 0) {
        e.preventDefault();
    }
})
let toTop = document.querySelector(".up")
window.onscroll = function() {
    if (this.scrollY >= 500) {
        toTop.classList.add("show");
    } else {
        toTop.classList.remove("show");
    }
}
toTop.onclick = function () {
    window.scrollTo({
        top : 0,
        behavior: "smooth",
    })
}











