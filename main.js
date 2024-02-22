
let toggleBtn = document.querySelector(".toggle-btn")
let navContainer = document.querySelector(".nav-container")
let navLinks = document.querySelector(".nav-links")

toggleBtn.addEventListener("click", function(){
    let navHeight = navContainer.getBoundingClientRect().height
    let linksHeight = navLinks.getBoundingClientRect().height

    if(navHeight === 0){
        navContainer.style.height = `${linksHeight}px`
    }else{
        navContainer.style.height = 0
    }
})

window.addEventListener("scroll", function(){
    document.querySelector(".nav-bar").classList.toggle
    (".window-scroll", window.scrollY>0)
})